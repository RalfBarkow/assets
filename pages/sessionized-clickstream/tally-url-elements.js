// tally elements of page_url in preparation for filtering
// usage: cat page_urls* | deno run --allow-write=. tally-url-elements.js

import { readLines } from "https://deno.land/std/io/bufio.ts";
const guid = /^[0-9a-f_-]{20,}$/

let tally = {}
let tree = {root:{count:0,children:{}}}
let limit = 1000000

for await (let line of readLines(Deno.stdin)) {
  if(line == 'PAGE_URL') continue
  line = line.replace(/"?https:\/\//,'').split(/\?/)[0]
  // console.log()
  // console.log(line)
  let branch = tree.root
  for (let part of line.split('/')) {
    if (want(part)) {
      if (!tally[part]) {
        tally[part] = 1
      } else {
        tally[part] = tally[part] + 1
      }
    }
  }
  if (limit-- < 1) break
}

function want (part) {
  if (!part.length) return false                    // ignore empty
  if (/^"?https:$/.test(part)) return false         // ignore https:
  if (/^\d+$/.test(part)) return false              // ignore numbers
  if (guid.test(part)) return false                 // ignore guids
  if (/^\d+_[hi]\d+$/.test(part)) return false      // ignore 000_h0000
  if (/^PAGE_URL$/.test(part)) return false         // ignore heading
  return true
}

let counts = Object.entries(tally)
  .filter(entry => entry[1] <= 100)
  .sort((a,b) => b[1] - a[1])
// for (let count of counts) console.log(count)
Deno.writeTextFile('stop.json',JSON.stringify(Object.fromEntries(counts),null,2))

// console.log(tree.root)
