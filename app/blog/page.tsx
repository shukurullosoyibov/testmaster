import type { Metadata } from "next";
import Blogs from "@/components/Blogs/Blogs";
import NextBreadcrumb from "@/components/NextBreadcrumb";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Blogs news,  - Almuda company | almudacompany.com",
  description:
    "Blog Almuda company will answer all your questions. 🪪 Accounting, auditing, account opening, visa application, company registration, financial planning, online business registration and business license.",
  abstract:
    "Blog Almuda company will answer all your questions. 🪪 Accounting, auditing, account opening, visa application, company registration, financial planning, online business registration and business license.",
  keywords: ["Almuda information",
   "about almuda", 
   "about almuda company, blog accounting, financial planning, online business registration, business license",
  " Audit,  financial information,  Accounting Services,  Different Types of Accounting Services,  accounting which include,  Public accounting,  Government accounting,  Management accounting,  Internal auditing,  Tax and accounting,  Penalties,  every businessman,  auditing financial,  economic activities,  issuing licenses,  new licenses,  Accounting Landscape,  Accounting Excellence,  Fundamentals of Accounting,  Taxation and Reporting,  Investments and Financial Analysis,  Accounting Software and Technologies,  Accounting Laws and Regulations,  Financial Strengthening,  accounting standards,  financial strengthening,  best practices of financial strengthening,  almuda,  almuda uz,  almuda com ",  ],
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

export default function AboutPage() {
  return (
    <section
      id="about"
      role="main"
      aria-label="FAQ"
      className="my-20 "
    >  
    <div className="container">
        <NextBreadcrumb
        homeElement={'Home'}
        separator={<span> | </span>}
        activeClasses='text-primary font-bold pl-2'
        containerClasses='flex py-5 ' 
        listClasses='hover:underline mx-2 font-bold text-[#10A0E8]'
        capitalizeLinks
        />
    </div>
    
      <Blogs />
    </section>
  );
}
