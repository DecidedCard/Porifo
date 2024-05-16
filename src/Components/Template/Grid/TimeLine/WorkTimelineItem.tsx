interface WorkTimelineItemProps {
    date: string;
    company: string;
    description: string;
    position: string;
    comments: string;
    careerCount: number;
}

const WorkTimelineItem: React.FC<WorkTimelineItemProps> = ({
    date,
    company,
    description,
    position,
    comments,
    careerCount,
}) => {
    return (
        <li className="mb-10 flex relative sm:w-full">
            {/* {careerCount > 0 && (
            <div className="absolute w-[10px] h-[10px] rounded-full left-[-5px] border-2 border-primary border-solid bg-white"></div>
            )} */}
            <div className="flex w-full sm:w-[360px]">
                {/* 제목과 날짜를 포함하는 영역 */}
                <div className="flex flex-col w-1/2">
                    <h3 className="text-[20px] font-medium mb-3 sm:text-[16px]">{company}</h3>
                    {date && date.length > 10 && (
                        <time className="mb-1 text-gray3 text-[12px] font-normal leading-none sm:w-[150px]">
                            {date}
                        </time>
                    )}
                </div>

                {/* 설명과 상세 정보를 포함하는 영역 */}
                <div className="flex flex-col w-[480px] ml-10">
                    {description && position && (
                        <p className="text-[14px] font-normal mb-2 text-gray3">
                            {description} / {position}
                        </p>
                    )}
                    {comments && (
                        <div className="flex flex-col">
                            <p className="font-normal text-gray4 leading-6 text-[12px] whitespace-pre-wrap">
                                {comments}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};

export default WorkTimelineItem;
