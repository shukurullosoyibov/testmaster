import { AlmudaBanner } from "@/public/assets/img";
import Image from "next/image";

const variants = {
  text: "text-start text-base tracking-wide text-primary/80 sm:text-[17px] xl:text-lg",
};

const CompanyMission = () => {
  return (
    <div
      id="company_mission"
      role="banner"
      className="my-10 flex grid-cols-2 flex-col sm:my-20 lg:grid"
    >
      <div className="relative h-[340px] w-full sm:h-[400px] xl:h-[450px]">
        <Image
          role="img"
          src={AlmudaBanner}
          alt="image"
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <div className="mt-10 flex flex-col sm:mt-0 md:pl-10 md:pt-10">
        <h2
          role="heading"
          title="Company Mission"
          aria-labelledby="company_mission"
          className="mb-4 text-2xl font-bold text-primary"
        >
          Company Mission
        </h2>
        <p
          className={variants.text}
          title="Company Mission Text"
          aria-labelledby="company_mission"
        >
          Almuda is on a mission to empower individuals, startups, and small to
          medium-sized companies. Our commitment is to provide tailored business
          setup advice and deliver exceptional customer service. We aim to build
          lasting, trusted relationships with all our clients by not only
          guiding them through the entire company formation process but also
          fostering a supportive ecosystem for their sustainable growth.
        </p>
        <p className={variants.text}>
          With a focus on excellence, Almuda is your partner in achieving
          business success. We&apos;re here to simplify your journey, so you can
          thrive and prosper.
        </p>
      </div>
    </div>
  );
};

export default CompanyMission;
