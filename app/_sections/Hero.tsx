"use client"
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
const Hero = () => {
  return (

    <div className="relative">

      <Navbar />
      <div className="flex items-center w-full  flex-col custom:flex-row  gap-y-8  justify-between  pt-[100px]">
        <div className="flex flex-col
          items-center gap-4"  >
          <div className="flex  items-center justify-center gap-4">
            <Image src="/images/happy-bearded-young-man.jpg"
              alt="hero_image" width={100} height={100} className=" rounded-full !w-[100px] !h-[100px]"  />



            <h2 className="text-base text-center sm:text-2xl  text-white bg-gray-900 py-4 rounded-md w-full px-5 border border-slate-700  ">
              Hello friend!
            </h2>
          </div>
          <div className="text-2xl text-white bg-gray-900 py-4 rounded-md px-5 border border-slate-700 ">
            <h2 className="gradient-text text-center">
              I’m available for freelance work.
            </h2>
          </div>
          <Button text="Let's  begin" />
        </div>
        <Image
          src="/images/portrait-happy-excited-man-holding-laptop-computer.png"
          alt="hero_image"
          className="w-[550px]"
          width={700}
          height={700}
          priority
        />

      </div>
    </div>
  );
};

export default Hero;
