export function recommend(chosenParagraph) {
    console.log('Recommendation function called:', chosenParagraph);

    const hash = paragraph => paragraph.id;

    // Populate vocabulary with the unique identifier of the chosen paragraph
    const vocabulary = new Set();
    vocabulary.add(hash(chosenParagraph));

    // Similarity check function
    const similar = page => {
        const paragraphs = filterParagraphs(page);
        for (const paragraph of paragraphs) {
            if (vocabulary.has(hash(paragraph))) {
                console.log('Similar paragraph found:', paragraph);
                return true;
            }
        }
        console.log('No similar paragraph found in vocabulary.');
        return false;
    };

    // Modify checkboxes based on similarity
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => {
        const color = !checkbox.checked && similar(checkbox.value) ? 'darkorange' : 'black';
        checkbox.nextElementSibling.style.color = color;
    });
}
