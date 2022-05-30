// Configure and run a federated wiki server
// usage: deno run --allow-net --allow-read start.js


import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
import * as host from "./host.js";

const server = serve({ port: +(Deno.args[0] || 4444) });
for await (const req of server) {
    const [domain, _port] = (req.headers.get('host')||'localhost').split(':');
    req.wiki = domain;
    console.log(new Date().toLocaleString(), domain, req.url);
    host.dispatch(req);
}
