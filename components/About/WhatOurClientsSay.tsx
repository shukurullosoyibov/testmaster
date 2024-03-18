import { BsStarFill } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
const variants = {
  text: "text-base tracking-wide text-primary/90 lg:text-lg",
  title: "text-lg lg:text-xl my-3 font-medium",
};

const clients = [
  {
    text: `Almuda turned my visa approval woes into a success story! Their support and expert guidance were instrumental. Accounting service Impressed by the positive experience, I continued with them for additional services, notably business setup and license renewal. The speed and competence they exhibited were truly outstanding`,
    username: "Dr.Ezzaldin Alyousef",
    date: "2023-08-11",
  },
  {
    text: `Securing my visa approval seemed like an uphill battle until I found Almuda. Their support not only resolved the issue but also enlightened me on how to fix it. This positive encounter led me to trust them with more services, including business setup and license renewal, all handled with remarkable speed and competence.`,
    username: "Ms.Rahima",
    date: "2024-10-27",
  },
  {
    text: `Grateful for Almuda's support in overcoming visa approval challenges  accounting service online.  Their proactive assistance and problem-solving approach set them apart. Encouraged by this, I engaged them for business setup and license renewal—services executed with remarkable speed and competence. Highly recommended!`,
    username: "Mrs.Odil",
    date: "2024-01-19",
  },
];

const WhatOurClientsSay = () => {
  return (
    <section id="clients_say" className="py-20 lg:py-40">
      <div className="container">
        <h2 className="title mb-10 capitalize">What our clients say?</h2>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {clients.map(({ text, username, date }, i) => (
            <div
              key={i}
              className="flex flex-col rounded-lg border bg-slate-100 px-5 py-7"
            >
              <span className="pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mb-8 inline-block h-8 w-8 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
              </span>

              <p className={variants.text}>{text}</p>
              <h3 className={variants.title}>{username}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center  space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <BsStarFill key={i} className="text-yellow-500" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <CiCalendarDate className="block text-[20px] hover:text-primary text-gray-600" />
                  <span className="text-gray-600 font-extralight text-sm">{date}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;
