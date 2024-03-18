import { features } from "@/constants";
import Image from "next/image";
import { BiSolidCheckCircle } from "react-icons/bi";

const Features = () => {
  return (
    <section role="banner" id="features" className="container py-20 md:py-56">
      <div className="mx-auto mb-14 flex w-full max-w-lg flex-col">
        <h2
          role="heading"
          aria-label="title"
          title="Our special features"
          className="title"
        >
          Our Special Features
        </h2>
        <p
          aria-label="section-text"
          className="txt"
          title="We are familiar with offline speed dating flow so we designed out
          online platform considering all the requirements"
        >
          We are familiar with offline speed dating flow so we designed out
          online platform considering all the requirements
        </p>
      </div>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:gap-7 lg:grid-cols-4 xl:gap-[60px]">
        {features.map(({ src, title, text }, i) => (
          <div className="flex flex-col items-center md:items-start" key={i}>
            <figure className="relative mb-7 flex h-[80px] w-[80px] items-center justify-center">
              <Image
                src={src}
                alt={text}
                fill
                className="object-contain"
                loading="lazy"
              />
            </figure>
            <h3
              aria-label={title}
              title={title}
              className="mb-3 text-xl font-semibold text-primary xl:text-2xl"
            >
              {title}
            </h3>
            <p
              aria-label={text}
              title={text}
              className="mb-3 text-center text-base font-normal text-primary md:mb-7 md:text-start"
            >
              {text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-3 md:gap-12 lg:grid-cols-3 xl:gap-6">
        <div className="rounded-lg border bg-slate-100 p-2 xl:p-5">
          <ul role="list" className="flex flex-col space-y-2">
            {[
              "In a day,set up your business",
              "Find and set up a new office as soon as possible",
              "Swiftly assemble and reinforce squads",
            ].map((item, i) => (
              <li
                role="listitem"
                className="flex items-start space-x-2"
                key={i}
              >
                <BiSolidCheckCircle className="block text-[20px] text-primary" />
                <span className="inline-block text-base text-primary">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border bg-slate-100 p-2 xl:p-5">
          <ul role="list" className="flex flex-col space-y-2">
            {[
              "Strong ties to governmental institutions",
              "Secure paperwork and documentation.",
              "We promise a quick hassle free process",
            ].map((item, i) => (
              <li
                role="listitem"
                className="flex items-start space-x-2"
                key={i}
              >
                <BiSolidCheckCircle className="block text-[20px] text-primary" />
                <span className="inline-block text-base text-primary">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border bg-slate-100 p-2 xl:p-5">
          <ul role="list" className="flex flex-col space-y-2">
            {[
              "Sustainability of the business and optimum ROI.",
              "Customised services that meet your precise needs.",
            ].map((item, i) => (
              <li
                role="listitem"
                className="flex items-start space-x-2"
                key={i}
              >
                <BiSolidCheckCircle className="block text-[20px] text-primary" />
                <span className="inline-block text-base text-primary">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
