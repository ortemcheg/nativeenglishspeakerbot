export function GET(request: Request, context) {
  console.log({ context });
  return new Response(JSON.stringify({ hello: "world" }), {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
}
