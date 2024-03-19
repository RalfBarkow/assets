import { Graph } from 'https://wardcunningham.github.io/graph/graph.js';

// Function to handle messages received from "SOURCE graph" frame
function handleGraphStream(message) {
    const json = JSON.parse(message.jsonl.trim());
    const graph = new Graph(json.nodes, json.rels);
    console.log("handleGraphStream: ", graph);

    // Process the graph data as needed
    const result = graph.search('match (n:a988355fcbeb4933)');
    console.log("match: ", result);

}

export { handleGraphStream }; // Export the function to make it accessible to other modules
