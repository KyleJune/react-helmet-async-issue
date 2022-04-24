import { serve } from "https://deno.land/std@0.135.0/http/server.ts";

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  if (pathname === "/") {
    const file = await Deno.readFile("./index.html");
    return new Response(file, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  if (pathname.startsWith("/client/")) {
    const file = await Deno.readFile(`.${pathname}`);
    return new Response(file, {
      headers: {
        "content-type": "application/javascript",
      },
    });
  }

  return new Response(null, { status: 404 });
}

console.log("Listening on http://localhost:8000");
serve(handleRequest);
