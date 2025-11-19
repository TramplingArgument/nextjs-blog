export type TaskStatus = "BELUM_DIKERJAKAN" | "SEDANG_DIJALANKAN" | "SELESAI";

export interface Task {
  id: string;
  nama: string;
  deskripsi?: string;
  status: TaskStatus;
  deadline: string;
  mataKuliahId: string;
  createdAt: string;
  updatedAt: string;

  mataKuliah?: {
    id: string;
    nama: string;
    sks: number;
  };
}
