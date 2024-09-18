interface User {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
}

export type CreateUser = Omit<User, "id">;
