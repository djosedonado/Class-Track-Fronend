import api from "../../api/axios";
import { CreateRole } from "../../interfaces/permissions/role";

export const SearchAllRoles = () => {
  return api.get("/roles/getAll");
};

export const CreateRoleService = (data: CreateRole) => {
  return api.post("/roles/save", data);
};
