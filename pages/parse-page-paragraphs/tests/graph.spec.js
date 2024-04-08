import { Graph } from '../graph/graph.js'; 

describe('Graph Tests', () => {
  // Use the graphData fixture in your tests
  it('should have correct number of nodes', () => {
    expect(graphData.nodes.length).toBe(79); // Example assertion
  });

  it('should have correct number of rels', () => {
    expect(graphData.rels.length).toBe(79); // Example assertion
  });

  // Test a query
  it('should return correct results for a query', () => {
    const query = 'match (n:d5c469074553cb08)'; // Node 3 is found, nodes 1 and 2 are not; type starts with a number in these not found cases?!
    // Create a new Graph instance using graphData
    const graphInstance = new Graph(graphData.nodes, graphData.rels);
    const result = graphInstance.search(query);
    // Add assertions to check the result
    // For example:
    expect(result).toContain(/* expected result */);
  })

  // More tests using the graphData fixture...
});
