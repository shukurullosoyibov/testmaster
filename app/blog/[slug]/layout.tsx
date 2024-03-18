
import React from 'react';
import NextBreadcrumb from "@/components/NextBreadcrumb";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const metadata: Metadata = {
    title: ` Blogs, news - Almuda company | almudacompany.com`,
    description:
      "Blog Almuda company will answer all your questions. 🪪 Accounting, auditing, account opening, visa application, company registration, financial planning, online business registration and business license.",
    abstract:
      "Blog Almuda company will answer all your questions. 🪪 Accounting, auditing, account opening, visa application, company registration, financial planning, online business registration and business license.",
    keywords: ["Almuda information", "about almuda", "about almuda company", "blog accounting", "financial planning", "online business registration", "business license"],
    alternates: {
      canonical: `${baseUrl}/blog`,
    },
    openGraph: {
      title: "Blogs, news - Almuda company | almudacompany.com",
      description:
        "Blog Almuda company will answer all your questions. 🪪 Accounting, auditing, account opening, visa application, company registration, financial planning, online business registration and business license.",
      siteName: "almudacompany.com",
      url: `${baseUrl}/blog`,
      images: [
        {
          url: `${baseUrl}/og.png`,
        },
      ],
    },
  };

  return (
    <>
      <div className="container">
        <NextBreadcrumb
          homeElement={"Home"}
          separator={<span> | </span>}
          activeClasses="text-primary font-bold pl-2"
          containerClasses="flex py-5 "
          listClasses="hover:underline mx-2 font-bold text-[#10A0E8]"
          capitalizeLinks
        />
      </div>
      {children}
    </>
  );
}
