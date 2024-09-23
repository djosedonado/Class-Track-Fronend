import { Outlet } from "react-router-dom";
import { Roles } from "../../enums/index";

interface RuteProps {
  IsAuth: boolean;
  IsLoading: boolean;
  role: string;
}

export const RutePrivate: React.FC<RuteProps> = ({
  IsAuth,
  IsLoading,
  role,
}) => {
  if (IsLoading) {
    return <div>Loading...</div>;
  }
  if (!IsAuth || role !== Roles.STUDENT) {
    return <div>No tiene permisos para acceder a esta ruta.</div>;
  }
  return <Outlet />;
};
