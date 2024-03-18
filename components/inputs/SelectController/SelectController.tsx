import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

interface ISelectController {
  control: Control<any>;
  name: string;
  label: string;
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
}

export const SelectController: FC<ISelectController> = ({
  control,
  label,
  options,
  name,
}) => {
  return (
    <div className="flex w-full flex-col">
      <label className="label">{label}</label>
      <Controller
        name={name}
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            closeMenuOnSelect
            isSearchable
            aria-label={name}
            required={true}
          />
        )}
      />
    </div>
  );
};
