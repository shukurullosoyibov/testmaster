"use client";
import { FormData, FormDataTypes } from "@/types";
import { FC, useEffect, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IPhoneInputController {
  control: Control<any>;
  name: string;
  label: string;
}

export const PhoneInputController: FC<IPhoneInputController> = ({
  control,
  name,
  label,
}) => {
  return (
    <div className="sm:col-span-2">
      <label className="label">{label}</label>
      <div className="relative mt-2.5">
        <Controller
          name={name}
          control={control}
          rules={{ required: true, minLength: 10 }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              autoFormat
              containerStyle={{
                display: "flex",
                alignItems: "center",
              }}
              inputStyle={{
                flex: 1,
                padding: "18px 60px",
                fontFamily: "var(--font-inter)",
                fontSize: 18,
                fontWeight: 500,
              }}
              buttonStyle={{
                fontSize: 16,
                fontWeight: 500,
                padding: "4px 6px",
              }}
              dropdownStyle={{
                padding: 10,
                border: "1px solid #bbb",
                fontFamily: "var(--font-inter)",
                fontSize: 18,
                fontWeight: 500,
                marginTop: 0,
                minWidth: "300px",
                width: "100%",
              }}
              countryCodeEditable
              country="uz"
            />
          )}
        />
      </div>
    </div>
  );
};
