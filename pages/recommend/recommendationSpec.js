// recommendationSpec.js

describe('recommend function', function() {
  let chosen;

  beforeEach(function() {
    // Sample chosen data for testing
    chosen = [
      { graph: { nodes: [{ type: 'node', props: { name: 'A' } }] } },
      { graph: { nodes: [{ type: 'node', props: { name: 'B' } }] } }
    ];
  });

  it('should correctly generate vocabulary', function() {
    recommend(chosen);
    // Check if vocabulary contains expected hashes
    expect(vocabulary.size).toBe(2); // Assuming two nodes with distinct names
    expect(vocabulary.has('node: A')).toBeTrue();
    expect(vocabulary.has('node: B')).toBeTrue();
  });

  it('should correctly determine similarity', function() {
    recommend(chosen);
    // Create a graph with a similar node
    const similarGraph = { nodes: [{ type: 'node', props: { name: 'C' } }] };
    expect(similar(similarGraph)).toBeTrue();
    
    // Create a graph without a similar node
    const dissimilarGraph = { nodes: [{ type: 'node', props: { name: 'D' } }] };
    expect(similar(dissimilarGraph)).toBeFalse();
  });

  // Add more test cases as needed
  
  it('should update checkbox colors correctly', function() {
    // Mock window.beam and checkboxes
    setFixtures(`
      <div id="beam">
        <input type="checkbox" value="1" checked>
        <label for="1">Option 1</label>
        <input type="checkbox" value="2">
        <label for="2">Option 2</label>
      </div>
    `);

    recommend(chosen);

    // Check if checkbox colors are updated correctly
    expect($('#1').next().css('color')).toBe('black'); // Assuming Option 1 is dissimilar
    expect($('#2').next().css('color')).toBe('darkorange'); // Assuming Option 2 is similar
  });
});
