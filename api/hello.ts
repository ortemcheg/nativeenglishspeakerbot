export function GET(request: Request) {
  return new Response(JSON.stringify({ hello: "world" }), {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
}
