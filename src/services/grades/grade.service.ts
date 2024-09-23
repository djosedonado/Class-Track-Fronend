import api from "../../api/axios";
import { SaveGrade } from "../../interfaces/grades/grade.interface";

export const SaveGradeService = (data: SaveGrade) => {
  return api.post("/grade/save-grade", { saveGradeRequest: data });
};
