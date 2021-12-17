import { DailyJournal } from "./DailyJournal.js";
import { fetchEntries, fetchMoods } from "./dataAccess.js";
import { FilterBar } from "./FilterBar.js";

const container = document.querySelector(".container")
const mainContentContainer = document.querySelector(".mainContent");

const render = () => {
  Promise.all([fetchEntries(), fetchMoods()])
    .then(() =>{
      mainContentContainer.innerHTML = DailyJournal();
      FilterBar();
    } )
};

render();

container.addEventListener("stateChanged", event => {
  render();
})