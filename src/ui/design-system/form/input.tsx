import clsx from "clsx";
import Typography from "../typography/Typography";

interface InputFormProps {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutoComplete?: "on" | "off";
}

const InputForm = ({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMsg = "Ce champ est requis !",
  id,
  required = true,
  isAutoComplete = "off",
}: InputFormProps) => {
  return (
    <>
      <input
        className={clsx(
          isLoading && "cursor-not-allowed",
          errors[id]
            ? "border-alert-danger focus:ring-alert-danger"
            : " border-gray-400 ",
          "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
        )}
        type={type}
        placeholder={placeholder}
        disabled={isLoading}
        autoComplete={isAutoComplete}
        {...register(id, {
          required: { value: required, message: errorMsg },
        })}
      />
      {errors[id] && (
        <Typography variant="caption4" component="p" theme="danger">
          {errors[id].message}
        </Typography>
      )}
    </>
  );
};

export default InputForm;
