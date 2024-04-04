import { parse, gen, check, apply } from '../cypher.js';

describe('Cypher Parser Tests', () => {
  describe('parse function', () => {
    it('should parse simple text', () => {
      const text = 'MATCH (n)';
      const tree = parse(text);
      expect(tree).toEqual([['match', ['node', ['term', 'MATCH'], ['elem', ['word', 'n']], ['eot']]]]);
    });

    // Add more test cases to cover different scenarios
  });

  describe('gen function', () => {
    it('should generate code from tree', () => {
      const tree = [['match', ['node', ['term', 'MATCH'], ['elem', ['word', 'a']], ['eot']]]];
      const code = {};
      const generatedCode = gen(0, tree, code);
      expect(generatedCode).toEqual({ match: { node: { type: 'MATCH', props: {} }, chain: {} } });
    });

    // Add more test cases to cover different scenarios
  });

  describe('check function', () => {
    it('should check the code against the tally', () => {
      const tally = { nodes: { 'MATCH': 1 }, rels: {} };
      const code = { node: { type: 'MATCH' } };
      const errors = [];
      check(tally, code, errors);
      expect(errors.length).toBe(0); // Assuming no errors for this test case
    });

    // Add more test cases to cover different scenarios
  });

  describe('apply function', () => {
    it('should apply the code to the graph', () => {
      const graph = {
        nodes: [{ type: 'MATCH', props: {} }],
        rels: []
      };
      const code = { node: { type: 'MATCH' }, chain: {} };
      const results = apply(graph, code);
      expect(results.length).toBe(1); // Assuming one result for this test case
    });

    // Add more test cases to cover different scenarios
  });
});
