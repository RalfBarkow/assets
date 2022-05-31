#!/usr/bin/env deno run --allow-read --allow-net
import { serve, ServerRequest } from "https://deno.land/std@0.76.0/http/server.ts";
const encoder = new TextEncoder();
const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

async function ls(dir:string) {
  let results = []
  for await (const item of Deno.readDir(dir)) {
    if (item.isDirectory) {
      results.push(item.name)
    }
  }
  return results
}

async function search(req: ServerRequest) {
  const references = (await ls('.')).map(buildReference)

  const page = {
    title: "Search",
    story: [
      {
        id: itemId(),
        type: "paragraph",
        text: "Local Wiki Sites. See [[Local Search Outpost]] to refresh."
      },
      ...references
    ]
  }

  function buildReference(site:string) {
    return {
      id: itemId(),
      type: "reference",
      site,
      title: "Welcome Visitors",
      slug: "welcome-visitors",
      text: site
    }
  }

  function itemId() {
    return Math.floor(Math.random()*1e18).toString(16)
  }

  return {
    ...page,
    journal: [
      {
        type: "create",
        date: new Date().valueOf(),
        item: {...page}
      }
    ]
  }
}

function CORS(res:{}) {
  let headers = new Headers();
  headers.append("access-control-allow-origin", "*");
  return {
    headers,
    ...res
  }
}

for await (const req of server) {
  let body
  if (req.url.match(/sites$/)) {
    let sites = await ls('.')
    body = {sites}
  } else if (req.url.match(/search.json$/)) {
    body = await search(req)
  } else {
    body = {error: "Not Found"}
  }
  let status = body.hasOwnProperty('error') ? 404 : 200
  console.log(`${new Date().toISOString()} ${req.method.toUpperCase()} ${req.url} ${status}`)
  req.respond(CORS({
    status,
    body: encoder.encode(JSON.stringify(body, null, 2))
  }))
}
