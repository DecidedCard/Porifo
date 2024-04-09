import { RiLinkM } from "react-icons/ri";

interface TimelineItemProps {
    date: string,
    title: string,
    role: string,
    details: string[],
    link: string,
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, role, details, link }) => {
    return (


        <li className="mb-7 flex relative pl-10">
            <div className="absolute  w-[10px] h-[10px] rounded-full left-[-5px] border-2 border-primary border-solid bg-white"></div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <h3 className="text-[20px] font-semibold text-gray-900 mb-3">{title}</h3>
                    <time className="mb-1 text-middlegray text-[12px] font-normal leading-none">{date}</time>
                </div>
                <div className="flex flex-col ml-4">
                    <p className="text-[14px] font-normal mb-2 text-neutral-600">{role}</p>
                    {details.map((detail, index) => (
                        <p key={index} className="font-normal text-neutral-500 leading-6 text-[12px]">
                            • {detail}
                        </p>
                    ))}
                    <div className="flex items-center text-neutral-600">
                        <RiLinkM className="mr-2"/><p className="text-[12px]">{link}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TimelineItem;
