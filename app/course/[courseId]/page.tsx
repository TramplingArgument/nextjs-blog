import { getTasks } from "@/lib/api/task";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function CourseDetail({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Detail Mata Kuliah</h2>

      <TaskForm courseId={params.id} />

      <TaskList courseId={params.id} />
    </div>
  );
}
