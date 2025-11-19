"use client";

import { useState } from "react";
import { createCourse } from "@/lib/api/course";

export default function CourseForm({ onCreated }: { onCreated: () => void }) {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [sks, setSks] = useState(1);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createCourse({ nama, deskripsi, sks });
    setNama("");
    setDeskripsi("");
    setSks(1);
    onCreated();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded-lg bg-white">
      <input
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama mata kuliah"
        className="w-full border p-2 rounded"
        required
      />

      <input
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
        placeholder="Deskripsi"
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        min={1}
        value={sks}
        onChange={(e) => setSks(Number(e.target.value))}
        className="w-full border p-2 rounded"
        required
      />

      <button className="px-4 py-2 bg-indigo-600 text-white rounded">
        Tambah Mata Kuliah
      </button>
    </form>
  );
}
