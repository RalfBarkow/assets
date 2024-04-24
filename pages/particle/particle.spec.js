import { Particle } from './particle.js'; 

describe('Particle movement', () => {
  let particles;
  let nodes;

  beforeEach(() => {
    // Initialize particles and nodes before each test
    particles = [];
    nodes = [];

    // Create triangular grid of nodes
    const numRows = 10; // Number of rows in the grid
    const numCols = 10; // Number of columns in the grid
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const x = j * 2; // Adjust based on the triangular grid layout
        const y = i * 2; // Adjust based on the triangular grid layout
        const node = new Node(x, y);
        nodes.push(node);
      }
    }

    // Create particles
    const numParticles = 5; // Number of particles in the simulation
    for (let i = 0; i < numParticles; i++) {
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
      const particle = new Particle(i, randomNode, 'contracted');
      randomNode.occupied = true;
      particles.push(particle);
    }
  });

  it('should move contracted particle to adjacent unoccupied node when moving', () => {
    const particle = particles[0];
    const startingPosition = particle.position;

    // Simulate movement
    particle.move();

    // Ensure particle has moved to an adjacent node
    expect(particle.position).not.toEqual(startingPosition);
    expect(particle.position.x % 2).toBe(0); // Ensure x-coordinate is even (triangular grid)
    expect(particle.position.y % 2).toBe(0); // Ensure y-coordinate is even (triangular grid)
    expect(particle.position.occupied).toBe(true); // Ensure new position is occupied
  });

  it('should contract expanded particle to one of its nodes when moving', () => {
    const particle = particles[1];
    particle.state = 'expanded';
    particle.head = nodes[0]; // Set head node for expanded particle
    particle.tail = nodes[1]; // Set tail node for expanded particle

    // Simulate movement
    particle.move();

    // Ensure particle has contracted to one of its nodes
    expect(particle.state).toBe('contracted');
    expect(particle.head).toBeNull(); // Head node should be null after contraction
    expect(particle.tail.occupied).toBe(true); // Ensure contracted position is occupied
  });
});
