"use client";

import { useState } from "react";
import { createTask } from "@/lib/api/task";

export default function TaskForm({
  courseId,
  onCreatedAction,
}: {
  courseId: string;
  onCreatedAction: () => void;
}) {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [deadline, setDeadline] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createTask({
      nama,
      deskripsi,
      deadline,
      mataKuliahId: courseId,
    });

    setNama("");
    setDeskripsi("");
    setDeadline("");
    onCreatedAction();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded bg-white">
      <input
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama tugas"
        className="w-full border p-2 rounded"
      />

      <input
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
        placeholder="Deskripsi"
        className="w-full border p-2 rounded"
      />

      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
        Tambah Tugas
      </button>
    </form>
  );
}
