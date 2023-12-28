
import { LucideIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
interface IProps {
    name: string,
    price: string,
    desc: string,
    icon: LucideIcon
}
const AllServices = ({ name, price, icon: Icon, desc }: IProps) => {
    return (

        <Card className=" p-5 bg-primary/25 border-0  rounded-lg w-[370px] overflow-hidden transition-all hover:border-2 hover:border-slate-800">
            <CardHeader>
                <CardTitle className="flex justify-between  items-center">
                    <p className="text-white text-lg sm:text-2xl">
                        {name}
                    </p>
                    <p className="gradient-text">
                        {price}
                    </p>
                </CardTitle>
                <Separator />
                <CardDescription className="py-4 font-sans text-[20px]  text-slate-600">{desc}</CardDescription>
            </CardHeader>
            <Button className="bg-slate-900 mt-6 border border-slate-700 gradient-text px-4 py-3 font-bold">Discover  Now</Button>
            <div className="w-[50px] h-[50px]  sm:w-[100px] sm:h-[100px]  bg-slate-950 border border-slate-800  flex items-center justify-center  ml-auto rounded-full mt-8 transition-all text-white ">

                <Icon />
            </div>
        </Card>


    )
}

export default AllServices
