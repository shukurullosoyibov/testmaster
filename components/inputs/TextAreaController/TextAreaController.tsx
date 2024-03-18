import { FC } from "react";
import { Control, Controller } from "react-hook-form";

interface ITextAreaController {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

export const TextAreaController: FC<ITextAreaController> = ({
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
      rules={{ required: true }}
      render={({ field }) => (
        <div className={`flex flex-col ${className}`}>
          <label htmlFor={name} className="label">
            {label}
          </label>
          <textarea
            {...field}
            role="textbox"
            id={name}
            placeholder={placeholder}
            rows={4}
            className="input resize-y"
            autoComplete="true"
            aria-required={true}
          />
        </div>
      )}
    />
  );
};
