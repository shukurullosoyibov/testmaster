import { Logo } from "@/public/assets/img";
import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

type Social = {
  Icon: IconType;
  name:
    | "Telegram"
    // | "Whatsapp"
    | "Instagram"
    | "Facebook"
    // | "Linkedin"
    // | "Github";
  href: string;
};

const socials: Social[] = [
  {
    Icon: FaFacebook,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100085719865259",
  },
  // {
  //   Icon: FaWhatsapp,
  //   name: "Whatsapp",
  //   href: "https://wa.me/998900186644",
  // },
  {
    Icon: FaInstagram,
    name: "Instagram",
    href: "https://www.instagram.com/buxgalteriya_xizmati_/",
  },
  // {
  //   Icon: FaLinkedinIn,
  //   name: "Linkedin",
  //   href: "https://www.linkedin.com/in/javohir-xasanov-40a186237",
  // },
  {
    Icon: FaTelegramPlane,
    name: "Telegram",
    href: "https://t.me/oisha_rakhimova",
  },
    // {
    //   Icon: FaGithub,
    //   name: "Github",
    //   href: "https://github.com/xasanof17",
    // },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="shadow">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9430512387935!2d69.26116897659249!3d41.33185169943735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8baf9219ea7d%3A0xe5521350ed061692!2sIMAN%20Invest!5e0!3m2!1sru!2s!4v1695394628698!5m2!1sru!2s"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[400px] w-full border-0 md:h-[500px]"
      />
      <div className="container grid grid-cols-1 gap-5 pt-6 md:grid-cols-3">
        <div className="flex flex-col items-start">
          <Link href="/" title="Al-Muda Logo">
            <div className="relative h-12 w-[150px]">
              <Image
                src={Logo}
                alt="Al-Muda logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <ul className="mt-4 flex items-center space-x-3">
            {socials.map(({ Icon, name, href }, i) => (
              <li key={i}>
                <Link
                  target="_blank"
                  title={name}
                  href={href}
                  className="flex items-center justify-center"
                >
                  <Icon className="muted h-7 w-7 transition-colors duration-300 hover:text-blue" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-3 text-xl font-semibold text-blue md:mb-6">
            Company
          </h3>
          <ul className="flex flex-col items-start space-y-2">
            {links.map(({ href, title }, i) => (
              <li key={i}>
                <Link href={href} className="link">
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/assets/files/certificate.pdf"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Certificates
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-3 text-xl font-semibold text-blue md:mb-6">
            Contact Us
          </h3>
          <ul className="flex flex-col items-start">
            <li className="flex items-center space-x-3">
              <FiMail className="h-6 w-6 text-primary" />
              <Link
                target="_blank"
                href="mailto:info@almudacompany.com"
                className="link"
              >
                info@almudacompany.com
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <FiPhone className="h-6 w-6 text-primary" />
              <Link href="tel:+998900186644" className="link">
                +998900186644
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <FiMapPin className="h-6 w-6 text-primary" />
              <Link
                href="https://maps.app.goo.gl/GEi6X99WJmtM97zEA"
                className="link"
                target="_blank"
              >
                View on Google Map
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col items-center justify-center space-x-1 border-t-2 py-4 sm:py-3 md:flex-row md:py-5">
        <p className="muted text-base font-medium md:text-lg">
          Copyright &copy; {currentYear} Almuda Inc. All rights reserved.
        </p>
        <Link
          href="https://milleniumcompany.tech"
          className="text-base font-medium md:text-lg"
          target="_blank"
        >
          Developed &{" "}
          <span className="font-bold tracking-wide text-blue underline underline-offset-4">
            Millenium Company
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
