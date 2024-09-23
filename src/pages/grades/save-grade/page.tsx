import { InputForm, useForm } from "../../../components/index";
import { useRepositoryGrade } from "../../../storas/grades/grade.stora";
import Swal from "sweetalert2";

export const SaveGradePage = () => {
  const { form, handleChange, resetForm } = useForm({
    name: "",
  });

  const { saveGrade } = useRepositoryGrade();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save grade logic here
    await saveGrade(form).then((response) => {
        console.log(response)
      if (response.status === 200) {
        Swal.fire({
          title: "Grade saved successfully!",
          text: `${response.data}`,
          icon: "success",
        }).then((res) => {
          if (res.isConfirmed) {
            resetForm();
          }
        });
      } else {
        Swal.fire({
          title: "Error saving grade",
          text: `${response.response.data.message}`,
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className=" shadow-xl px-28 py-28">
        <form onSubmit={handleSubmit}>
          <div className="font-bold text-xl">
            <h2>Create Grade</h2>
          </div>
          <div className="mt-5 w-full">
            <InputForm
              label="Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
