import { RiLinkM } from "react-icons/ri";

interface TimelineItemProps {
    name: string,
    date: string,
    images: string[],
    introduce: string,
    deployLink: string | undefined,
    githubLink: string,
}

const TimelineItem: React.FC<TimelineItemProps> = ({ name, date, images, introduce, deployLink, githubLink }) => {
    return (
        <li className="mb-10 pl-10 flex flex-col items-center justify-center relative">
            <div className="flex w-[10px] h-[10px] rounded-full left-[-5px] border-2 border-primary border-solid bg-white absolute"></div>

            <div className="flex flex-col w-[804px]">
                {/* 이미지 영역 - 이미지가 있을 경우에만 렌더링 */}
                <div className="flex flex-row">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="프로젝트 이미지"
                            className="flex flex-row w-[385px] h-[220px] rounded-2xl mr-2"
                        />
                    ))}
                </div>

                {/* 제목과 날짜를 포함하는 영역 */}
                <div className="flex w-full justify-between">
                    <div className="flex flex-col mt-5">
                        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">{name}</h3>
                        <time className="text-middlegray text-[12px] font-normal leading-none">{date}</time>
                    </div>

                    {/* 설명과 상세 정보를 포함하는 영역 */}
                    <div className="flex flex-col mt-5">
                        <p className="text-[14px] font-normal mb-2 text-neutral-600">{introduce}</p>
                        <div className="flex items-center text-neutral-600 mt-2">
                            <RiLinkM className="mr-2" /><p className="text-[12px]">{githubLink}</p>
                        </div>
                        {deployLink && <div className="flex items-center text-neutral-600 mt-2">
                            <RiLinkM className="mr-2" /><p className="text-[12px]">{deployLink}</p>
                        </div>}
                    </div>
                </div>
            </div>
        </li>
    );
};


export default TimelineItem;
