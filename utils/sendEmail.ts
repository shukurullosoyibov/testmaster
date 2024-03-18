import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { DialogData, FormData } from "@/types";
import { templateBuilder } from ".";

export const sendEmail = (data: DialogData | FormData) => {
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY!;

  const template = templateBuilder(data);

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
};
