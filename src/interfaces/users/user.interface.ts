import { Role } from "../permissions/role";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  roles: Role[];
}

export type CreateUser = User;

export type SingIn = Omit<User, "id" | "name" | "roles">;
