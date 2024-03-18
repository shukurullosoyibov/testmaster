"use client";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import { BlogData } from "@/types";
import Link from 'next/link'
import Image from "next/image";
import faqImg from "@/public/assets/img/faqImg.jpg";
import faqImg3 from "@/public/assets/img/faqImg3.jpg";
import tax from "@/public/assets/img/tax.jpg";
import taxaudit from "@/public/assets/img/taxaudit.jpg";
import Penalitos from "@/public/assets/img/Penalitos.jpg";
const variants = {
  accordion:
    "flex flex-col rounded-xl border p-3 transition-all duration-300 hover:cursor-pointer sm:p-4",
  btn: "flex items-center justify-center rounded-full bg-primary/20 p-2 md:p-3",
  accordionText:
    "pt-5 text-[15px] tracking-wide text-gray-800 transition-all duration-150 md:text-lg",
};

const BlogAccordion = ({ blogData }: { blogData: BlogData }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const photos = [
    faqImg,
    faqImg3 , 
    tax,
    taxaudit,
    Penalitos

  ]
  function KebabCase({ words }: { words: string }) {
    if (!words) return ''; // agar words undefined yoki null bo'lsa, bo'sh qator qaytariladi
    return words
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}
  return (
    <div className={`${variants.accordion} ${isExpanded ? "bg-slate-50 transition-all duration-400 hover:shadow-2xl hover:scale-105" : ""}  `}>
      <div tabIndex={0} className="flex items-center justify-between">
      <div className="relative h-[230px] w-full sm:h-[250px] lg:h-[270px] xl:h-[300px] ">
          <Image
            role="img"
            src={photos[Math.floor(Math.random() * 4)]}
            alt={blogData.question}
            className="rounded-xl"
            fill
            loading="lazy"
          />
        </div>
        
       
      </div>
      {isExpanded && (
        <div id="accordion-content">
          <h2
          title={blogData.question}
          className={`${
            !isExpanded ? "truncate" : ""
          } text-base pt-5 font-medium text-primary md:text-xl`}
        >
          {blogData.question}
        </h2>
          <p
            role="accordion-text"
            aria-label="accordion-text"
            title={blogData.answer}
            className={variants.accordionText}
          >
            {blogData.answer.slice(0,100)} [...]
            <span className="text-primary pl-5 text-lg font-semibold">
              {blogData?.date} : Date
            </span>
            <br />
            
            <Link href={`/blog/${KebabCase({ words: blogData.question })}`} className="hover:text-primary  text-blue">More information</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogAccordion;
