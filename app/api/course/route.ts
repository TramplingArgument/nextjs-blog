import { NextResponse } from "next/server";

const BASE = process.env.RISTEK_API_URL!;
const KEY = process.env.RISTEK_API_KEY!;

export async function GET() {
  const res = await fetch(`${BASE}/mata-kuliah`, {
    headers: { Authorization: KEY },
  });

  const text = await res.text();
  return new NextResponse(text, { status: res.status });
}

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(`${BASE}/mata-kuliah`, {
    method: "POST",
    headers: {
      Authorization: KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  return new NextResponse(text, { status: res.status });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const res = await fetch(`${BASE}/mata-kuliah/${id}`, {
    method: "DELETE",
    headers: { Authorization: KEY },
  });

  const text = await res.text();
  return new NextResponse(text, { status: res.status });
}
