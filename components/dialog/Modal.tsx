"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { MdClose } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormDataTypes } from "@/types";
import { TabOne, TabTwo } from "../tabs";
import { Button } from "../Button";
import { sendEmail } from "@/utils";
import { useRouter } from "next/navigation";

interface IModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ setIsOpen }: IModalProps) => {
  const [tab, setTab] = useState(false);
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<FormDataTypes>({
    defaultValues: {
      firstName: "",
      lastName: "",
      vizas: 0,
      owners: 0,
      phoneNumber: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FormDataTypes> = (data, event) => {
    event?.preventDefault();

    try {
      sendEmail(data);

      reset();
      setIsOpen((prev) => !prev);
      router.push("/about", { scroll: false });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeInOut",
          duration: 0.15,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.75,
        transition: {
          ease: "easeOut",
          duration: 0.15,
        },
      }}
    >
      <span className="inline-block h-screen align-middle" aria-hidden="true">
        &#8203;
      </span>

      <div
        className="inline-block transform overflow-y-visible rounded-lg bg-white text-left shadow-xl transition-all sm:align-middle"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-auto flex-col overflow-y-visible bg-white p-3 shadow-xl sm:w-[400px] sm:p-6 md:w-[500px]"
        >
          <div className="mb-3 flex items-center justify-end">
            <Button
              type="button"
              title="Close"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center justify-center"
              Icon={MdClose}
            />
          </div>
          <div className="mb-3 flex w-full items-center justify-between border-b-2 border-gray-200 pb-4">
            <h3
              title="Cost Calculator"
              className="text-base font-medium text-gray-800 sm:text-xl"
            >
              Cost Calculator
            </h3>
            <p
              title={`Step ${!tab ? "1 of 2" : "2 of 2"}`}
              className="text-sm font-normal text-slate-700 sm:text-lg"
            >
              Step {!tab ? "1 of 2" : "2 of 2"}
            </p>
          </div>
          {!tab ? (
            <TabOne control={control} setTab={setTab} />
          ) : (
            <TabTwo control={control} setTab={setTab} />
          )}
        </form>
      </div>
    </motion.div>
  );
};
