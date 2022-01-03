/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const applicationState = {
    "entries": [],
    "moods": [],
    "tags": [],
    "entrytags": [],
    "instructors": []
}

const filterState = {}

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

export const getTags = () => applicationState.tags.map(tag => ({ ...tag }))

export const getEntrytags = () => applicationState.entrytags.map(entrytag => ({ ...entrytag }))

export const getinstructors = () => applicationState.instructors.map(instructor => ({ ...instructor }))



export const getFilterState = () => ({ ...filterState })

export const setFilterState = (moodId) => filterState.moodId = moodId

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

export const fetchTags = () => {
    return fetch(`${API}/tags`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(tags => { 
            applicationState.tags = tags;
            // What should happen when we finally have the array?
        })
}

export const fetchEntrytags = () => {
    return fetch(`${API}/entrytags`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entrytags => { 
            applicationState.entrytags = entrytags;
            // What should happen when we finally have the array?
        })
}

export const fetchInstructors = () => {
    return fetch(`${API}/instructors`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(instructors => { 
            applicationState.instructors = instructors;
            // What should happen when we finally have the array?
        })
}


export const saveJournalEntry = (newJournalEntry) => {
    // Use `fetch` with the POST method to add your entry to your API
    return fetch(`${API}/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
        // .then(
        //     (response) => {
        //         //  Get all journal entries
        //         response.json()
        //     }
        // )
        // .then(
        //     () => {
        //         //  Broadcast the state change event
        //         mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        //     }
        // )
}

export const saveEntrytags = (newEntrytag) => {
    return fetch(`${API}/entrytags`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntrytag)
    })
}

export const saveTags = (newTag) => {
    return fetch(`${API}/tags`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTag)
    })
}


export const deleteJournalEntry = (id) => {
    fetch(`${API}/entries/${id}`, { method: "DELETE" })
        .then( () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}