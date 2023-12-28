import { LucideIcon } from "lucide-react"

interface IProps {
    item: LucideIcon,

}
const MediaIcon = ({ item: Icon }: IProps) => {
    return (
        <div>
            <Icon />
        </div>
    )
}

export default MediaIcon
