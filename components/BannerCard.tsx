import Image from "next/image"

interface IProps {
    src: string,
    title: string,
    customClass?: string,
}
const BannerCard = ({ src, title, customClass }: IProps) => {
    return (
        <div className={`flex justify-center items-center gap-5    bg-black/5  rounded-2xl border border-blue-950 w-[600px] mb-9 p-3 max-w-2xl ${customClass}`}>
            <h3 className="text-[40px] font-bold  text-3xl text-white bg-gray-900 py-4 rounded-full px-5 border border-slate-700 gradient-text">{title}</h3>
            <div className="hidden sm:block">
                <Image
                    src={`/images/${src}.jpg`}
                    alt="bannerCard"
                    width={140}
                    height={140}
                    className="!rounded-full !w-[140px] !h-[140px] "
                />
            </div>

        </div >
    )
}

export default BannerCard
