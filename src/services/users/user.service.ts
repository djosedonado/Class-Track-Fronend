import api from "../../api/axios";
import axios from "axios";
import { CreateUser } from "../../interfaces/users/user.interface";

export const CreateUserService = async (data: CreateUser) => {
  try {
    const response = await api.post("/users/save", {
      id: 1,
      name: "a",
      email: "a@gmail.com",
      password: "123456",
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      console.error("Error details:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error; // Re-throw the error for further handling if needed
  }
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
