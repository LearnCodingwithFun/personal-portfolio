import { LucideIcon } from "lucide-react"

interface IPros {
    name: string,
    icon: LucideIcon
}
const ContactD = ({ name, icon: Icon }: IPros) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-primary/100 rounded-md text-muted-foreground hover:border-2 hover:border-slate-700 cursor-pointer  w-[100px] h-[100px]">
            <Icon />
            <p>{name}</p>
        </div>
    )
}

export default ContactD
