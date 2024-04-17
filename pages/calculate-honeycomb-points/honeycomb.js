// honeycomb.js

// Function to calculate the points of the honeycomb polygon with a variable scaling factor
const calculateHoneycombPoints = (scalingFactor) => {
    // Define the original points of the honeycomb polygon
    const originalPoints = [
        [1, 13.5],
        [5, 11],
        [9, 13.5],
        [9, 17.5],
        [5, 20],
        [1, 17.5]
    ];

    // Scale the original points based on the scaling factor
    const scaledPoints = originalPoints.map(([x, y]) => [x * scalingFactor, y * scalingFactor]);

    // Format the scaled points as a string
    const pointsString = scaledPoints.map(point => point.join(',')).join(' ');

    return pointsString;
};

export { calculateHoneycombPoints };
