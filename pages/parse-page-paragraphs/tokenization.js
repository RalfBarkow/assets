// tokenization.js

// Function to tokenize a paragraph into trigrams
function tokenizeParagraph(paragraph) {
    const trigrams = [];
    const words = paragraph.toLowerCase().split(/\s+/);
    
    // Iterate through each word to generate trigrams
    for (const word of words) {
        if (word.length >= 3) {
            // Generate trigrams for the word
            for (let i = 0; i < word.length - 2; i++) {
                trigrams.push(word.slice(i, i + 3));
            }
        }
    }
    
    return trigrams;
}

// Export the tokenizeParagraph function for use in other modules
export { tokenizeParagraph };
