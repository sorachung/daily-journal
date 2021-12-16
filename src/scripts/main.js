import { DailyJournal } from "./DailyJournal.js";
import { fetchEntries, fetchMoods } from "./dataAccess.js";

const container = document.querySelector(".container");

const render = () => {
  Promise.all([fetchEntries(), fetchMoods()])
    .then(() => container.innerHTML = DailyJournal())
};

render();

container.addEventListener("stateChanged", event => {
  render();
})