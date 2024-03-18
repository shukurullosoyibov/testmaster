"use client";
import {
  AdliyaLogo,
  AloqaBankLogo,
  AnorBankLogo,
  DavrBankLogo,
  HamkorBankLogo,
  IpakBankLogo,
  ItParkLogo,
  MinistryofForeign,
  MyGovLogo,
  SoliqLogo,
} from "@/public/assets/img";
import Image from "next/image";

const Partner = () => {
  const partners = [
    {
      src: AdliyaLogo, 
      link: 'https://adliya.uz/', 
      text: "Ministry of Justice of the Republic of Uzbekistan"
    },
    {
      src: AloqaBankLogo, 
      link: 'https://aloqabank.uz/uz/', 
      text: "Aloqa bank"
    },
    {
      src: MyGovLogo, 
      link: 'https://my.gov.uz/oz', 
      text: "Yagona interaktiv davlat xizmatlari portali"
    },
    {
      src: SoliqLogo, 
      link: 'https://my.soliq.uz/main/', 
      text: "Portal of electronic state services of tax authorities"
    },
    {
      src: MinistryofForeign, 
      link: 'https://mfa.uz/uz', 
      text: "Ministry of Foreign Affairs of the Republic of Uzbekistan"
    },
    {
      src: ItParkLogo, 
      link: 'https://it-park.uz/', 
      text: "IT Park "
    },
    {
      src: AnorBankLogo, 
      link: 'https://anorbank.uz/', 
      text: "Anor Bank"
    },
    {
      src: IpakBankLogo, 
      link: 'https://ipakyulibank.uz/physical', 
      text: "Ipak yuli Bank"
    },
    {
      src: HamkorBankLogo, 
      link: 'https://hamkorbank.uz/', 
      text: "Hamkor Bank"
    },
    {
      src: DavrBankLogo, 
      link: 'https://davrbank.uz/', 
      text: "Davr Bank"
    }
  ];
  return (
    <section id="partner" className="my-32 md:my-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 title="Our Partners" className="title">
            Our Partners
          </h2>
          <p
            title="You can believe us. We will improve your business skills."
            className="txt"
          >
            You can believe us. We will improve your business skills.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-2 xs:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {partners.map((item, i) => (
            <div
              className="flex items-center justify-center rounded-xl border border-slate-100 bg-white p-2 px-3 hover:border-transparent hover:shadow-lg sm:px-3 sm:py-4 md:px-2"
              key={i}
              
            >
              <a href={item.link} target="_blank" className="relative h-10 w-full xs:h-12 md:h-20 md:w-2/3">
                <Image
                  src={item.src}
                  alt={item.text}
                  fill
                  className="select-none object-contain grayscale transition-all duration-300 hover:cursor-pointer hover:grayscale-0"
                  priority
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
