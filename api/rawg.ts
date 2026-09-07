const allowedPaths = new Set([
  "games",
  "platforms/lists/parents",
]);

export async function GET(request: Request) {
  const apiKey = process.env.RAWG_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "RAWG API is not configured" },
      { status: 500 }
    );
  }

  const incoming = new URL(request.url);
  const path = incoming.searchParams.get("path");

  if (!path || !allowedPaths.has(path)) {
    return Response.json(
      { error: "Unsupported RAWG endpoint" },
      { status: 400 }
    );
  }

  const target = new URL(`https://api.rawg.io/api/${path}`);

  for (const [key, value] of incoming.searchParams) {
    if (key !== "path" && key !== "key") {
      target.searchParams.append(key, value);
    }
  }

  target.searchParams.set("key", apiKey);

  const response = await fetch(target);

  return new Response(response.body, {
    status: response.status,
    headers: {
      "content-type":
        response.headers.get("content-type") ?? "application/json",
      "cache-control":
        "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
