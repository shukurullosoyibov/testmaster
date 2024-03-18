import { AlmudaProvidesImg } from "@/public/assets/img";
import Image from "next/image";

const variants = {
  text: "text-base text-primary/80 sm:text-[17px] lg:text-lg text-start tracking-wide",
};

const TypesCompanies = () => {
  return (
    <div id="types_companies" className="py-20 lg:py-40">
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-full sm:h-[480px] lg:h-[400px] xl:h-[450px]">
            <Image src={AlmudaProvidesImg} alt="banner of almuda" fill loading="lazy"/>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="title text-start">Types of companies</h2>
          <p className={variants.text}>
            If you would like to establish a subsidiary or a joint-venture
            company, there are a number of company-type choices. The most
            commonly used forms by foreign businesses are Joint Stock Companies
            (JSC - &quot;Aksiyadorlik Jamiyati&quot;) and Limited Liability
            Companies (LLC - &quot;Mas&apos;uliyati Cheklangan Jamiyat&quot;).
          </p>
          <p className={variants.text}>
            Either type of company can be wholly owned by a foreign investor
            (except for certain reserved business areas, such as media),
            irrespective of the country of origin. In the following table you
            can see the key differences between the types of companies.
          </p>
          <p className={variants.text}>
            A Limited Liability Company (LLC) is the most popular type of
            company due to the relative simplicity of its formation and flexible
            rules on corporate governance, raising capital and other matters. A
            joint-stock company (JSC) is generally recommended as a legal form
            only in cases where you are planning a public offering of the
            company&apos;s shares.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypesCompanies;
