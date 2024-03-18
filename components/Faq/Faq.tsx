import { faqData } from "@/constants";
import { Banner } from "..";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section
      id="faq"
      role="main"
      aria-label="Frequently Asked Questions at Almuda Company"
      className="my-20 w-full"
    >
      <div className="container">
        <Banner title="FAQ" text="Frequently Asked Questions" />

        <div
          role="main"
          aria-label="Frequently Asked Questions"
          className="flex flex-col space-y-4 py-10 md:py-20 "
        >
          {faqData.map((faq, index) => (
            <FaqAccordion key={index} faqData={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
