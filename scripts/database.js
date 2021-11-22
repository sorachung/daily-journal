/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "07/25/2025",
            concept: "Javascript variables",
            entry: "We talked about variables in javascript and how to use them.",
            mood: "Good"
        },
        {
            id: 3,
            date: "07/26/2025",
            concept: "Javascript arrays",
            entry: "We talked about what arrays are and how to use them in javascript",
            mood: "Great"
        },
        {
            id: 4,
            date: "07/27/2025",
            concept: "javascript for loops",
            entry: "We talked about for loops and the syntax of them in javascript.",
            mood: "frustrated"
        },

    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}
