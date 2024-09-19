import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterUserPage, SignInPage } from "../pages/users/index";
import { CreateRolesPage } from "../pages/roles/index";
import { Header } from "../layouts/index";
import { NotFoundPage } from "../pages/404/page";

export const RoutesIndex = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/register-users" element={<RegisterUserPage />} />
        <Route path="/register-roles" element={<CreateRolesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
