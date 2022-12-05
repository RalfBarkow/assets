import {Graph} from 'https://wardcunningham.github.io/graph/graph.js'

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

const exportFile = './brain.jsonl'
let brainGraphs = ""

Object.keys(nodes).forEach(groupId => {
  const g = new Graph()
  const nids = {}

  nids[groupId] = g.addNode('PAGE', { name: nodes[groupId].name})

  if (nodes[groupId].links) {
    nodes[groupId].links.forEach(link => {
      nids[link.id] = g.addNode('PAGE', { name: link.name})
      g.addRel('child', nids[groupId], nids[link.id])
    })
  }

  if (nodes[groupId].jumps) {
    nodes[groupId].jumps.forEach(jump => {
      nids[jump.id] = g.addNode('PAGE', { name: jump.name})
      g.addRel('jump', nids[jump.id], nids[groupId])
    })
  }

  const graphName = nodes[groupId].name
  brainGraphs += `{"name":"${graphName}","graph":${g.stringify()}}\n`
})

Deno.writeTextFile(exportFile, brainGraphs)


