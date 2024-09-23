import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  RegisterUserPage,
  SignInPage,
  ListUsersPage,
  UpdateUserPage,
} from "../pages/users/index";
import { SaveGroupPage } from "../pages/groups/index";
import { SaveGradePage } from "../pages/grades/index";
import { CreateRolesPage } from "../pages/roles/index";
import { Header } from "../layouts/index";
import { NotFoundPage } from "../pages/404/page";
import { RutePrivate } from "./private/route";
import { Roles } from "../enums";

export const RoutesIndex = () => {
  const user = {
    name: "danilo donado",
    email: "danilo@gmail.com",
    role: "admin",
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SignInPage />} />

        <Route path="/update-users" element={<UpdateUserPage user={user} />} />
        <Route path="/list-all-users" element={<ListUsersPage />} />
        <Route path="/register-roles" element={<CreateRolesPage />} />
        <Route path="/save-grade" element={<SaveGradePage />} />
        <Route path="/save-group" element={<SaveGroupPage />} />
        <Route
          element={
            <RutePrivate IsAuth={true} IsLoading={false} role={Roles.STUDENT} />
          }
        >
          <Route path="/register-users" element={<RegisterUserPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
