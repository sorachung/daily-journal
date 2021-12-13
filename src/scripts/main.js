import { DailyJournal } from "./DailyJournal.js";
import { fetchEntries } from "./dataAccess.js";

const container = document.querySelector(".container");

const render = () => {
  fetchEntries().then(() => container.innerHTML = DailyJournal())
};

render();

container.addEventListener("stateChanged", event => {
  render();
})