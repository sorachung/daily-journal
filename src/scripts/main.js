import { DailyJournal } from "./DailyJournal.js";
import { fetchEntries } from "./dataAccess.js";

const container = document.querySelector("#entries");

const render = () => {
  fetchEntries().then(() => container.innerHTML = DailyJournal())
};

render();
