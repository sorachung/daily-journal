/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": []
}

const API = `http://localhost:8088`
const mainContainer = document.querySelector("#content");

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}


export const getEntries = () => {
    return fetch(`${API}/entries`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => { 
            database.entries = entries;
            // What should happen when we finally have the array?
        })
}

export const saveJournalEntry (newJournalEntry) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch(`${API}/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
        .then(
            (response) => {
                //  Get all journal entries
                response.json()
            }
        )
        .then(
            () => {
                //  Broadcast the state change event
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}