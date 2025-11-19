import Tugas from "@/type/task";

export async function getTasks(courseId: string): Promise<Tugas[]> {
  const res = await fetch(`/api/task?courseId=${courseId}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function createTask(data: {
  nama: string;
  deskripsi?: string;
  deadline: string;
  mataKuliahId: string;
}): Promise<Tugas> {
  const res = await fetch("/api/task", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteTask(id: string) {
  await fetch(`/api/task?id=${id}`, { method: "DELETE" });
}
