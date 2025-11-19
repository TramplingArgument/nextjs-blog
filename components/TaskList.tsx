"use client";

import { useEffect, useState } from "react";
import Tugas from "@/type/task";
import { getTasks, deleteTask } from "@/lib/api/task";

export default function TaskList({ courseId }: { courseId: string }) {
  const [tasks, setTasks] = useState<Tugas[]>([]);

  async function load() {
    setTasks(await getTasks(courseId));
  }

  async function handleDelete(id: string) {
    await deleteTask(id);
    load();
  }

  useEffect(() => {
    load();
  }, [courseId]);

  return (
    <ul className="space-y-3">
      {tasks.map((t) => (
        <li key={t.id} className="p-4 border rounded bg-white flex justify-between">
          <div>
            <div className="font-medium">{t.nama}</div>
            <div className="text-sm text-gray-600">{t.deskripsi}</div>
            <div className="text-xs text-gray-500">
              Deadline: {new Date(t.deadline).toLocaleString()}
            </div>
          </div>

          <button
            onClick={() => handleDelete(t.id)}
            className="text-red-600 hover:underline"
          >
            Hapus
          </button>
        </li>
      ))}
    </ul>
  );
}
