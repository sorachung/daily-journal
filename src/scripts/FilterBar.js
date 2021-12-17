import { setFilterState } from "./dataAccess.js";
import { MoodFilter } from "./MoodFilter.js";

const filterContent = document.querySelector(".filters");
const container = document.querySelector(".container")
export const FilterBar = () => {
    const render = () => {
        filterContent.innerHTML = `${MoodFilter()}`;
    };

    render();
};

filterContent.addEventListener("change", (event) => {
    if (event.target.name === "moodFilter") {
        const selectedMoodId = parseInt(event.target.value);
        setFilterState(selectedMoodId);
        container.dispatchEvent(new CustomEvent("stateChanged"))
    }
});
