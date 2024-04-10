import { RiLinkM } from "react-icons/ri";

interface TimelineItemProps {
    date: string,
    title: string,
    role: string,
    details: string[],
    link: string,
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string,
    image5?: string,
}

const TimelineItem: React.FC<TimelineItemProps> = ({ image1, image2, image3, image4, image5, title, date, role, details, link }) => {
    return (
        <li className="mb-10 pl-10 flex flex-col relative">
            <div className="absolute w-[10px] h-[10px] rounded-full left-[-5px] border-2 border-primary border-solid bg-white"></div>

            <div className="flex">
                {/* 이미지 영역 - 이미지가 있을 경우에만 렌더링 */}
                {image1 && <img src={image1} width={385} height={220} />}
                {image2 && <img src={image2} width={385} height={220} />}
                {image3 && <img src={image3} width={385} height={220} />}
                {image4 && <img src={image4} width={385} height={220} />}
                {image5 && <img src={image5} width={385} height={220} />}

                {/* 제목과 날짜를 포함하는 영역 */}
                <div className="flex flex-col w-1/2">
                    <h3 className="text-[20px] font-semibold text-gray-900 mb-3">{title}</h3>
                    <time className="mb-1 text-middlegray text-[12px] font-normal leading-none">{date}</time>
                </div>

                {/* 설명과 상세 정보를 포함하는 영역 */}
                <div className="flex flex-col w-[480px] ml-10">
                    <p className="text-[14px] font-normal mb-2 text-neutral-600">{role}</p>
                    {details.map((detail, index) => (
                        <p key={index} className="font-normal text-neutral-500 leading-6 text-[12px]">
                            ㅤ• {detail}
                        </p>
                    ))}
                    <div className="flex items-center text-neutral-600 mt-2">
                        <RiLinkM className="mr-2" /><p className="text-[12px]">{link}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};


export default TimelineItem;
