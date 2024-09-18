import { useEffect } from "react";
import { InputForm, useForm } from "../../../components/index";
import { CreateUser } from "../../../interfaces/users/user.interface";
import { useRoles } from "../../../storas";
import { useRepositoryUser } from "../../../storas/users/user.stora";
import Swal from "sweetalert2";
export const RegisterUserPage = () => {
  const { getRoles, roles } = useRoles();
  const { createUser } = useRepositoryUser();
  const { handleChange, form, resetForm } = useForm<CreateUser>({
    id: 1,
    name: "",
    email: "",
    password: "",
    roles: [],
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    await createUser(form).then((response) => {
      if (response.status === 201) {
        Swal.fire({
          title: "Usuario creado exitosamente!",
          text: "Se ha creado el usuario correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then((res) => {
          if (res.isConfirmed) {
            resetForm();
          }
        });
      } else {
        Swal.fire({
          title: "Error al crear el usuario",
          text: "Ha ocurrido un error al crear el usuario",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    });
  };

  useEffect(() => {
    if (roles.length === 0) {
      getRoles();
    }
  }, [getRoles, roles.length]);

  return (
    <div className="flex justify-center items-center pt-8">
      <div className="shadow-2xl p-8 max-sm:">
        <div className="my-5">
          <h1 className="text-center font-bold text-2xl">Register User</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-x-5 max-sm:flex-col">
            <InputForm
              label="Numero de Documento"
              name="id"
              type="text"
              error="error porfavor revise el campo"
              value={`${form.id}`}
              validationType="numeric"
              onChange={handleChange}
              minLength={1}
              maxLength={10}
            />
            <InputForm
              label="Nombres"
              name="name"
              type="text"
              error="error porfavor revise el campo"
              value={form.name}
              onChange={handleChange}
              minLength={1}
              maxLength={20}
            />
          </div>
          <div className="flex gap-x-5 max-sm:flex-col">
            <InputForm
              label="Email"
              name="email"
              type="text"
              error="error porfavor revise el campo"
              value={form.email}
              onChange={handleChange}
              minLength={1}
              maxLength={50}
            />
            <InputForm
              label="Contraseña"
              name="password"
              type="password"
              error="error porfavor revise el campo"
              value={form.password}
              onChange={handleChange}
              minLength={1}
              maxLength={30}
            />
          </div>
          <div className="p-5">
            <select
              name="roles"
              onChange={(e) => {
                const selectedRole = roles.find(
                  (role) => role.id === parseInt(e.target.value)
                );
                if (selectedRole) {
                  // Actualiza el campo de roles
                  handleChange({
                    target: {
                      name: "roles",
                      value: [{ id: selectedRole.id, name: selectedRole.name }],
                    },
                  } as unknown as React.ChangeEvent<HTMLSelectElement>);
                }
              }}
            >
              <option value="">Seleccione una Opcion</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
