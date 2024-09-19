import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="flex-col text-center">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-56 text-red-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="text-9xl font-bold text-red-600">404</h1>
          <p className="mt-5 text-xl font-bold">
            Lo sentimos, pero la página que buscas no existe.
          </p>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 transition duration-300 font-bold text-2xl"
          >
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};
