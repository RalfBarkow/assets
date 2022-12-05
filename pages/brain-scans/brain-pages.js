
const randomByte = function() {
  return (((1 + Math.random()) * 0x100) | 0).toString(16).substring(1);
};

const randomBytes = function(n) {
  return ((function() {
    var i, ref, results;
    results = [];
    for (i = 1, ref = n; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
      results.push(randomByte());
    }
    return results;
  })()).join('');
};

const itemId = function() {
  return randomBytes(8);
};

const asSlug = function(name) {
  return name.replace(/\s/g, '-').replace(/[^A-Za-z0-9-]/g, '').toLowerCase();
};


let linksRaw
try {
  linksRaw = await Deno.readTextFile('./Raw\ Data/links.json')
} catch (err) {
  console.error(err.message)
}

let nodesRaw
try {
  nodesRaw = await Deno.readTextFile('./Raw\ Data/thoughts.json')
} catch (err) {
  console.error(err.message)
}

const links = JSON.parse(linksRaw)
const nodesObj = JSON.parse(nodesRaw)

const nodes = {}
nodesObj.forEach(element => {
  const node = {}
  node.name = element.Name
  nodes[element.Id] = node
})

links.forEach(element => {

  switch (element.Relation) {
    case 1:
      const childNode = nodes[element.ThoughtIdA]
      let links = childNode.links || []
      links.push({name: nodes[element.ThoughtIdB].name, id: element.ThoughtIdB})
      childNode.links = links
      nodes[element.ThoughtIdA] = childNode
      break
    case 3:
      const jumpNode = nodes[element.ThoughtIdB]
      let jumps = jumpNode.jumps || []
      jumps.push({name: nodes[element.ThoughtIdA].name, id: element.ThoughtIdA})
      jumpNode.jumps = jumps
      nodes[element.ThoughtIdB] = jumpNode
      break
    default:
      console.error('not kind 1 or 3', element)
  }
})

//console.log(JSON.stringify(nodes, null, 2))
Object.keys(nodes).forEach(groupId => {
  const wikiPage = {story: []}
  wikiPage.title = nodes[groupId].name
  wikiPage.journal = [
    {
      "type": "create",
      "item": {
        "title": nodes[groupId].name,
        "story": []
      },
      "date": Date.now()
    }
  ]

  const links = []
  const jumps = []
  let after = null

  if (nodes[groupId].links) {
    nodes[groupId].links.forEach(link => {
      links.push(link.name)
    })
  }

  if (links.length) {

    let id = itemId()
    wikiPage.story.push({
      "type": "paragraph",
      "id": id,
      "text": `Links: ${links.map(el => `[[${el}]]`).join(', ')}`
    })

    wikiPage.journal.push({
      "type": "add",
      "id": id,
      "item": {
        "type": "paragraph",
        "id": id,
        "text": `Links: ${links.map(el => `[[${el}]]`).join(', ')}`
      },
      "date": Date.now()
    })

    after = id
  }

  if (nodes[groupId].jumps) {
    nodes[groupId].jumps.forEach(jump => {
      jumps.push(jump.name)
    })
  }

  if (jumps.length) {

    let id = itemId()

    wikiPage.story.push({
      "type": "paragraph",
      "id": id,
      "text": `Jumps: ${jumps.map(el => `[[${el}]]`).join(', ')}`
    })

    wikiPage.journal.push({
      "type": "add",
      "id": id,
      "item": {
        "type": "paragraph",
        "id": id,
        "text": `Jumps: ${jumps.map(el => `[[${el}]]`).join(', ')}`
      },
      ...(after) && {"after": after},
      "date": Date.now()
    })

    after = id
  }

  let id = itemId()

  wikiPage.story.push({
    "type": "graphviz",
    "id": id,
    "text": "DOT FROM preview-next-diagram"
  })

  wikiPage.journal.push({
    "type": "add",
    "id": id,
    "item": {
      "type": "graphviz",
      "id": id,
      "text": "DOT FROM preview-next-diagram"
    },
    ...(after) && {"after": after},
    "date": Date.now()
  })

  const slug = asSlug(nodes[groupId].name)
  const pageFile = './pages/' + slug
  Deno.writeTextFile(pageFile, JSON.stringify(wikiPage))

})