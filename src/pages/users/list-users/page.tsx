import { useEffect } from "react";
import { useRepositoryUser } from "../../../storas/users/user.stora";

export const ListUsersPage = () => {
  const { getUser, users } = useRepositoryUser();

  useEffect(() => {
    if (users.length === 0) {
      getUser();
    }
  }, [getUser, users.length]);

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="shadow-xl rounded-xl px-28 py-28">
        <h1>Listado de Usuarios</h1>
        
      </div>
    </div>
  );
};
