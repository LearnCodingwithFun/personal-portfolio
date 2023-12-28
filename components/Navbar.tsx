"use client"
import { VscCallIncoming } from "react-icons/vsc"
import { Links } from "@/constant";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import HamburgerMenu from "./MobileMenu";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed z-30 inset-0 px-10 py-5 w-full  container mx-auto h-[40px]  ">
      <div
        className={`${scrolling
          ? "bg-black/5 rounded-md border border-blue-950 transition-all backdrop-blur-3xl shadow-2xl shadow-slate-800"
          : ""
          } flex items-center justify-between p-4 h-[70px]`}
      >
        <h2 className=" text-2xl font-medium text-white">
          <Link href="/" className="gradient-text text-[35px] font-semibold">Portfolio</Link>
        </h2>
        <HamburgerMenu />
        <div className="hidden custom:flex sm:gap-x-3 md:gap-x-7 text-white  ">
          {Links.map((link) => (
            <Link
              key={link.name}
              href={`${link.link}`}
              className="hover:text-blue-300 transition font-medium  text-[10px]  sm:text-xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex items-center justify-center  gap-x-4 ">
          <VscCallIncoming className="text-white bg-slate-500 rounded-full  w-9 h-9 p-2" />
          <Button text="120-240-9600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
