/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const applicationState = {
    "entries": [],
    "moods": []
}

const API = `http://localhost:8088`
const mainContainer = document.querySelector(".container");

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = applicationState.entries.map(entry => ({...entry}))
    return copyOfData
}

export const getMoods = () => applicationState.moods.map(mood => ({ ...mood }))


export const fetchEntries = () => {
    return fetch(`${API}/entries?_expand=mood`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => { 
            applicationState.entries = entries;
            // What should happen when we finally have the array?
        })
}

export const fetchMoods = () => {
    return fetch(`${API}/moods`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(moods => { 
            applicationState.moods = moods;
            // What should happen when we finally have the array?
        })
}

export const saveJournalEntry = (newJournalEntry) => {
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

export const deleteJournalEntry = (id) => {
    fetch(`${API}/entries/${id}`, { method: "DELETE" })
        .then( () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}