interface Tugas {
  id: string;
  nama: string;
  deskripsi?: string;
  status: "BELUM_DIKERJAKAN" | "SEDANG_DIKERJAKAN" | "SELESAI";
  deadline: Date; // ISO date
  mataKuliahId: string;
  createdAt: Date;
  updatedAt: Date;

  mataKuliah?: {
    id: string;
    nama: string;
    sks: number;
  };
};

export default Tugas;
