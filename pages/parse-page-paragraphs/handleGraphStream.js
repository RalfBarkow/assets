import { Graph } from 'https://wardcunningham.github.io/graph/graph.js';

// Function to handle messages received from "SOURCE graph" frame
function handleGraphStream(message, graphPromise) {
    const json = JSON.parse(message.jsonl.trim());
    const graph = new Graph(json.nodes, json.rels);
    console.log("handleGraphStream: ", graph);

    // Process the graph data as needed
    const result = graph.search('match (n)');
    console.log("(handleGraphStream) match: ", result);

    // Resolve the promise with the graph instance
    graphPromise.resolve(graph);
}
export { handleGraphStream };
