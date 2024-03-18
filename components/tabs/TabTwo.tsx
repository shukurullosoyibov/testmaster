"use client";
import { PhoneInputController, TextFieldController } from "@/components/inputs";
import { Dispatch, FC, SetStateAction } from "react";
import { Control, useFormState } from "react-hook-form";
import { Button } from "../Button";
import { FormDataTypes } from "@/types";

interface ITabTwo {
  control: Control<FormDataTypes>;
  setTab: Dispatch<SetStateAction<boolean>>;
}

export const TabTwo: FC<ITabTwo> = ({ control, setTab }) => {
  const { isValid, dirtyFields } = useFormState<FormDataTypes>({ control });

  const isDirty = Object.keys(dirtyFields).length > 0;

  return (
    <div className="flex flex-col space-y-5">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <TextFieldController
          control={control}
          name="firstName"
          label="First Name"
        />
        <TextFieldController
          control={control}
          name="lastName"
          label="Last Name"
        />
      </div>

      <PhoneInputController
        control={control}
        label="Phone"
        name="phoneNumber"
      />

      <div className="flex flex-col">
        <TextFieldController
          control={control}
          name="email"
          label="Email Address"
          placeholder="info@almudacompany.com"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <Button
          type="button"
          title="Previous"
          onClick={() => setTab((prev) => !prev)}
          className="bg-black py-2 text-base font-semibold uppercase text-white md:text-lg"
          text="Previous"
        />
        <Button
          type="submit"
          title="Submit"
          className="btn-primary rounded-none !py-2"
          text="Submit"
          disabled={!isDirty || !isValid}
        />
      </div>
    </div>
  );
};
