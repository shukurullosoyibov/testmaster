"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { faqData } from "@/constants";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import faqImg3 from "@/public/assets/img/faqImg3.jpg";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
const Salom = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const href = pathNames.slice(1, 2)[0];
  function KebabCase({ words }: { words: string }) {
    if (!words) return ""; // agar words undefined yoki null bo'lsa, bo'sh qator qaytariladi
    return words
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  }

  const filteredData = faqData.find(
    (item) => KebabCase({ words: item.question.replace(/\?/g, "") }) === href,
  );
  console.log(filteredData);

  return (
    <div className="container py-10 md:py-16">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="relative h-[300px] w-full sm:h-[480px] lg:h-[400px] xl:h-[450px] ">
          <Image
            role="img"
            src={faqImg3}
            alt={filteredData?.question}
            className="rounded-xl"
            fill
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1
            title={filteredData?.question}
            className="text-3xl font-semibold text-primary"
          >
            {filteredData?.question}
          </h1>
        </div>
      </div>

      <div className="p-2 md:p-4 xl:p-6">
        <h2 className="my-5 text-justify  text-xl font-medium text-primary">
          {filteredData?.answer}
        </h2>
        <div className="text-shadow-2xl my-5 mb-5 inline-block text-justify text-xl  font-semibold text-[#00cc]">
          Share the answer to this question!
        </div>
        <div className="flex items-center justify-start gap-5">
          <Link
            rel="noopener"
            target="_blank"
            className=""
            href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/faq/${href}`}
          >
            <FaFacebook className="block text-[30px] text-blue hover:text-primary " />
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            className=""
            href={`https://twitter.com/intent/tweet?text=Hey%2C+check+out+this+cool+site+I+found%3A+the+best+Accounting+Services+${baseUrl}`}
          >
            <FaXTwitter className="block text-[30px] hover:text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Salom;
