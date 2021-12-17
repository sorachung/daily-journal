import { getFilterState, getMoods } from "./dataAccess.js"

export const MoodFilter = () => {
    const moods = getMoods();
    const filterState = getFilterState();
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            <input type="radio" ${filterState.moodId === 0 ? `checked="checked"` : ``} name="moodFilter" value="0"/>
                    <label for=moodFilter>all</label>
            ${moods.map(mood => {
                return `<input type="radio" ${filterState.moodId === mood.id ? `checked="checked"` : ``} name="moodFilter" value="${mood.id}"/>
                    <label for=moodFilter>${mood.label}</label>`
            }).join("")}
        </fieldset>
    `;
}