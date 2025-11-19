import Matkul from "@/type/course";

export async function getCourses(): Promise<Matkul[]> {
  const res = await fetch("/api/course", { cache: "no-store" });
  return res.json();
}

export async function createCourse(data: {
  nama: string;
  deskripsi?: string;
  sks: number;
}): Promise<Matkul> {
  const res = await fetch("/api/course", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteCourse(id: string) {
  await fetch(`/api/course?id=${id}`, { method: "DELETE" });
}
