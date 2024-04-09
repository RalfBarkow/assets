function recommend(chosen) {
    const vocabulary = new Set();
    const hash = node => `${node.type}: ${node.props.name || ''}`;

    // Step 1: Build vocabulary
    for (const poem of chosen) {
        for (const node of poem.graph.nodes) {
            vocabulary.add(hash(node));
        }
    }

    // Step 2: Check for similarity and set "recommended" property for recommended nodes
    const similar = (graph) => {
        for (const node of graph.nodes) {
            if (vocabulary.has(hash(node))) { 
                node.props["recommended"] = true;
                return true;
            }
        }
        // If no similar node found, set "recommended" property to false
        for (const node of graph.nodes) {
            node.props["recommended"] = false;
        }
        return false;
    }
}
