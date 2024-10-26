import type { confirmEmailTask } from "@/src/trigger/confirm-email";
import { tasks } from "@trigger.dev/sdk/v3";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return new Response(`Email not found`, {
      status: 400,
    });
  }

  const handle = await tasks.trigger<typeof confirmEmailTask>("confirm-email", {
    email,
  });
  return new Response(`Hello ${email}`);
}
