// proxy licence looup
// usage: http:localhost:7890/K9OX

import { serve } from "https://deno.land/std/http/server.ts";  
const server = serve({ hostname: "0.0.0.0", port: 7890 })
console.log(`serving http://localhost:7890/`)
const title = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())

let cache = {}
for await (const request of server) {
  let headers = new Headers
  headers.set('Access-Control-Allow-Origin','*')
  let want = request.url.match(/^\/(([AKNW][A-Z]?\d)[A-Z]+)$/)
  if(want) {
    let body = cache[want[1]]
    if(!body) {
      let json = await fetch(`https://rig.kk4wjs.com/out/${want[2]}/${want[1]}.json`).then(res=>res.json())
      json.op = title(json.op)
      json.qth = title(json.qth)
      cache[want[1]] = body = JSON.stringify(json, null, 2)
    }
    request.respond({ status: 200, body, headers })
  } else {
    request.respond({ status: 404, body: 'not found' })
  }
}