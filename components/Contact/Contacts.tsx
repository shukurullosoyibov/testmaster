"use client";
import { Banner } from "..";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <div className="flex flex-col">
      <Banner title="Contact" text="Welcome to our Contact page" />

      <ContactForm />
    </div>
  );
};

export default Contacts;
