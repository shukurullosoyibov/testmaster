"use client";
import { HeroBg, Illustration } from "@/public/assets/img";
import { useState } from "react";
import { DialogComponent } from "./dialog";
import { Button } from "./Button";
import Image from "next/image";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="hero" className="container md:my-20">
      <div className="py-14 md:py-20 xl:relative">
        <div className="flex flex-col items-center md:items-start">
          <span
            aria-labelledby="hero"
            title="It's time to get decisive"
            className="mb-3 text-lg font-medium text-primary md:text-2xl md:font-semibold"
          >
            It&apos;s time to get decisive!
          </span>
          <h1
            role="heading"
            aria-label="Start your business in the Uzbekistan"
            title="Start your business in the Uzbekistan"
            className="w-full max-w-[700px] text-center text-3xl font-semibold text-primary md:text-start md:text-5xl lg:text-7xl 2xl:max-w-3xl"
          >
            Start Your Business in the Uzbekistan
          </h1>
          <p
            role="paragraph"
            aria-label="Company setup in Uzbekistan, residency, banking and much more..."
            title="Company setup in Uzbekistan, residency, banking and much more..."
            className="my-5 text-center text-base font-normal text-primary md:text-start md:text-xl"
          >
            Company setup in Uzbekistan, residency, banking and much more...
          </p>
          <Button
            title="Calculate Cost"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            text="Calculate cost"
            className="btn-primary uppercase"
          />
        </div>
        <div className="hidden md:inline">
          <Image
            role="img"
            src={HeroBg}
            alt="accounting service, accounting service organization, accounting website, accounting problems, accounting service help"
            className="xl:heroImg pointer-events-none mt-5"
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div className="relative block h-[400px] w-full sm:h-[600px] md:hidden">
          <Image
            role="img"
            src={Illustration}
            alt="accounting service contract,Register Business, Audit Services, Build Team in Business, accounting services online "
            className="object-contain"
            fill
            loading="lazy"
            sizes="100vw"
          />
        </div>
      </div>
      <DialogComponent isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default Hero;
