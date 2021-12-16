/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { deleteJournalEntry, getJournalEntries } from "./dataAccess.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `<section class="entry">
        <h2>${entry.concept}</h2>
        <h3>${entry.date}</h3>
        <p>${entry.entry}</p>
        <p>I felt ${entry.mood.label}.</p>
        <button name="deleteEntryBtn" id=${entry.id}>Delete Entry</button>
        </section>
        `
    }

    return allEntriesAsHTML
}

const mainContainer = document.querySelector(".container");

mainContainer.addEventListener("click", event => {
    if(event.target.name === "deleteEntryBtn") {
        const currentEntryId = parseInt(event.target.id);
        deleteJournalEntry(currentEntryId);
    }
})