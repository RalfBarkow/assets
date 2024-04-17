// honeycomb.spec.js

import { calculateHoneycombPoints } from './honeycomb.js';

describe('calculateHoneycombPoints', () => {
  it('should return the scaled points of the honeycomb polygon', () => {
    // Define the expected points for a scaling factor of 3
    const expectedPoints = '3,40.5 15,33 27,40.5 27,52.5 15,60 3,52.5';

    // Calculate honeycomb points with a scaling factor of 3
    const scalingFactor = 3;
    const honeycombPoints = calculateHoneycombPoints(scalingFactor);

    // Expect the result to match the expected points
    expect(honeycombPoints).toEqual(expectedPoints);
  });

  it('should return the original points if scaling factor is 1', () => {
    // Define the original points of the honeycomb polygon
    const originalPoints = '1,13.5 5,11 9,13.5 9,17.5 5,20 1,17.5';

    // Calculate honeycomb points with a scaling factor of 1
    const scalingFactor = 1;
    const honeycombPoints = calculateHoneycombPoints(scalingFactor);

    // Expect the result to match the original points
    expect(honeycombPoints).toEqual(originalPoints);
  });
});
