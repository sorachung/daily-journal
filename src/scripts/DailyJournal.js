import { Entries } from "./Entries.js";
import { JournalForm } from "./JournalForm.js"

export const DailyJournal = () => {
  return `
        <h1>Daily Journal</h1>
        
        <article class="entryForm">
            ${JournalForm()}
        </article>

        <div class="entryList">
            ${Entries()}
        </div>
    `;
};
