"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Course } from "@/type/course";
import { getCourses, deleteCourse } from "@/lib/api/course";

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);

  async function load() {
    setCourses(await getCourses());
  }

  async function handleDelete(id: string) {
    await deleteCourse(id);
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <ul className="space-y-3">
      {courses.map((c) => (
        <li key={c.id} className="flex justify-between p-4 border rounded bg-white">
          <div>
            <Link href={`/courses/${c.id}`} className="font-medium text-indigo-600">
              {c.nama}
            </Link>
            <div className="text-sm text-gray-500">{c.deskripsi}</div>
          </div>

          <button
            onClick={() => handleDelete(c.id)}
            className="text-red-600 hover:underline"
          >
            Hapus
          </button>
        </li>
      ))}
    </ul>
  );
}
