"use client";
import { useState } from "react";
import { Logo } from "@/public/assets/img";
import { links } from "@/constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import classNames from 'classnames'

const Navbar = () => {
  const [toggleMenu, setMenu] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header
      role="banner"
      aria-label="Almuda Company Website Navigation"
      className="sticky left-0 top-0 z-10 w-full py-3 bg-white sm:py-5"
    >
      <nav role="navigation" className="container flex items-center">
        <Link
          aria-label="Logo of Almuda Company"
          title="Almuda"
          href="/"
          className={classNames(toggleMenu && "fixed left-4 top-3 z-20 md:top-5","flex items-center justify-center")}
        >
          <div className="relative h-12 w-[150px]">
            <Image
              src={Logo}
              alt="Al-Muda Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end lg:ml-[100px] lg:justify-between">
          <ul
            role="menu"
            aria-label="Main Navigation Menu"
            className="hidden items-center space-x-8 lg:flex"
          >
            {links.map(({ href, title }, i) => (
              <li key={i} role="menuitem">
                <Link
                  role="link"
                  title={title}
                  href={href}
                  aria-label={`${title}`}
                  className={`${
                    pathname == href ? "link text-blue" : "link text-gray-700"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            onClick={() => setMenu((prev) => !prev)}
            className={`${
              toggleMenu ? "fixed right-4 top-5 z-20 md:top-7" : ""
            } ml-4 flex items-center justify-center lg:hidden`}
            Icon={toggleMenu ? MdClose : FiMenu}
            aria-expanded={toggleMenu ? "true" : "false"}
            aria-controls="mobile-menu"
            aria-label={toggleMenu ? "Close" : "Open"}
          />
        </div>
        {toggleMenu && (
          <div
            role="dialog"
            aria-label="Mobile Navigation Menu"
            aria-modal="true"
            id="mobile-menu"
            className="min-w-screen fixed inset-0 z-10 flex min-h-screen flex-col items-center justify-center overflow-y-hidden bg-white transition-all duration-300"
          >
            <ul
              role="menu"
              className="flex flex-col items-center space-y-8 lg:hidden"
            >
              {links.map(({ href, title }, i) => (
                <li role="menuitem" key={i}>
                  <Link
                    role="link"
                    onClick={() => setMenu((prev) => !prev)}
                    title={title}
                    href={href}
                    className={`${
                      pathname == href ? "link text-blue" : "link"
                    } text-xl`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
