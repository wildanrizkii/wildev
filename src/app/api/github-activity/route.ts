import { NextResponse } from "next/server";
import { getGitHubActivity } from "@/lib/github";

export async function GET() {
  try {
    const data = await getGitHubActivity();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error in github-activity route:", error);
    return NextResponse.json(
      { error: "Failed to load GitHub activity" },
      { status: 500 }
    );
  }
}
