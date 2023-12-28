import { Companies } from "@/constant";
import Image from "next/image";

const Company = () => {
  return <div className="mt-[110px] relative">
    <h2 className="text-[45px] leading-normal text-center text-gray-200"> <span className="gradient-text">Companies</span> I&apos;ve  had worked</h2>
    <div className="flex  flex-row flex-wrap pt-12 justify-center gap-32   align-middle ">
      {Companies.map((company) => (
        <Image key={company.name} src={company.imageUrl} alt={company.name} className="w-[100px]" width={80} height={90}  />
      ))}
    </div>
  </div>;
};

export default Company;
