import { create } from "zustand";
import {
  SaveGrade,
  GradeInterface,
} from "../../interfaces/grades/grade.interface";
import { SaveGradeService } from "../../services/grades/grade.service";

interface GradeState {
  grades: GradeInterface[];
  saveGrade: (grade: SaveGrade) => Promise<any>;
}

const useGradeStore = create<GradeState>(() => ({
  grades: [],
  saveGrade: async (grade: SaveGrade) => {
    try {
      const newGrade = await SaveGradeService(grade);
      return newGrade;
    } catch (error) {
      return error;
    }
  },
}));


export const useRepositoryGrade = useGradeStore;
