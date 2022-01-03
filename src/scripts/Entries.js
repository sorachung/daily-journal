/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { deleteJournalEntry, getEntrytags, getFilterState, getinstructors, getJournalEntries, getTags } from "./dataAccess.js"

export const Entries = () => {
    const filterState = getFilterState();
    let entries = getJournalEntries()
    let allEntriesAsHTML = ""
    if(filterState.hasOwnProperty("moodId") && filterState.moodId > 0) {
        entries = entries.filter(entry => {
            return entry.mood.id === filterState.moodId;
        })
    }

    const entrytags = getEntrytags();
    const tags = getTags();
    const instructors = getinstructors()

    for (const entry of entries) {
        const foundEntrytags = entrytags.filter(entrytag => entrytag.entryId === entry.id);
        const foundTags = tags.filter(tag => {
            return foundEntrytags.find(entrytag => entrytag.tagId === tag.id)
        })
        const foundInstructor = instructors.find(instructor => instructor.id === entry.instructorId)

        allEntriesAsHTML += `<section class="entryCard">
        <h2>${entry.concept}</h2>
        <h3>${entry.date}</h3>
        <p>${entry.entry}</p>
        <p>I felt ${entry.mood.label}.</p>
        <p>I was helped by ${foundInstructor.firstName} ${foundInstructor.lastName}</p>
        <ul class="tags">
            ${foundTags.map(tag => `<li class="tags__item">${tag.subject}</li>`).join("")}
        </ul>
        <button class="deleteEntryBtn" name="deleteEntryBtn" id=${entry.id}>Delete Entry</button>
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