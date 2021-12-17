import { DailyJournal } from "./DailyJournal.js";
import { fetchEntries, fetchMoods } from "./dataAccess.js";

const container = document.querySelector(".container")
const mainContentContainer = document.querySelector(".mainContent");

const render = () => {
  Promise.all([fetchEntries(), fetchMoods()])
    .then(() => mainContentContainer.innerHTML = DailyJournal())
};

render();

container.addEventListener("stateChanged", event => {
  render();
})