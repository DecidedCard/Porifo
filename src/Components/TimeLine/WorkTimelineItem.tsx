interface WorkTimelineItemProps {
    date: string,
    company: string,
    description: string,
    position: string,
    comments: string,
}

const WorkTimelineItem: React.FC<WorkTimelineItemProps> = ({ date, company, description, position, comments }) => {
    return (
        <li className="mb-10 pl-10 flex relative">
            <div className="absolute w-[10px] h-[10px] rounded-full left-[-5px] border-2 border-primary border-solid bg-white"></div>

            <div className="flex w-full">
                {/* 제목과 날짜를 포함하는 영역 */}
                <div className="flex flex-col w-1/2">
                    <h3 className="text-[20px] font-semibold text-gray-900 mb-3">{company}</h3>
                    <time className="mb-1 text-middlegray text-[12px] font-normal leading-none">{date}</time>
                </div>

                {/* 설명과 상세 정보를 포함하는 영역 */}
                <div className="flex flex-col w-[480px] ml-10">
                    <p className="text-[14px] font-normal mb-2 text-neutral-600">{description} / {position}</p>
                        <div className="flex flex-col">
                            <p className="font-normal text-neutral-500 leading-6 text-[12px]">
                                {comments}
                            </p>

                        </div>
                </div>
            </div>
        </li>
    );
};

export default WorkTimelineItem;
