// app/api/courses/[id]/route.ts
import { NextResponse } from "next/server";

const BASE = process.env.RISTEK_API_URL!;
const KEY = process.env.RISTEK_API_KEY!;

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${BASE}/mata-kuliah/${params.id}`, {
    headers: { Authorization: KEY },
  });
  const text = await res.text();
  return new NextResponse(text, { status: res.status });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${BASE}/mata-kuliah/${params.id}`, {
    method: "DELETE",
    headers: { Authorization: KEY },
  });
  const text = await res.text();
  return new NextResponse(text, { status: res.status });
}
