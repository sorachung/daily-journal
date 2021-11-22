import { Entries } from "./Entries.js"

export const DailyJournal = () => {
    return `
        <div class="entryList">
            ${ Entries() }
        </div>
    `
}
