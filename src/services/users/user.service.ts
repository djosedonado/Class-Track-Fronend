import api from "../../api/axios";
import { CreateUser } from "../../interfaces/users/user.interface";

export const CreateUserService = async (data: CreateUser) => {
  return api.post("/users/save", data);
};

export const SearchAllUserService = () => {
  // servicio traer todo los usuario
  return api.get("ruta de la api");
};

export const SearchUserService = (id: number) => {
  // servicio de traer un usuario
  return api.get(`ruta de la api/${id}`);
};

export const UpdateUserService = (id: number, data: any) => {
  // Servicio de actualización
  return api.put(`ruta de la api/${id}`, data);
};

export const DeleteUserService = (id: number) => {
  // servicio de eliminacion de un usuario
  return api.delete(`ruta de la api/${id}`);
};
