import { InputForm, useForm } from "../../../components/index";
import { CreateUser } from "../../../interfaces/users/user.interface";

export const RegisterUserPage = () => {
  const { handleChange, form, resetForm } = useForm<CreateUser>({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form:", form);
    resetForm();
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="shadow-2xl p-8 max-sm:">
        <div className="my-5">
          <h1 className="text-center font-bold text-2xl">Register User</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-x-5 max-sm:flex-col">
            <InputForm
              label="Nombres"
              name="lastname"
              type="text"
              error="error porfavor revise el campo"
              value={form.lastname}
              onChange={handleChange}
              minLength={3}
              maxLength={20}
            />
            <InputForm
              label="Apellidos"
              name="firstname"
              type="text"
              error="error porfavor revise el campo"
              value={form.firstname}
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
              error="error porfavor revise el campo"
              value={form.email}
              onChange={handleChange}
              minLength={6}
              maxLength={50}
            />
            <InputForm
              label="Contraseña"
              name="password"
              type="password"
              error="error porfavor revise el campo"
              value={form.password}
              onChange={handleChange}
              minLength={6}
              maxLength={30}
            />
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
