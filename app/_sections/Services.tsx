import AllServices from "@/components/AllServices";
import BannerCard from "@/components/BannerCard";
import { ServicesContent } from "@/constant";

;

const Services = () => {
  return <div className="mt-[120px] relative  " >
    <div className="flex items-center justify-center w-full">
      <BannerCard title="Services" src="white-desk-work-study-aesthetics" />
    </div>

    <div className="flex items-center justify-center flex-wrap text-white gap-4">

      {
        ServicesContent.map((service) => (

          <AllServices key={service.name} name={service.name} price={service.price} icon={service.icon} desc={service.desc} />
        )
        )
      }
    </div>

  </div>;
};

export default Services;
