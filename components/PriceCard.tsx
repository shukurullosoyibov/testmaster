import { PriceList } from "@/types";
import { Button } from "./Button";

const PriceCard = ({ popular, title, price, list }: PriceList) => {
  return (
    <div
      className={`group flex w-full flex-col items-center rounded-xl border md:border-2 ${
        popular ? "border-blue" : "border-slate-200"
      } px-4 py-5 transition-all duration-200 ease-out md:px-5 md:py-7 ${
        popular
          ? "shadow-md hover:border-blue hover:bg-transparent"
          : "shadow hover:border-blue"
      }`}
    >
      {popular ? (
        <span className="text-normal mb-3 rounded-md bg-blue/90 px-2 py-1 text-sm text-white">
          Most Popular
        </span>
      ) : null}
      <h3
        title={title}
        className="mb-2 text-lg font-medium text-primary/70 sm:text-xl md:text-2xl"
      >
        {title}
      </h3>
      <span
        title={`$${price}`}
        className="text-4xl font-bold text-primary md:text-5xl"
        style={{
          fontVariantNumeric: "tabular-nums",
        }}
      >
        ${price}
      </span>

      <Button
        type="button"
        title="Get Started"
        className="group-hover:btn-primary my-6 w-full rounded-lg !border-2 border-transparent bg-slate-600 !py-2 text-center text-base font-medium !normal-case text-white md:!text-lg"
        text="Get Started"
      />

      <ul className="flex w-full flex-col space-y-3">
        {list.map(({ Icon, text, not }, i) => (
          <li title={text} key={i} className="flex items-center space-x-2">
            <Icon
              fontSize={20}
              className={`block ${not ? "muted" : "text-primary"}`}
            />
            <span
              className={`inline text-base font-normal ${
                not ? "muted line-through" : "text-primary"
              }`}
            >
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
