import { AlmudaProvidesImg } from "@/public/assets/img";
import Image from "next/image";

const variants = {
  text: "text-start text-base tracking-wide text-primary/80 sm:text-[17px] xl:text-lg",
};

const AboutProvides = () => {
  return (
    <div
      role="banner"
      className="my-10 flex grid-cols-2 flex-col-reverse gap-7 sm:my-20 lg:grid"
    >
      <div className="flex flex-col justify-center">
        <h2
          id="almudaprovides-title"
          title="Almuda Provides"
          className="mb-4 text-start text-2xl font-bold text-primary"
        >
          Almuda Provides
        </h2>
        <p aria-labelledby="almudaprovides-title" className={variants.text}>
          At Almuda Company, we are dedicated to delivering highly personalized
          business setup services to both corporate clients and individuals who
          are venturing into the realm of establishing their companies,
          branches, or subsidiaries in Uzbekistan. Our team, comprised of
          passionate professionals, is committed to assisting you in finding the
          best-suited solutions when navigating the complexities of company
          formation in Uzbekistan.
        </p>
        <p aria-labelledby="almudaprovides-title" className={variants.text}>
          We go beyond merely advising you on corporate structures and
          jurisdiction selection. We ensure comprehensive coverage of all
          technical, administrative, and financial aspects of your Uzbekistan
          business setup journey. But our commitment doesn&apos;t stop there. We
          offer a range of additional services to ensure your business thrives
          even after establishment.
        </p>
        <p aria-labelledby="almudaprovides-title" className={variants.text}>
          From expert accounting and strategic marketing to efficient HR
          solutions and more, we provide the support you need to drive your
          business to success. Partner with Almuda, and let us be your trusted
          companion on your path to business excellence. Your success is our
          success, and we&apos;re here to make it happen.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative h-[300px] w-full sm:h-[480px] lg:h-[400px] xl:h-[450px]">
          <Image role="img" src={AlmudaProvidesImg} alt="image" fill loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default AboutProvides;
