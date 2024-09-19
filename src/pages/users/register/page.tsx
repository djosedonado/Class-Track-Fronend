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
          text: `${response.data}`,
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
        <div className="my-8">
          <h1 className="text-center font-bold text-3xl">Register User</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-x-5 max-sm:flex-col">
            <InputForm
              label="Numero de Documento"
              name="id"
              type="text"
              value={form.id.toString()}
              validationType="numeric"
              onChange={handleChange}
              minLength={1}
              maxLength={10}
            />
            <InputForm
              label="Nombres"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              minLength={3}
              maxLength={20}
            />
          </div>
          <div className="flex gap-x-5 max-sm:flex-col">
            <InputForm
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              minLength={6}
              maxLength={50}
            />
            <InputForm
              label="Contraseña"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              minLength={6}
              maxLength={30}
            />
          </div>
          <div className="my-5">
            <select
              className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              <option value="" className="p-2">
                Seleccione una Opcion
              </option>
              {roles.map((role) => (
                <option key={role.id} value={role.id} className="p-2">
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          <div className="px-36">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
