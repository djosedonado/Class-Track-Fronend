import api from "../../api/axios";
import { SaveGroupInterface } from "../../interfaces/groups/group.interface";

export const SaveGroupService = (data: SaveGroupInterface) => {
  return api.post("/group/save-group", { saveGroupRequest: data });
};
