import { InputForm, useForm } from "../../../components/index";
import { CreateRole } from "../../../interfaces/permissions/role";
import Swal from "sweetalert2";
import { useRoles } from "../../../storas";

export const CreateRolesPage = () => {
  const { form, handleChange, resetForm } = useForm<CreateRole>({
    name: "",
  });
  const { createRole } = useRoles();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    await createRole(form).then((response) => {
      if (response.status === 201) {
        Swal.fire({
          title: "Rol creado exitosamente!",
          text: ` ${response.data}`,
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then((res) => {
          if (res.isConfirmed) {
            resetForm();
          }
        });
      } else {
        Swal.fire({
          title: "Error al crear el rol",
          text: "Hubo un error al crear el rol",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center pt-16 rounded-sm">
      <div className="shadow-2xl px-20 py-20 rounded-xl">
        <div className="text-center">
          <h1 className="font-bold text-3xl">Crear Roles</h1>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <InputForm
              label="Nombre"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              validationType="alpha"
              required={true}
              minLength={3}
              maxLength={20}
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
