"use client";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { FormData } from "@/types";
import { toast } from "react-hot-toast";
import { FC } from "react";
import emailjs from "@emailjs/browser";
import {
  PhoneInputController,
  TextAreaController,
  TextFieldController,
} from "../inputs";
import { Button } from "../Button";

const ContactForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { isLoading },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      message: "Hi there, ",
    },
  });
  const { dirtyFields, isValid } = useFormState({
    control,
  });

  const isDirty = Object.keys(dirtyFields).length > 0;

  const onSubmit: SubmitHandler<FormData> = (data, event) => {
    event?.preventDefault();
    const { email, firstName, lastName, companyName, phoneNumber, message } =
      data;

    try {
      const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
      const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY!;

      const template = {
        from_name: email,
        message: `
          Hi my name is ${firstName} ${lastName}.
          My Company name is ${companyName}.
          My contacts: ${phoneNumber}.
          Message: ${message}.
        `,
      };

      const emailjsData = emailjs
        .send(serviceID, templateID, template, serviceKey)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );

      toast.promise(emailjsData, {
        loading: "Sending...",
        success: "Your message sent",
        error: "Faield to sent",
      });

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      role="form"
      onSubmit={handleSubmit(onSubmit)}
      className="mt-16 max-w-xl sm:mx-auto sm:mt-20"
    >
      <div
        role="grid"
        className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
      >
        <TextFieldController
          label="First Name"
          control={control}
          name="firstName"
        />

        <TextFieldController
          label="Last Name"
          control={control}
          name="lastName"
        />
        <TextFieldController
          label="Subject"
          control={control}
          name="subject"
          className="sm:col-span-2"
        />
        <TextFieldController
          label="Email"
          control={control}
          name="email"
          className="sm:col-span-2"
        />

        <PhoneInputController
          label="Phone"
          control={control}
          name="phoneNumber"
        />
        <TextAreaController
          control={control}
          label="Message"
          name="message"
          className="sm:col-span-2"
        />
      </div>
      <div className="mt-6">
        <Button
          title="Let's Talk"
          type="submit"
          className="btn-primary w-full"
          text="Let's Talk"
          isLoading={isLoading}
          aria-label="Submit Contact Form"
          disabled={!isDirty || !isValid}
        />
      </div>
    </form>
  );
};

export default ContactForm;
