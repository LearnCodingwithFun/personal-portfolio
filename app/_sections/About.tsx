import BannerCard from "@/components/BannerCard";
import Image from "next/image";
const About = () => {
  return (
    <div className="relative  flex  flex-col-reverse custom:flex-row  justify-between  gap-y-10 gap-x-8 mt-[140px]" >
      <div className="flex items-center justify-center w-full" >
        <Image
          src="/images/couple-working-from-home-together-sofa.jpg"
          alt="about-img"
          height={500}
          width={500}
          className="w-[550px] rounded-[20px] "
        />
      </div>
      <div className=" flex flex-col items-center justify-center  gap-3">
        <div className="w-full flex justify-center items-center">
          <BannerCard title="My Story" src="happy-bearded-young-man" />
        </div>

        <h2 className="text-2xl text-white">A little bit about Me</h2>
        <div className="text-xl text-slate-500 max-w-[550px]">
          <p className="mb-6">
            This one-page HTML portfolio is provided by TemplateMo. This layout
            is based on Bootstrap v5.1.3 CSS and JS libraries. Image credits go
            to Unsplash and FreePik for images used in this page.
          </p>
          <p>
            You are allowed to use this template for your websites. You are not
            allowed to redistribute the template ZIP file on any other website.
            Please contact us for more info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
