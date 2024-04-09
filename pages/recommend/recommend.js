function recommend(chosen) {
    const vocabulary = new Set();
    const hash = node => `${node.type}: ${node.props.name || ''}`;

    // Step 1: Build vocabulary
    for (const poem of chosen) {
        for (const node of poem.graph.nodes) {
            vocabulary.add(hash(node));
        }
    }

    // Step 2: Check for similarity
    const similar = (graph) => {
        for (const node of graph.nodes) {
            if (vocabulary.has(hash(node))) return true;
        }
        return false;
    }

    // Step 3: Update checkbox colors
    // Assuming recommended items are stored in a global variable `recommendedItems`
    window.recommendedItems.forEach(item => {
        const color = !item.checked && similar(item.graph) ? 'darkorange' : 'black';
        item.nextElementSibling.style.color = color;
    });
}
