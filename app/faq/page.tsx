import type { Metadata } from "next";
import Faq from "@/components/FAQmain/Faq";
import NextBreadcrumb from "@/components/NextBreadcrumb";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "FAQ - Almuda company | almudacompany.com",
  description:
    "FAQ Almuda company will answer all your questions. 🪪 Accounting, auditing, account opening, visa application, company registration, financial planning, online business registration and business license.",
  abstract:
    "FAQ Almuda company will answer all your questions. 🪪 Accounting, auditing, account opening, visa application, company registration, financial planning, online business registration and business license.",
  keywords: ["Almuda information", "about almuda", "about almuda company", 'business in Uzbekistan', 'your business', 'companies have in Uzbekistan','Types of companies', 'open a company in Uzbekistan', 'open company', 'Freedom to employ expats', 'How to buy business in Uzbekistan', 'buy business', 'liquidation in Uzbekistan', 'How to do company', 'Company liquidation', 'Non-corporate forms', 'How is non-corporate forms', 'cost to set up a company', 'Fees and timelines', 'Uzbekistan company incorporation costs', 'How to tax clearance in Uzbekistan', 'How to tax clearance', 'Special Economic Zones', 'after opening a company', 'Valid work permits', 'postal address important'],
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
  openGraph: {
    title: "FAQ - Almuda company | almudacompany.com",
    description:
      "FAQ Almuda company will answer all your questions. 🪪 Accounting, auditing, account opening, visa application, company registration, financial planning, online business registration and business license.",
    siteName: "almudacompany.com",
    url: `${baseUrl}/faq`,
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
      <Faq />
    </section>
  );
}
