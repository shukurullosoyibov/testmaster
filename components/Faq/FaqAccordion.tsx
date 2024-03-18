"use client";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import { FaqData } from "@/types";
import Link from 'next/link'

const variants = {
  accordion:
    "flex flex-col rounded-xl border p-3 transition-all duration-300 hover:cursor-pointer sm:p-4",
  btn: "flex items-center justify-center rounded-full bg-primary/20 p-2 md:p-3",
  accordionText:
    "pt-5 text-[15px] tracking-wide text-gray-800 transition-all duration-150 md:text-lg",
};

const FaqAccordion = ({ faqData }: { faqData: FaqData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  function KebabCase({ words }: { words: string }) {
    if (!words) return ''; // agar words undefined yoki null bo'lsa, bo'sh qator qaytariladi
    return words
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}
  return (
    <div className={`${variants.accordion} ${isExpanded ? "bg-slate-50" : ""}  `}>
      <div tabIndex={0} className="flex items-center justify-between">
        <h2
          title={faqData.question}
          className={`${
            !isExpanded ? "truncate" : ""
          } text-base font-medium text-primary md:text-xl`}
        >
          {faqData.question}
        </h2>
        <button
          type="button"
          title="toggle"
          className={variants.btn}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? (
            <BsChevronUp className="text-xl text-primary" />
          ) : (
            <BsChevronDown className="text-xl" />
          )}
        </button>
      </div>
      {isExpanded && (
        <div id="accordion-content">
          <p
            role="accordion-text"
            aria-label="accordion-text"
            title={faqData.answer}
            className={variants.accordionText}
          >
            {faqData.answer}
            <br />
            
            <Link href={`/faq/${KebabCase({ words: faqData.question })}`} className="hover:text-primary  text-blue">More information</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;
