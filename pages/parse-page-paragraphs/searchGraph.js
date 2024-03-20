// Function to perform a search in the graph based on paragraph IDs
async function searchGraph(paragraphList) {
    const paragraphIds = paragraphList.getIds(); // Get the list of paragraph IDs
    console.log("(searchGraph) paragraphList: ", paragraphIds);

    if (paragraphIds.length === 0) {
        console.log("No paragraph IDs to search.");
        return; // Exit if there are no paragraph IDs
    }

    // Wait for the graph instance to become available
    graphPromise.promise.then((value) => {
        // Use the resolved value here
        console.log("(searchGraph) promise value: ", value);
        
        // Create the graph instance using the graph data
        const graphInstance = new Graph(value.nodes, value.rels);
        
        // Perform the graph search for each paragraph ID
        for (const paragraphId of paragraphIds) {
            // Construct the match query with the paragraphId variable
            const query = 'match (n:' + paragraphId + ')';
            console.log(`(searchGraph) query:`, query);

            try {
                // Perform the graph search using the constructed query
                const result = graphInstance.search(query);

                // Process the result
                console.log(`(searchGraph) result for paragraph ID ${paragraphId}:`, result);
            } catch (error) {
                console.error(`(searchGraph) Error occurred during graph search for paragraph ID ${paragraphId}:`, error);
            }
        }
    }).catch((error) => {
        // Handle errors if the promise is rejected
        console.error(error);
    });
}
