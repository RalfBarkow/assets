function relIndex(id, pageId) {

    // Check if the rel already exists in the graph
    const relId = graph.rels.findIndex(rel => rel.type === 'fromParaToPage' && rel.from === id && rel.to === pageId);
    
    console.log("Paragraph Recommendation Viewer: ", relId);
    return relId;
}

export { relIndex }; // Export the function to make it accessible to other modules
