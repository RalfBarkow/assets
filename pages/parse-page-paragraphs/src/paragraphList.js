// Define an object to manage the list of paragraph IDs
const paragraphList = {
    ids: [],

    // Function to add paragraph IDs to the list
    addIds(newIds) {
        this.ids.push(...newIds);
    },

    // Function to clear the list of paragraph IDs
    clearIds() {
        this.ids = [];
    },

    // Function to get the list of paragraph IDs
    getIds() {
        return this.ids;
    }
};

// Usage example:
//paragraphList.addIds(['id1', 'id2', 'id3']);
//console.log(paragraphList.getIds()); // Output: ['id1', 'id2', 'id3']

// Export the paragraphList object
export default paragraphList;
