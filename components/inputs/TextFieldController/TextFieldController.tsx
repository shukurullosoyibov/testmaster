import { FC } from "react";
import { Control, Controller } from "react-hook-form";

interface ITextFieldController {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

export const TextFieldController: FC<ITextFieldController> = ({
  control,
  name,
  label,
  placeholder,
  className,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true, minLength: 3 }}
      render={({ field }) => (
        <div className={`flex flex-col ${className}`}>
          <label htmlFor={name} className="label">
            {label}
          </label>
          <input
            {...field}
            id={name}
            placeholder={placeholder}
            className="input"
            autoComplete="true"
            aria-label={`Input Label for: ${name}`}
            aria-required={true}
          />
        </div>
      )}
    />
  );
};
