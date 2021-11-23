import { Entries } from "./Entries.js";
import { JournalForm } from "./JournalForm.js"

export const DailyJournal = () => {
  return `
        <h1>Daily Journal</h1>
        <div class="entryList">
            ${Entries()}
        </div>

        <article class="entryForm">
            ${JournalForm()}
        </article>
    `;
};
