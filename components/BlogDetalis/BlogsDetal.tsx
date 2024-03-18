"use client";
import React from "react";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { blogData } from "@/constants/blogData";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import faqImg3 from "@/public/assets/img/faqImg3.jpg";
import tax from "@/public/assets/img/tax.jpg";
import taxaudit from "@/public/assets/img/taxaudit.jpg";
import Penalitos from "@/public/assets/img/Penalitos.jpg";
import DetalMore from "./DetalMore";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
import { CiCalendarDate } from "react-icons/ci";

const BlogsDetal = () => {
  const photos = [
    faqImg3 , 
    tax,
    taxaudit,
    Penalitos

  ]
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

  const filteredData = blogData.find(
    (item) => KebabCase({ words: item.question.replace(/\?/g, "") }) === href,
  );


  return (
   <>
  
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        
        <div className="flex items-center justify-center flex-col gap-y-10">
          <h1
            title={filteredData?.question}
            className="text-3xl font-semibold text-primary"
          >
            {filteredData?.question}
          </h1>
          <div className="text-primary font-medium flex flex-row justify-start gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
            <CiCalendarDate className='block text-[30px] hover:text-primary'/>
            Date: {filteredData?.date} </div>
        </div>
        <div className="relative h-[300px] w-full sm:h-[480px] lg:h-[400px] xl:h-[450px] ">
          <Image
            role="img"
            src={photos[Math.floor(Math.random() * 3)]}
            alt="faq accounting services"
            className="rounded-xl"
            fill
            loading="lazy"
          />
        </div>
      </div>

      <div className="p-2 md:p-4 xl:p-6">
        <h2 className="my-5 text-justify  text-2xl font-semibold text-primary">
          {filteredData?.answer}
        </h2>
        <div>
            {
                filteredData?.more?.map((item, index) =>(
                    <DetalMore  item={item} key={index} />
                ))
            }
        </div>
        <br/>
        
        <div className="text-shadow-2xl my-5 mb-5 inline-block text-justify text-xl  font-semibold text-[#00cc]">
        Share this article!
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
      </>
  );
};

export default BlogsDetal;
