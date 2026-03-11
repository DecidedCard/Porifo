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
                    <h3 className="mb-3 text-P5_M sm:text-[16px]">{company}</h3>
                    {date && date.length > 10 && (
                        <time className="mb-1 text-gray_4 text-P8_R sm:w-[150px]">{date}</time>
                    )}
                </div>

                {/* 설명과 상세 정보를 포함하는 영역 */}
                <div className="flex flex-col w-[480px] ml-10">
                    {description && position && (
                        <p className="mb-2 text-gray_5 text-P7_M">
                            {description} / {position}
                        </p>
                    )}
                    {comments && (
                        <div className="flex flex-col">
                            <p className="text-gray_5 text-P8_R whitespace-pre-wrap">{comments}</p>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};

export default WorkTimelineItem;
