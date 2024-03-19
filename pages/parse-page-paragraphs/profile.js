// profile.js

// Function to compute the profile of a paragraph using trigrams
function computeProfile(paragraph) {
    const trigramCount = new Array(19683).fill(0); // Initialize trigram count array
    
    // Tokenize the paragraph into trigrams using the imported function
    const trigrams = tokenizeParagraph(paragraph);
    
    // Count the occurrences of each trigram
    for (const trigram of trigrams) {
        // Map the trigram to its index in the trigram count array
        const index = trigram.charCodeAt(0) * 729 + trigram.charCodeAt(1) * 27 + trigram.charCodeAt(2);
        // Increment the count for the trigram
        trigramCount[index]++;
    }
    
    return trigramCount;
}

// Export the computeProfile function for use in other modules
export { computeProfile };
