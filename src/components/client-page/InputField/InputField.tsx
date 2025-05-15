import { UseFormRegister, FieldErrors, FieldValues, Path } from "react-hook-form";
import "./InputField.scss";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  type: string;
  label: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export const InputField = <T extends FieldValues>({
  label,
  type,
  register,
  name,
  errors,
}: InputFieldProps<T>) => {
  return (
    <div className="field">
      <label htmlFor={name} className="field__label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="field__input"
        {...register(name)}
        aria-invalid={errors[name] ? "true" : "false"}
      />
      {errors[name] && (
        <span className="field__error" role="alert">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};
