import { useState } from "react";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  validationType?: "numeric" | "alpha" | "alphanumeric" | "all";
}

export const InputForm: React.FC<InputProps> = ({
  label,
  name,
  value = "",
  onChange,
  type,
  disabled = false,
  maxLength = Infinity,
  validationType = "all",
  minLength = 0,
  required = false,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  // Función para validar caracteres permitidos
  const isValidCharacter = (char: string) => {
    let regex;
    switch (validationType) {
      case "numeric":
        regex = /^[0-9]$/;
        break;
      case "alpha":
        regex = /^[A-Za-z\s]$/;
        break;
      case "alphanumeric":
        regex = /^[A-Za-z0-9]$/;
        break;
      case "all":
      default:
        regex = /[\s\S]/; // Permite todos los caracteres
    }
    return regex.test(char);
  };

  // Función para manejar el cambio y validar el input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Solo permitimos la actualización si cumple con el patrón de validación
    if (inputValue === "" || isValidCharacter(inputValue.slice(-1))) {
      if (inputValue.length <= maxLength) {
        if (onChange) {
          onChange(e);
        }
      }
    }

    if (inputValue.length < minLength) {
      setErrorMessage(`Digitos permitidos ${minLength}`);
      setIsValid(false);
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };

  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
        required={required}
        disabled={disabled}
        placeholder={label}
        className={`w-full px-4 py-2 border rounded focus:outline-none text-center ${
          isValid ? "focus:border-blue-500" : "border-red-500"
        }`}
      />
      {!isValid && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
    </div>
  );
};
