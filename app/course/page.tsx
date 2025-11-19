import { getCourses } from "@/lib/api/course";
import CourseList from "@/components/CourseList";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Daftar Mata Kuliah</h1>
      <CourseList initialCourses={courses} />
    </div>
  );
}
