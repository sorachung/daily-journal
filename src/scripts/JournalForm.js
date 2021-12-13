import { saveJournalEntry } from "./dataAccess.js";

export const JournalForm = () => {
    return `
        <div class="field">
          <label for="entryDate">Date</label>
          <input type="date" name="entryDate" class="entryForm__date" />  
        </div> 
        <div class="field">
          <label for="entryConcept">Concepts covered</label>
          <input type="text" name="entryConcept" class="entryForm__concept" />
        </div>
        <div class="field">
          <label for="entryEntry">Journal Entry</label>
          <textarea
            name="entryEntry"
            class="entryForm__entry"
            placeholder="Enter your journal entry here..."
          ></textarea>
        </div>
        <div class="field">
          <label for="entryMood">Mood for the day</label>
          <select id="entryMood">
            <option value="happy">happy</option>
            <option value="sad">sad</option>
            <option value="frustrated">frustrated</option>
            <option value="depressed">depressed</option>
            <option value="exuberant">exuberant</option>
            <option value="content">content</option>
            <option value="neutral" selected>neutral</option>
          </select>
        </div>
        <button id="journalEntryBtn">Record Journal Entry</button>
 
  `;
};

document.addEventListener("click", (event) => {
    if (event.target.id === "journalEntryBtn") {
        const date = document.querySelector(`input[name="entryDate"]`).value;
        const concept = document.querySelector(
            `input[name="entryConcept"]`
        ).value;
        const journalEntry = document.querySelector(
            `textarea[name="entryEntry"]`
        ).value;
        const mood = document.querySelector(`select[id="entryMood"]`).value;

        const finishedEntry = {
          date: date,
          concept: concept,
          entry: journalEntry,
          mood: mood
        }

        saveJournalEntry(finishedEntry)
    }
});
