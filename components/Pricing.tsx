import { priceList } from "@/constants";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <section className="py-14 md:py-20" id="pricing">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 title="Flexible Pricing Plan" className="title">
            Flexible Pricing Plan
          </h2>
          <p
            title="We are familiar with offline speed dating flow so we designed out online platform considering all the requirements"
            className="txt"
          >
            We are familiar with offline speed dating flow so we designed out
            online platform considering all the requirements
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {priceList.map(({ popular, title, price, list }, i) => (
            <PriceCard
              popular={popular}
              title={title}
              price={price}
              list={list}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
