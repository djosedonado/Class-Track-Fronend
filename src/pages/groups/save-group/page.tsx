import Swal from "sweetalert2";
import { InputForm, useForm } from "../../../components/index";
import { useRepositoryGroup } from "../../../storas/groups/group.stora";

export const SaveGroupPage = () => {
  const { form, handleChange, resetForm } = useForm({
    name: "",
    gradeId: 0,
  });
  const { saveGroup } = useRepositoryGroup();

  const grade = [
    { id: 1, name: "Grade 1" },
    { id: 2, name: "Grade 2" },
    { id: 3, name: "Grade 3" },
    { id: 4, name: "Grade 4" },
    { id: 5, name: "Grade 5" },
    { id: 6, name: "Grade 6" },
    { id: 7, name: "Grade 7" },
    { id: 8, name: "Grade 8" },
    { id: 9, name: "Grade 9" },
    { id: 10, name: "Grade 10" },
    { id: 11, name: "Grade 11" },
    { id: 12, name: "Grade 12" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(form.gradeId) !== 0 && form.name !== "") {
      console.log(form);
      await saveGroup(form).then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Grupo guardado exitosamente!",
            text: `${response.data}`,
            icon: "success",
            confirmButtonText: "Aceptar",
          }).then((res) => {
            if (res.isConfirmed) {
              resetForm();
            }
          });
        } else {
          console.log("Error al guardar el grupo");
        }
      });
    } else {
      console.log("campos vacios");
    }
  };
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="shadow-md px-20 py-20">
        <form onSubmit={handleSubmit}>
          <div className="font-bold text-3xl">
            <h2>SAVE GROUP</h2>
          </div>

          <div className="flex mt-5 justify-center flex-col gap-y-5">
            <InputForm
              label="Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Grade
              </label>
              <select
                onChange={handleChange}
                name="gradeId"
                className="w-full px-4 py-2 border rounded focus:outline-none text-center"
              >
                <option value={0} className="text-gray-900">
                  Select Grade
                </option>
                {grade.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex mt-5 justify-center">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
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
