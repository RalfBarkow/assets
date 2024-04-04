var graphData = {
  "nodes": [
    {
      "type": "Parse Page Paragraphs",
      "in": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        26
      ],
      "out": [
        25,
        27,
        29,
        46,
        62
      ],
      "props": 0
    },
    {
      "type": "702127fad3ec880f",
      "in": [],
      "out": [
        0
      ],
      "props": {
        "text": "We refactor the [[Speed Bot]] code. See [[Story Telling]]"
      }
    },
    {
      "type": "5aa9624700f4dd96",
      "in": [],
      "out": [
        1
      ],
      "props": {
        "text": "We intend to parse the natural language data of paragraphs."
      }
    },
    {
      "type": "d5c469074553cb08",
      "in": [],
      "out": [
        2
      ],
      "props": {
        "text": "We are only secondarily interested in links. First and foremost, we want to visualize an [[AST]] as a ghost page and see if the verbs it contains already exist as wiki pages. Our aim is to view the sentences of the paragraphs as graphs in order to be able to search for paragraphs with [[similar]] graphs/sentences. See [[recommend]]"
      }
    },
    {
      "type": "9c1389a55e77efd8",
      "in": [],
      "out": [
        3
      ],
      "props": {
        "text": "The following application frame declares itself as a SOURCE for graph and as a SOURCE for para data. It therefore sends out a graph and a paragraph data stream."
      }
    },
    {
      "type": "b2dd78abe2750e8f",
      "in": [],
      "out": [
        4
      ],
      "props": {
        "text": "The first modified version of dostart [https://github.com/RalfBarkow/assets/commit/bfcbc9f13860e87800e462d2b5601a15381b28bf commit] [https://github.com/RalfBarkow/assets/blob/bfcbc9f13860e87800e462d2b5601a15381b28bf/pages/parse-page-paragraphs/speed-bot.html#L114-L117 code] iterates over each paragraph in the pick.page.story array and extracts the links from each paragraph using the visit function. If links are found, it proceeds with the same logic as before to fetch and process the next page. This ensures that every paragraph of the page is parsed for links, allowing for a more comprehensive traversal of the site's content. (ChatGPT 3.5)"
      }
    },
    {
      "type": "0eca98fd9bd1c095",
      "in": [],
      "out": [
        5
      ],
      "props": {
        "text": "We add a console.log to see the Paragraphs."
      }
    },
    {
      "type": "3f277c45e7e59e59",
      "in": [],
      "out": [
        6
      ],
      "props": {
        "text": "Which [[Custom View]](s) are we missing?"
      }
    },
    {
      "type": "f26e000bb110aeb7",
      "in": [],
      "out": [
        7
      ],
      "props": {
        "text": "The custom view we want to see at the end of our implementation is one that visualizes the syntax tree or the parsed result of the paragraph text."
      }
    },
    {
      "type": "2e8e524a87ccdcc5",
      "in": [],
      "out": [
        8
      ],
      "props": {
        "text": "In a further intermediate step, we visualize the paragraphs that we filter out during our journey with the [[Speed Bot]]. [https://github.com/RalfBarkow/assets/commit/fda9744fe2bc95f67fe95f28c0743cc28a6e7154 commit]"
      }
    },
    {
      "type": "45dcd8993acef753",
      "in": [],
      "out": [
        9
      ],
      "props": {
        "text": "The paragraphs temporarily fill a drop-down list."
      }
    },
    {
      "type": "755a214cbc004042",
      "in": [],
      "out": [
        10
      ],
      "props": {
        "text": "We plan to extend the [https://github.com/RalfBarkow/assets/blob/fda9744fe2bc95f67fe95f28c0743cc28a6e7154/pages/parse-page-paragraphs/speed-bot.html#L47-L55 addTitleDot()] and [https://github.com/RalfBarkow/assets/blob/fda9744fe2bc95f67fe95f28c0743cc28a6e7154/pages/parse-page-paragraphs/speed-bot.html#L57-L66 joinTitlesDot()] functions to add nodes to a graph and add relationships to this graph. See [[Dump a Structure into Graphviz]]"
      }
    },
    {
      "type": "663074a702fb108b",
      "in": [],
      "out": [
        11
      ],
      "props": {
        "text": "We focus on the [https://github.com/RalfBarkow/assets/blob/fda9744fe2bc95f67fe95f28c0743cc28a6e7154/pages/parse-page-paragraphs/speed-bot.html#L84-L88 filterParagraphs(page)] function. Our starting point is the creation of a [[Graph]] in place of the [https://github.com/RalfBarkow/assets/blob/fda9744fe2bc95f67fe95f28c0743cc28a6e7154/pages/parse-page-paragraphs/speed-bot.html#L90-L110 populateParagraphEntries(paragraphs)] function."
      }
    },
    {
      "type": "15f0137adb7214a2",
      "in": [],
      "out": [
        12
      ],
      "props": {
        "text": "See \"[[Property Graphs]] as Javascript Module\" [https://wardcunningham.github.io/graph/ page]"
      }
    },
    {
      "type": "b8c37a0a904460b3",
      "in": [],
      "out": [
        13
      ],
      "props": {
        "text": "Add nodes to the graph. [https://github.com/RalfBarkow/assets/commit/c1ff2e051d632ee00bc211b9932201d3cdd70b3e commit]"
      }
    },
    {
      "type": "9ea06b7c8668f42a",
      "in": [],
      "out": [
        14
      ],
      "props": {
        "text": "feat(speed-bot): check if the node already exists in the graph [https://github.com/RalfBarkow/assets/commit/6e6315f163cab6edb4f9d563684ed688e57a571c commit]"
      }
    },
    {
      "type": "2dff10a4141ab6cf",
      "in": [],
      "out": [
        15
      ],
      "props": {
        "text": "Remember node ids. See [[Slug]]"
      }
    },
    {
      "type": "1fca1c88b1d55737",
      "in": [],
      "out": [
        16
      ],
      "props": {
        "text": "Add relation to the graph.\nConnect remembered nodes by id."
      }
    },
    {
      "type": "d4468a98d29802c7",
      "in": [],
      "out": [
        17
      ],
      "props": {
        "text": "This page now serves as the source for a graph broadcast that is received, for example, in a frame on the [[LINEUP graph]] page."
      }
    },
    {
      "type": "d4b9e39bfd2dedc7",
      "in": [],
      "out": [
        18
      ],
      "props": {
        "text": "Move the [[LINEUP graph]] page to the left-hand side before you start the [[Speed Bot Journey]]. The Speed Bot output then appears on the right-hand side (and overwrites the LINEUP graph page if it was still there). For the correct arrangement, see this [http://wiki.ralfbarkow.ch/view/lineup-graph/view/parse-page-paragraphs/view/speed-bot-journey lineup]."
      }
    },
    {
      "type": "31a8bf21e7e858b8",
      "in": [],
      "out": [
        19
      ],
      "props": {
        "text": "Ward via matrix DM: "
      }
    },
    {
      "type": "0600b5b04e66eecf",
      "in": [],
      "out": [
        20
      ],
      "props": {
        "text": "If you wanted to know the id of a node named foo in the Graph g then you could reach inside of the graph, get the nodes, and then search for name == 'foo'. In code it would look like this:\n"
      }
    },
    {
      "type": "9b565e3efa50f038",
      "in": [],
      "out": [
        21
      ],
      "props": {
        "text": "If you wanted the node itself, and knew some Cypher query language, you could use our not so well documented subset of Cypher:"
      }
    },
    {
      "type": "4bc4a7d1d6fd8b06",
      "in": [],
      "out": [
        22
      ],
      "props": {
        "text": "This would return an array of results, each an object with a property named \"n\", based on the names used in the query. If you wanted the first result you could write:"
      }
    },
    {
      "type": "dee3c178d7e82764",
      "in": [],
      "out": [
        23
      ],
      "props": {
        "text": "Graph DSL Parser Tests [https://wiki.ralfbarkow.ch/assets/pages/parse-page-paragraphs/tests/index.html expand] – [[Jasmine]] specs"
      }
    },
    {
      "type": "60d438b737c736c6",
      "in": [],
      "out": [
        24
      ],
      "props": {
        "text": "See [[Paragraph Recommendation Viewer]], searchGraph function"
      }
    },
    {
      "type": "LINEUP para",
      "in": [
        25
      ],
      "out": [
        26
      ],
      "props": 0
    },
    {
      "type": "Property Graphs",
      "in": [
        27
      ],
      "out": [
        28
      ],
      "props": 0
    },
    {
      "type": "Concept Maps",
      "in": [
        28
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Speed Bot",
      "in": [
        29
      ],
      "out": [
        30,
        38,
        72
      ],
      "props": 0
    },
    {
      "type": "List Indexcards",
      "in": [
        30
      ],
      "out": [
        31
      ],
      "props": 0
    },
    {
      "type": "P",
      "in": [
        31
      ],
      "out": [
        32,
        65
      ],
      "props": 0
    },
    {
      "type": "r.Culkin.McLuhan",
      "in": [
        32
      ],
      "out": [
        33
      ],
      "props": 0
    },
    {
      "type": "Fact",
      "in": [
        33
      ],
      "out": [
        34
      ],
      "props": 0
    },
    {
      "type": "empty",
      "in": [
        34
      ],
      "out": [
        35
      ],
      "props": 0
    },
    {
      "type": "Traversal",
      "in": [
        35
      ],
      "out": [
        36
      ],
      "props": 0
    },
    {
      "type": "One Hundred Steps",
      "in": [
        36
      ],
      "out": [
        37
      ],
      "props": 0
    },
    {
      "type": "To String",
      "in": [
        37
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "B",
      "in": [
        38
      ],
      "out": [
        39
      ],
      "props": 0
    },
    {
      "type": "Choosing Which Benefit Function to Maximize",
      "in": [
        39
      ],
      "out": [
        40
      ],
      "props": 0
    },
    {
      "type": "Recurring Problem",
      "in": [
        40
      ],
      "out": [
        41
      ],
      "props": 0
    },
    {
      "type": "Patlets",
      "in": [
        41
      ],
      "out": [
        42
      ],
      "props": 0
    },
    {
      "type": "Format/Comment To Understand",
      "in": [
        42
      ],
      "out": [
        43
      ],
      "props": 0
    },
    {
      "type": "Method Commenting",
      "in": [
        43
      ],
      "out": [
        44
      ],
      "props": 0
    },
    {
      "type": "Spike Solution",
      "in": [
        44
      ],
      "out": [
        45
      ],
      "props": 0
    },
    {
      "type": "Betsy Hanes Perry",
      "in": [
        45
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Graph",
      "in": [
        46
      ],
      "out": [
        47
      ],
      "props": 0
    },
    {
      "type": "Croquet",
      "in": [
        47
      ],
      "out": [
        48,
        64,
        70
      ],
      "props": 0
    },
    {
      "type": "Croquet Tutorial",
      "in": [
        48
      ],
      "out": [
        49
      ],
      "props": 0
    },
    {
      "type": "AR/VR",
      "in": [
        49
      ],
      "out": [
        50,
        61
      ],
      "props": 0
    },
    {
      "type": "The Browser OS",
      "in": [
        50
      ],
      "out": [
        51,
        78
      ],
      "props": 0
    },
    {
      "type": "Reflectors",
      "in": [
        51
      ],
      "out": [
        52,
        58
      ],
      "props": 0
    },
    {
      "type": "On-Premises Reflectors",
      "in": [
        52
      ],
      "out": [
        53
      ],
      "props": 0
    },
    {
      "type": "Alan Kay",
      "in": [
        53
      ],
      "out": [
        54
      ],
      "props": 0
    },
    {
      "type": "Seymour Papert",
      "in": [
        54
      ],
      "out": [
        55
      ],
      "props": 0
    },
    {
      "type": "Jean Piaget",
      "in": [
        55
      ],
      "out": [
        56
      ],
      "props": 0
    },
    {
      "type": "Deeper Learning",
      "in": [
        56
      ],
      "out": [
        57
      ],
      "props": 0
    },
    {
      "type": "Creative Thinkers",
      "in": [
        57
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Croquet OS",
      "in": [
        58
      ],
      "out": [
        59
      ],
      "props": 0
    },
    {
      "type": "Operating System",
      "in": [
        59
      ],
      "out": [
        60
      ],
      "props": 0
    },
    {
      "type": "Linux Os",
      "in": [
        60
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Voices of VR Podcast",
      "in": [
        61
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Paragraph Recommendation Viewer",
      "in": [
        62
      ],
      "out": [
        63
      ],
      "props": 0
    },
    {
      "type": "Jasmine",
      "in": [
        63
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Vanessa Freudenberg",
      "in": [
        64
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Similarity Query",
      "in": [
        65
      ],
      "out": [
        66
      ],
      "props": 0
    },
    {
      "type": "Process",
      "in": [
        66
      ],
      "out": [
        67
      ],
      "props": 0
    },
    {
      "type": "Perception",
      "in": [
        67
      ],
      "out": [
        68
      ],
      "props": 0
    },
    {
      "type": "Perceptions as Hypotheses",
      "in": [
        68
      ],
      "out": [
        69
      ],
      "props": 0
    },
    {
      "type": "What Are ‘Objects’?",
      "in": [
        69
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Reflector",
      "in": [
        70
      ],
      "out": [
        71
      ],
      "props": 0
    },
    {
      "type": "Run Your Local Reflector",
      "in": [
        71
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "S",
      "in": [
        72
      ],
      "out": [
        73
      ],
      "props": 0
    },
    {
      "type": "Similarity",
      "in": [
        73
      ],
      "out": [
        74
      ],
      "props": 0
    },
    {
      "type": "within",
      "in": [
        74
      ],
      "out": [
        75
      ],
      "props": 0
    },
    {
      "type": "Behaviors",
      "in": [
        75
      ],
      "out": [
        76
      ],
      "props": 0
    },
    {
      "type": "Matrix",
      "in": [
        76
      ],
      "out": [
        77
      ],
      "props": 0
    },
    {
      "type": "Matrix Authentication",
      "in": [
        77
      ],
      "out": [],
      "props": 0
    },
    {
      "type": "Second Life",
      "in": [
        78
      ],
      "out": [],
      "props": 0
    }
  ],
  "rels": [
    {
      "type": "fromParaToPage",
      "from": 1,
      "to": 0,
      "props": "702127fad3ec880f"
    },
    {
      "type": "fromParaToPage",
      "from": 2,
      "to": 0,
      "props": "5aa9624700f4dd96"
    },
    {
      "type": "fromParaToPage",
      "from": 3,
      "to": 0,
      "props": "d5c469074553cb08"
    },
    {
      "type": "fromParaToPage",
      "from": 4,
      "to": 0,
      "props": "9c1389a55e77efd8"
    },
    {
      "type": "fromParaToPage",
      "from": 5,
      "to": 0,
      "props": "b2dd78abe2750e8f"
    },
    {
      "type": "fromParaToPage",
      "from": 6,
      "to": 0,
      "props": "0eca98fd9bd1c095"
    },
    {
      "type": "fromParaToPage",
      "from": 7,
      "to": 0,
      "props": "3f277c45e7e59e59"
    },
    {
      "type": "fromParaToPage",
      "from": 8,
      "to": 0,
      "props": "f26e000bb110aeb7"
    },
    {
      "type": "fromParaToPage",
      "from": 9,
      "to": 0,
      "props": "2e8e524a87ccdcc5"
    },
    {
      "type": "fromParaToPage",
      "from": 10,
      "to": 0,
      "props": "45dcd8993acef753"
    },
    {
      "type": "fromParaToPage",
      "from": 11,
      "to": 0,
      "props": "755a214cbc004042"
    },
    {
      "type": "fromParaToPage",
      "from": 12,
      "to": 0,
      "props": "663074a702fb108b"
    },
    {
      "type": "fromParaToPage",
      "from": 13,
      "to": 0,
      "props": "15f0137adb7214a2"
    },
    {
      "type": "fromParaToPage",
      "from": 14,
      "to": 0,
      "props": "b8c37a0a904460b3"
    },
    {
      "type": "fromParaToPage",
      "from": 15,
      "to": 0,
      "props": "9ea06b7c8668f42a"
    },
    {
      "type": "fromParaToPage",
      "from": 16,
      "to": 0,
      "props": "2dff10a4141ab6cf"
    },
    {
      "type": "fromParaToPage",
      "from": 17,
      "to": 0,
      "props": "1fca1c88b1d55737"
    },
    {
      "type": "fromParaToPage",
      "from": 18,
      "to": 0,
      "props": "d4468a98d29802c7"
    },
    {
      "type": "fromParaToPage",
      "from": 19,
      "to": 0,
      "props": "d4b9e39bfd2dedc7"
    },
    {
      "type": "fromParaToPage",
      "from": 20,
      "to": 0,
      "props": "31a8bf21e7e858b8"
    },
    {
      "type": "fromParaToPage",
      "from": 21,
      "to": 0,
      "props": "0600b5b04e66eecf"
    },
    {
      "type": "fromParaToPage",
      "from": 22,
      "to": 0,
      "props": "9b565e3efa50f038"
    },
    {
      "type": "fromParaToPage",
      "from": 23,
      "to": 0,
      "props": "4bc4a7d1d6fd8b06"
    },
    {
      "type": "fromParaToPage",
      "from": 24,
      "to": 0,
      "props": "dee3c178d7e82764"
    },
    {
      "type": "fromParaToPage",
      "from": 25,
      "to": 0,
      "props": "60d438b737c736c6"
    },
    {
      "type": "fromPickToNext",
      "from": 0,
      "to": 26,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 26,
      "to": 0,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 0,
      "to": 27,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 27,
      "to": 28,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 0,
      "to": 29,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 29,
      "to": 30,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 30,
      "to": 31,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 31,
      "to": 32,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 32,
      "to": 33,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 33,
      "to": 34,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 34,
      "to": 35,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 35,
      "to": 36,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 36,
      "to": 37,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 29,
      "to": 38,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 38,
      "to": 39,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 39,
      "to": 40,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 40,
      "to": 41,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 41,
      "to": 42,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 42,
      "to": 43,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 43,
      "to": 44,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 44,
      "to": 45,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 0,
      "to": 46,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 46,
      "to": 47,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 47,
      "to": 48,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 48,
      "to": 49,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 49,
      "to": 50,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 50,
      "to": 51,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 51,
      "to": 52,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 52,
      "to": 53,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 53,
      "to": 54,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 54,
      "to": 55,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 55,
      "to": 56,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 56,
      "to": 57,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 51,
      "to": 58,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 58,
      "to": 59,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 59,
      "to": 60,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 49,
      "to": 61,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 0,
      "to": 62,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 62,
      "to": 63,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 47,
      "to": 64,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 31,
      "to": 65,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 65,
      "to": 66,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 66,
      "to": 67,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 67,
      "to": 68,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 68,
      "to": 69,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 47,
      "to": 70,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 70,
      "to": 71,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 29,
      "to": 72,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 72,
      "to": 73,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 73,
      "to": 74,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 74,
      "to": 75,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 75,
      "to": 76,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 76,
      "to": 77,
      "props": {}
    },
    {
      "type": "fromPickToNext",
      "from": 50,
      "to": 78,
      "props": {}
    }
  ]
}