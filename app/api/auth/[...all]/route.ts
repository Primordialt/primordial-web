import { toNextJsHandler } from "better-auth/next-js";

import { signInFailureMessage } from "@/lib/internet/access";
import { getAuth } from "@/lib/internet/auth";

export const runtime = "nodejs";

async function handle(request: Request) {
  const handlers = toNextJsHandler(getAuth());
  const response =
    request.method === "POST"
      ? await handlers.POST(request)
      : await handlers.GET(request);
  const pathname = new URL(request.url).pathname;
  const isSignIn = request.method === "POST" && pathname.endsWith("/sign-in/email");
  const failure = isSignIn ? signInFailureMessage(response.status) : null;

  if (!failure) return response;

  return Response.json(
    { message: failure.message },
    {
      status: failure.status,
      headers: { "Cache-Control": "no-store" },
    },
  );
}

export const GET = handle;
export const POST = handle;
