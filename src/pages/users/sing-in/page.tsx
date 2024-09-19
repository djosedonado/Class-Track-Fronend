import { InputForm, useForm } from "../../../components/index";
import { SingIn } from "../../../interfaces/users/user.interface";

export const SignInPage = () => {
  const { form, resetForm, handleChange } = useForm<SingIn>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    resetForm();
  };

  return (
    <div className="w-full flex justify-center items-center mt-20">
      <div className="flex gap-x-24">
        <div className="flex items-center">
          <h2 className="font-bold text-center text-9xl text-blue-200 hover:text-blue-600">
            SING <br />
            IN
          </h2>
        </div>
        <div className="shadow-xl py-14 px-28">
          <div className="text-center py-8">
            <h2 className="text-4xl font-bold text-blue-400">WELCOME USER</h2>
          </div>
          <form onSubmit={handleSubmit}>
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
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              minLength={6}
              maxLength={30}
            />
            <button className="block w-full py-3 px-4 bg-blue-500 text-white rounded-sm hover:bg-blue-700">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
