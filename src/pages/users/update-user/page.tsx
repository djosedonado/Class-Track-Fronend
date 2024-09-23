import { InputForm, useForm } from "../../../components/index";

interface UpdateProps {
  user: { name: string; email: string; role: string };
}

export const UpdateUserPage: React.FC<UpdateProps> = ({ user }) => {
  const { form, handleChange, resetForm } = useForm({
    name: user.name,
    email: user.email,
    role: user.role,
  });

  const dataTest = [
    { id: 1, name: "admin" },
    { id: 2, name: "student" },
    { id: 3, name: "teacher" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Enviar los datos al backend para actualizar el usuario
    console.log(form);
  };

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="shadow-lg px-28 py-16 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="text-center font-bold text-3xl">
              Editar Usuario: <br /> {user.name}
            </h2>
          </div>
          {/* Formulario de edición de usuario */}
          <div className="mt-5">
            <InputForm
              label="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            <InputForm
              label="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <div>
              <select
                value={form.role}
                onChange={handleChange}
                name="role"
                className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Seleccione una opcion</option>
                {dataTest.map((items) => (
                  <option key={items.id} value={items.id}>
                    {items.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Actualizar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
