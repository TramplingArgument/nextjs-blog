// app/api/tasks/route.ts
import { NextResponse } from "next/server";

const BASE = process.env.RISTEK_API_URL!;
const KEY = process.env.RISTEK_API_KEY!;

// GET /api/tasks
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");

  const url = courseId
    ? `${BASE}/tugas?mataKuliahId=${courseId}`
    : `${BASE}/tugas`;

  const upstream = await fetch(url, {
    headers: { Authorization: KEY }
  });

  const text = await upstream.text();
  return new NextResponse(text, { status: upstream.status });
}

// POST /api/tasks
export async function POST(req: Request) {
  const body = await req.json();

  const upstream = await fetch(`${BASE}/tugas`, {
    method: "POST",
    headers: {
      Authorization: KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await upstream.text();
  return new NextResponse(text, { status: upstream.status });
}
