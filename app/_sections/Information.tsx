import { Separator } from "@/components/ui/separator";
import { Stats } from "@/constant";



const Information = () => {
  return <div className=" mt-[120px] relative">


    <div className="flex flex-col custom:flex-row  gap-y-10  justify-between">
      <div className="p-5 text-white bg-black/5 rounded-lg border border-blue-800 ">
        <h1 className="text-[30px] font-bold text-gray-200 py-2">Information</h1>
        <Separator className="bg-slate-700 w-52 h-[2px]" />
        <table className="flex gap-4 py-6 text-xl text-muted-foreground">
          <tbody className="flex  flex-col" >
            <tr>
              <td className="pr-[10px] sm:pr-[60px]">Name</td>
              <td className="gradient-text">Joshua Morgan</td>
            </tr>
            <tr>
              <td className="pr-[10px] sm:pr-[60px]">Birthday</td>
              <td className="gradient-text">Aug 12, 1986</td>
            </tr>
            <tr>
              <td className="pr-[10px] sm:pr-[60px]">Phone</td>
              <td className="gradient-text">120-240-9600</td>
            </tr>
            <tr>
              <td className="pr-[10px] sm:pr-[60px]">Email</td>
              <td className="gradient-text">
                <a href="mailto:hello@josh.design">hello@josh.design</a>
              </td>
            </tr>
          </tbody>
        </table>


      </div>
      <div className="grid grid-cols-2 gap-12 text-muted-foreground">
        {
          Stats.map((stat) => (
            <div key={stat.number} className="flex flex-col items-center justify-center">
              <h1 className="gradient-text  text-[40px]">{stat.number}</h1>
              <p className="text-xl">{stat.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  </div>;
};

export default Information;
