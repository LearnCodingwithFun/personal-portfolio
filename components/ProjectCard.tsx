import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

interface IProps {
    name: string,
    image: string,
    title: string
}
const ProjectCard = ({ name, image, title }: IProps) => {
    return (
        <Card className="bg-primary/25 border border-slate-700 rounded-lg w-[320px] overflow-hidden">
            <CardHeader>
                <CardTitle className="text-white">
                    <div>
                        {name}
                    </div>

                </CardTitle>
                <h2 className="gradient-text text-2xl pt-2">
                    {title}
                </h2>
                <Separator />
                <Image  width={400} height={400} className="rounded-md mt-2" src={image} alt={title} />

            </CardHeader>

        </Card>
    )
}

export default ProjectCard
