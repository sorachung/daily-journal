export const JournalForm = () => {
  return `
        <form class="entryForm">
            <fieldset>
              <label for="entryDate">Date</label>
              <input type="date" name="entryDate" class="entryForm__date" />
            </fieldset>
            <fieldset>
              <label for="entryConcept">Concepts covered</label>
              <input type="text" name="entryConcept" class="entryForm__concept" />
            </fieldset>
            <fieldset>
              <label for="entryEntry">Journal Entry</label>
              <textarea
                name="entryEntry"
                class="entryForm__entry"
                placeholder="Enter your journal entry here..."
              ></textarea>
            </fieldset>
            <fieldset> 
              <label for="entryMood">Mood for the day</label>
              <select id="entryMood">
                <option value="happy">happy</option>
                <option value="sad">sad</option>
                <option value="frustrated">frustrated</option>
                <option value="depressed">depressed</option>
                <option value="exuberant">exuberant</option>
                <option value="content">content</option>
                <option value="Ok" selected>neutral</option>
              </select>
            </fieldset>
            <button>Record Journal Entry</button>
          </form>
  `;
};
