import { CEO, CEOlg, Quote } from "@/public/assets/img";
import Image from "next/image";

export const AboutCEO = () => {
  return (
    <div role="banner" className="my-20 grid gap-10 lg:grid-cols-3">
      <div className="flex items-center justify-start lg:col-span-1">
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            role="img"
            src={CEOlg}
            alt="CEO of Almuda, adlmuda company, audit"
            fill
            loading="lazy"
            className="rounded-3xl bg-top object-contain sm:object-cover lg:object-contain"
          />
        </div>
        <div className="relative block h-[400px] w-full md:hidden md:w-[400px]">
          <Image
            role="img"
            src={CEO}
            alt="CEO of Almuda"
            fill
            className="rounded-3xl bg-top object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col justify-center lg:col-span-2">
        <Image
          role="img"
          src={Quote}
          alt="Quote Icon"
          width={24}
          height={24}
          loading="lazy"
        />
        <p
          aria-label="Quote of CEO"
          className="text-muted my-4 w-full text-left text-base xs:text-[17px] sm:text-lg sm:leading-6 sm:tracking-wide md:leading-8"
        >
          <span className="font-medium text-blue">Almuda</span> provides a wide
          range of business setup services in{" "}
          <span className="font-medium text-blue">Uzbekistan</span> for
          startups, medium-sized companies, and large corporations. Our
          extensive experience in company formation services sets us apart from
          the pack.
        </p>
        <h3
          aria-label="CEO of Almuda Company"
          title="Oisha Rakhimova"
          className="text-xl font-bold tracking-wide text-blue sm:text-2xl sm:leading-9 md:mx-0"
        >
          Oisha Rakhimova
        </h3>
        <p
          aria-label="Almuda CEO"
          title="Almuda CEO"
          className="text-muted text-left text-[17px] leading-6 tracking-wide sm:text-lg sm:leading-8 md:mx-0"
        >
          Almuda CEO
        </p>
      </div>
    </div>
  );
};
