import { Particle } from './particle.js'; 

class Node {
  constructor(x, y) {
    this.x = x; // X-coordinate of the node
    this.y = y; // Y-coordinate of the node
    this.occupied = false; // Flag to indicate if the node is occupied by a particle
  }
}

// Create triangular grid of nodes
const nodes = [];
const numRows = 10; // Number of rows in the grid
const numCols = 10; // Number of columns in the grid
for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numCols; j++) {
    // Calculate position of node based on row and column
    const x = j * 2; // Adjust based on the triangular grid layout
    const y = i * 2; // Adjust based on the triangular grid layout
    const node = new Node(x, y);
    nodes.push(node);
  }
}

// Create particles
const particles = [];
const numParticles = 5; // Number of particles in the simulation
for (let i = 0; i < numParticles; i++) {
  // Randomly select starting position for each particle
  const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
  const particle = new Particle(i, randomNode, 'contracted');
  randomNode.occupied = true;
  particles.push(particle);
}

// Simulate particle movement
setInterval(() => {
  particles.forEach((particle) => {
    particle.move();
    console.log(`Particle ${particle.id} moved to position (${particle.position.x}, ${particle.position.y})`);
  });
}, 1000); // Adjust simulation speed as needed

// Export the Node class
export { Node };
