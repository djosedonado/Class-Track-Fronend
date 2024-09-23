import { create } from "zustand";
import {
  CreateUserService,
  SearchAllUserService,
  AuthService,
} from "../../services/users/user.service";
import {
  CreateUser,
  User,
  SingIn,
} from "../../interfaces/users/user.interface";

interface UserState {
  users: User[];
  createUser: (user: CreateUser) => Promise<any>;
  getUser: () => Promise<any>;
  authenticateUser: (user: SingIn) => Promise<any>;
  IsAuthenticated: boolean;
  IsLoading: boolean;
}

const useUserStore = create<UserState>((set) => ({
  users: [],
  IsAuthenticated: false,
  IsLoading: false,
  createUser: async (user: CreateUser) => {
    try {
      const newUser = await CreateUserService(user);
      return newUser;
    } catch (error) {
      return error;
    }
  },
  getUser: async () => {
    try {
      const response = await SearchAllUserService();
      set((state) => ({ users: response.data }));
      return response;
    } catch (error) {
      return error;
    }
  },
  authenticateUser: async (user: SingIn) => {
    try {
      return await AuthService(user).then((response) => {
        
        console.log(response);
      });
    } catch (error) {
      return error;
    }
  },
}));

export const useRepositoryUser = useUserStore;
