import { create } from "zustand";
import { CreateUserService } from "../../services/users/user.service";
import { CreateUser, User } from "../../interfaces/users/user.interface";

interface UserState {
  users: User[];
  createUser: (user: CreateUser) => void;
}

const useUserStore = create<UserState>((set) => ({
  users: [],
  createUser: async (user: CreateUser) => {
    try {
      const newUser = await CreateUserService(user);
      console.log(newUser)
      //set((state) => ({ ...state, users: [...state.users, newUser] }));
    } catch (error) {
      return error;
    }
  },
}));

export const useRepositoryUser = useUserStore;
