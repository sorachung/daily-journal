import { saveJournalEntry, getMoods, getTags, saveTags, saveEntrytags } from "./dataAccess.js";

export const JournalForm = () => {
  const moods = getMoods();
    return `
        <div class="field">
          <label for="entryDate">Date</label>
          <input type="date" name="entryDate" class="entryForm__date" />  
        </div> 
        <div class="field">
          <label for="entryConcept">Concepts covered</label>
          <input type="text" name="entryConcept" class="entryForm__concept" />
        </div>
        <div class="field">
          <label for="entryEntry">Journal Entry</label>
          <textarea
            name="entryEntry"
            class="entryForm__entry"
            placeholder="Enter your journal entry here..."
          ></textarea>
        </div>
        <div class="field">
          <label for="entryMood">Mood for the day</label>
          <select id="entryMood">
            <option value="0">select a mood</option>
            ${moods.map((mood => {
              return `<option value="${mood.id}">${mood.label}</option>`
            })).join("")
          }
          </select>
        </div>
        <div class="field">
          <label for="entryTags">Tags</label>
          <input type="text" name="entryTags" class="entryForm__tags" />
        </div>
        <button id="journalEntryBtn">Record Journal Entry</button>
 
  `;
};

const mainContainer = document.querySelector(".container")

document.addEventListener("click", (event) => {
    if (event.target.id === "journalEntryBtn") {
        const moodId = parseInt(document.querySelector(`select[id="entryMood"]`).value);
        if(moodId !== 0) {
          const date = document.querySelector(`input[name="entryDate"]`).value;
          const concept = document.querySelector(
              `input[name="entryConcept"]`
          ).value;
          const journalEntry = document.querySelector(
              `textarea[name="entryEntry"]`
          ).value;
          const tagsInput = document.querySelector(`input[name="entryTags"`).value
          let tagsInputArray = tagsInput.trim().split(",")
          if (tagsInputArray[tagsInputArray.length - 1] === '') {
            tagsInputArray.pop();
          }
          tagsInputArray = tagsInputArray.map(tag => tag.trim());
          let tags = getTags();
          const tagsPromisesArray = [];
          const entrytagsPromisesArray = [];

          const uniqueTagsInputArray = tagsInputArray.filter(inputTag => {
             return !tags.find(tag => tag.subject.toLowerCase() === inputTag.toLowerCase().trim())
          })         
          
          const finishedEntry = {
            date: date,
            concept: concept,
            entry: journalEntry,
            moodId: moodId
          }

          
          uniqueTagsInputArray.forEach(tag => {
            const newTag = {
              subject: tag
            }
            tagsPromisesArray.push(saveTags(newTag))
          })
          Promise.all(tagsPromisesArray).then( () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
            saveJournalEntry(finishedEntry)
              .then(response => response.json())
              .then((entry) => {
                tags = getTags();
                tagsInputArray.forEach(tagInput => {
                  const tagInputId = tags.find(tag => tag.subject === tagInput).id
                  const newEntrytag = {
                    entryId: entry.id,
                    tagId: tagInputId
                  }
                  entrytagsPromisesArray.push(saveEntrytags(newEntrytag))
                })
                Promise.all(entrytagsPromisesArray).then(() => {
                  mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                })
               
              })
                
          })
          
        }
        
    }
});
