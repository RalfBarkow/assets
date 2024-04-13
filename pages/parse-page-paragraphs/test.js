

1

import { Graph } from 'https://wardcunningham.github.io/graph/graph.js';

2

import { handleGraphStream } from 'https://wiki.ralfbarkow.ch/assets/pages/parse-page-paragraphs/handleGraphStream.js';

3

let graphPromise = {};

4

graphPromise.promise = new Promise((resolve, reject) => {

5

    graphPromise.resolve = resolve;

6

    graphPromise.reject = reject;

7

});

8

​

9

// Import the paragraphList object

10

import paragraphList from 'https://wiki.ralfbarkow.ch/assets/pages/parse-page-paragraphs/paragraphList.js';

11

​

12

// Function to handle paragraph stream messages

13

async function handleParaStream(message) {

14

    const paragraph = message.paragraph;

15

    

16

    // Render the paragraph

17

    renderPara(paragraph);

18

​

19

    // Add the paragraph ID to the paragraphList

20

    paragraphList.addIds([paragraph.id]);

21

​

22

    // Trigger a search in the graph based on the updated paragraphList

23

    searchGraph(paragraphList);

24

}

25

​

26

// Function to perform a search in the graph based on paragraph IDs

27

async function searchGraph(paragraphList) {

28

    const paragraphIds = paragraphList.getIds(); // Get the list of paragraph IDs

29

    console.log("(searchGraph) paragraphList: ", paragraphIds);

30

​

31

    if (paragraphIds.length === 0) {

32

        console.log("No paragraph IDs to search.");

33

        return; // Exit if there are no paragraph IDs

34

    }

35

​

36

    // Wait for the graph instance to become available

37

    graphPromise.promise.then((value) => {

38

        // Use the resolved value here

39

        console.log("(searchGraph) promise value: ", value);

40

        

41

        // Create the graph instance using the graph data

42

        const graphInstance = new Graph(value.nodes, value.rels);

43

        

44

        // Perform the graph search for each paragraph ID

45

        for (const paragraphId of paragraphIds) {

46

            const query = 'match (n:' + paragraphId + ')';

47

            console.log(`(searchGraph) query:`, query);

48

            try {

49

                const result = graphInstance.search(query);

50

​

51

                // Process the result

52

                console.log(`(searchGraph) result for paragraph ID ${paragraphId}:`, result);

53

            } catch (error) {

54

                console.error(`(searchGraph) Error occurred during graph search for paragraph ID ${paragraphId}:`, error);

55

            }

56

        }

57

    }).catch((error) => {

58

        // Handle errors if the promise is rejected

59

        console.error(error);

60

    });

61

}

62

​

63

// Function to emit HTML content for the para container

64

export async function emit(el) {

65

    el.innerHTML = `

66

    <div id="para-container"></div>

67

    <style>#para-container {border: 1px solid black;}</style>`;

68

}

69

// Function to render the paragraph in the paragraph container

70

async function renderPara(paragraph) {

71

    // Select the paragraph container element

72

    const paraContainer = document.getElementById('para-container');

73

    

74

    // Highlight the paragraph if recommended

75

    const color = paragraph.recommended ? 'darkorange' : 'black';

76

​

77

    // Render the paragraph in the paragraph container

