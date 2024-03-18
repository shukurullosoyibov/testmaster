import { BsStarFill } from "react-icons/bs";

const variants = {
  text: "text-base tracking-wide text-primary/90 lg:text-lg",
  title: "text-lg lg:text-xl my-3 font-medium",
};

const clients = [
  {
    text: `Almuda turned my visa approval woes into a success story! Their support and expert guidance were instrumental. Impressed by the positive experience, I continued with them for additional services, notably business setup and license renewal. The speed and competence they exhibited were truly outstanding`,
    username: "Dr.Ezzaldin Alyousef",
  },
  {
    text: `Securing my visa approval seemed like an uphill battle until I found Almuda. Their support not only resolved the issue but also enlightened me on how to fix it. This positive encounter led me to trust them with more services, including business setup and license renewal, all handled with remarkable speed and competence.`,
    username: "Ms.Rahima",
  },
  {
    text: `Grateful for Almuda's support in overcoming visa approval challenges. Their proactive assistance and problem-solving approach set them apart. Encouraged by this, I engaged them for business setup and license renewal—services executed with remarkable speed and competence. Highly recommended!`,
    username: "Mrs.Odil",
  },
];

const WhatOurClientsSay = () => {
  return (
    <section id="clients_say" className="py-20 lg:py-40">
      <div className="container">
        <h2 className="title mb-10 capitalize">What our clients say?</h2>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {clients.map(({ text, username }, i) => (
            <div
              key={i}
              className="flex flex-col rounded-md border bg-slate-100 px-5 py-7"
            >
              <p className={variants.text}>{text}</p>
              <h3 className={variants.title}>{username}</h3>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <BsStarFill key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;
