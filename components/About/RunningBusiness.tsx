import { AlmudaBanner } from "@/public/assets/img";
import Image from "next/image";

const RunningBusiness = () => {
  return (
    <div id="running_business" className="py-20 lg:py-40">
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="title text-start">Running a business</h2>
          <p className="text-base text-primary/80 sm:text-[17px] lg:text-lg">
            Depending on the nature of your business, you can establish your
            legal presence by setting up a local subsidiary, a branch-type
            presence, by entering into a joint venture, or by maintaining a
            representative office for marketing and client support purposes.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-full sm:h-[400px] xl:h-[450px]">
            <Image src={AlmudaBanner} alt="banner of almuda" fill loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningBusiness;
