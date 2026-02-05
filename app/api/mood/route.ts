import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Mood logged:", body);
  // In a real app, save to DB here
  return NextResponse.json({ success: true });
}
