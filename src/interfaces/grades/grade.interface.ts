export interface GradeInterface {
  id: number;
  name: string;
}

export type SaveGrade = Omit<GradeInterface, "id">;
