interface WorkTimelineItemProps {
    date: string,
    title: string,
    description: string,
    details: string[],
}

const TimelineItem: React.FC<WorkTimelineItemProps> = ({ date, title, description, details }) => {
    return (

        <li className="mb-7 pl-7 flex flex-row">
            <div className="flex">
                <div>
                    <div className="absolute w-[10px] h-[10px] rounded-full -start-1.5 border-2 border-primary  border-solid bg-white"></div>
                    <h3 className="text-[20px] font-semibold text-gray-900 mb-3">{title}</h3>
                    <time className="mb-1 text-middlegray text-[12px] font-normal leading-none">{date}</time>
                </div>

                <div className="flex flex-col ml-40">
                    <p className="text-[14px] font-normal mb-2 text-neutral-600">{description}</p>
                    <div className="flex flex-col">
                        {details.map((detail, index) => (
                            <p key={index} className="font-normal text-neutral-500 leading-6 text-[12px]">
                                • {detail}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TimelineItem;
