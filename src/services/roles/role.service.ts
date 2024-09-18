import api from "../../api/axios";

export const SearchAllRoles = () => {
  return api.get("/roles/getAll");
};
