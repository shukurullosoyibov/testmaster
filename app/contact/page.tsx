import { Contacts } from "@/components";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Almuda Company for inquiries, support, or collaboration. We're here to assist you.",
  abstract:
    "Get in touch with Almuda Company for inquiries, support, or collaboration. We're here to assist you.",
  keywords: ["Almuda contact", "contact almuda", "contact", "almuda company contact"],
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact - Almuda Company",
    description:
      "Contact Almuda Company for inquiries, support, or collaboration. We're here to assist you.",
    siteName: "almudacompany.com",
    url: `${baseUrl}/contact`,
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      role="main"
      aria-label="Contact Almuda Company"
      className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <Contacts />
    </section>
  );
}
