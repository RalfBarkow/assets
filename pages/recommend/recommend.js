function recommend(chosen) {
    const vocabulary = new Set()
    const hash = node => `${node.type}: ${node.props.name || ''}`
    for (const poem of chosen) {
      for (const node of poem.graph.nodes) {
        vocabulary.add(hash(node))
      }
    }
    const similar = graph => {
      for (const node of graph.nodes) {
        if (vocabulary.has(hash(node))) return true
      }
      return false
    }
    const beam = croquet.view.beam()
    window.beam.querySelectorAll('input[type=checkbox]').forEach(elem => {
      const color = !elem.checked && similar(beam[elem.value].graph) ? 'darkorange' : 'black'
      elem.nextElementSibling.style.color = color
    })
  }