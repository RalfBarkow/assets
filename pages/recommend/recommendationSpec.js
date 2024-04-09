describe("recommend function", () => {
  let graph;

  beforeEach(() => {
    // Initialize or create the graph object before each test
    graph = {
      nodes: [
        { type: "A", props: { name: "Node A" } },
        { type: "B", props: { name: "Node B" } },
        { type: "C", props: { name: "Node C" } }
      ]
    };
  });

  it("should correctly determine similarity and set recommended property to true", () => {
    // Simulate the vocabulary set
    const vocabulary = new Set(["A: Node A", "B: Node B"]);

    // Call the similar function
    const result = similar(graph, vocabulary);

    // Expect the result to be true
    expect(result).toBe(true);

    // Expect nodes A and B to have recommended property set to true
    expect(graph.nodes[0].props.recommended).toBe(true);
    expect(graph.nodes[1].props.recommended).toBe(true);

    // Expect node C to have recommended property set to false
    expect(graph.nodes[2].props.recommended).toBe(false);
  });

  it("should set recommended property to false for all nodes when no similarity found", () => {
    // Simulate an empty vocabulary set
    const vocabulary = new Set();

    // Call the similar function
    const result = similar(graph, vocabulary);

    // Expect the result to be false
    expect(result).toBe(false);

    // Expect all nodes to have recommended property set to false
    graph.nodes.forEach(node => {
      expect(node.props.recommended).toBe(false);
    });
  });
});
