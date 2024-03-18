type Props = {
  text?: boolean;
  list?: boolean;
};

const data = [
  {
    title: "Freedom to rent commercial space in any area",
    text: "Freedom to rent commercial space in any area",
  },
  {
    title: "Ability to conduct a wide range of business activities",
    text: "Ability to conduct a wide range of business activities",
  },
  {
    title: "Option to trade anywhere in the UAE and internationally",
    text: "Option to trade anywhere in the UAE and internationally",
  },
  {
    title: "100% foreign ownership",
    text: "100% foreign ownership",
  },
  {
    title: "No currency restriction",
    text: "No currency restriction",
  },
  {
    title: "Easy employment visa processing",
    text: "Easy employment visa processing",
  },
  {
    title: "Advantage of bidding on government projects",
    text: "Advantage of bidding on government projects",
  },
  {
    title: "Ability to open a corporate bank account easily",
    text: "Ability to open a corporate bank account easily",
  },
];

const WhatCanWeDo = ({ text, list }: Props) => {
  return (
    <div className="rounded-xl border-l-8 border-blue bg-slate-100 px-5 py-7 md:px-10">
      <h2 className="mb-3 text-xl font-bold uppercase text-primary md:text-2xl">
        What can we do for you
      </h2>
      {text ? (
        <p className="text-primary/80 sm:text-[17px] xl:text-lg">
          Almuda is handling every practical aspect of setting up a business for
          you, from the company formation to visa processing and liaising with
          Uzbekistan Government agencies on your behalf. We give you the
          flexibility of owning your business without having to navigate through
          the complexities of the document and registration process.
        </p>
      ) : null}
      {list ? (
        <ul className="flex list-disc flex-col space-y-2 pl-5">
          {data.map((item, i) => (
            <li
              key={i}
              title={item.title}
              className="text-base font-normal text-primary/80 sm:text-[17px] xl:text-lg"
            >
              {item.text}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default WhatCanWeDo;
