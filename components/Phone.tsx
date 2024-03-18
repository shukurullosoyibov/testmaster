import Link from "next/link";
import { FaPhone } from "react-icons/fa";

const Phone = () => {
  return (
    <div className="fixed bottom-4 right-4 overflow-y-visible sm:bottom-5 md:bottom-7 md:right-5 z-10">
      <Link
        title="+998900186644"
        about="Phone number"
        href="tel:+998900186644"
        className="flex animate-bounce items-center justify-center rounded-full bg-blue p-3.5 sm:p-4"
      >
        <FaPhone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
      </Link>
    </div>
  );
};

export default Phone;
