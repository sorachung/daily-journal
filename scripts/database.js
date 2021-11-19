// this database will have journal entry objects
const database = {
    journalEntries: {

    }
}


export const getJournalEntries = () => {
    return database.journalEntries.map((entry) => ({ ...entry }));
  };