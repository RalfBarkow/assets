// comparison.js

// Function to compare profiles of paragraphs using cosine similarity
function compareProfiles(profile1, profile2) {
    // Compute dot product
    let dotProduct = 0;
    for (let i = 0; i < profile1.length; i++) {
        dotProduct += profile1[i] * profile2[i];
    }
    
    // Compute magnitudes
    const magnitude1 = Math.sqrt(profile1.reduce((acc, val) => acc + val * val, 0));
    const magnitude2 = Math.sqrt(profile2.reduce((acc, val) => acc + val * val, 0));
    
    // Compute cosine similarity
    const similarity = dotProduct / (magnitude1 * magnitude2);
    
    return similarity;
}

// Export the compareProfiles function for use in other modules
export { compareProfiles };
