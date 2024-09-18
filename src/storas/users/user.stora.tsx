import { create } from "zustand";
import { CreateUserService } from "../../services/users/user.service";
import { CreateUser, User } from "../../interfaces/users/user.interface";

interface UserState {
  users: User[];
  createUser: (user: CreateUser) => Promise<any>;
}

const useUserStore = create<UserState>((set) => ({
  users: [],
  createUser: async (user: CreateUser) => {
    try {
      const newUser = await CreateUserService(user);
      return newUser;
    } catch (error) {
      return error;
    }
  },
}));

export const useRepositoryUser = useUserStore;
