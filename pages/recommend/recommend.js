export function recommend(chosen) {
    // Define the overall graph object for testing purposes
    // Get the graph from the first item in the chosen array, if it exists
    const graph = chosen.length > 0 ? chosen[0].graph : {};

    const vocabulary = new Set()
    const hash = node => `${node.type}: ${node.props.name || ''}`

    for (const poem of chosen) {
      for (const node of poem.graph.nodes) {
        vocabulary.add(hash(node))
      }
    }

    const similar = (graph) => {
        let foundSimilar = false; // Flag to track if a similar node is found
        for (const node of graph.nodes) {
            if (vocabulary.has(hash(node))) {
                node.props["recommended"] = true;
                foundSimilar = true; // Update the flag
            } else {
                node.props["recommended"] = false;
            }
        }
        return foundSimilar; // Return whether a similar node was found
    };
    console.log("recommend: ", similar);
  }