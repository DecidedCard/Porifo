import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CheckImage from "../../CheckImage";

interface TimelineItemProps {
    name: string;
    date: string;
    images: string[];
    introduce: string;
    deployLink: string | undefined;
    githubLink: string;
    index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    name,
    date,
    images,
    introduce,
    deployLink,
    githubLink,
    index: projectIndex,
}) => {
    const [checkImage, setCheckImage] = useState<number | null>(null);
    const [projectIdx, setProjectIndex] = useState<number | null>(null);

    const onClickImageCheckHandler = (project: number, image: number) => {
        setProjectIndex(project);
        setCheckImage(image);
    };
    return (
        <li className="mb-10 flex flex-col items-center justify-center sm:w-full">
            {/* {projectCount > 1 && (
                <div className="flex w-[10px] h-[10px] rounded-full left-[-5px] border-2 border-primary border-solid bg-white absolute"></div>
            )} */}
            <div className="flex flex-col w-[804px] sm:items-center sm:justify-center sm:w-full sm:pl-2 sm:gap-2">
                {/* 이미지 영역 - 이미지가 있을 경우에만 렌더링 */}
                <div className="flex flex-row sm:w-full sm:items-center sm:justify-center">
                    {images &&
                        images.map((image, index) => (
                            <div key={index}>
                                <Image
                                    src={image}
                                    alt="프로젝트"
                                    className="object-cover flex flex-row w-[263px] h-[198px] rounded-2xl mr-2 sm:w-[120px] sm:h-[100px]"
                                    width={800}
                                    height={800}
                                    onClick={() => onClickImageCheckHandler(projectIndex, index)}
                                />
                                {projectIndex === projectIdx && checkImage === index && (
                                    <CheckImage image={image} checkImage={checkImage} setCheckImage={setCheckImage} />
                                )}
                            </div>
                        ))}
                </div>

                {/* 제목과 날짜를 포함하는 영역 */}
                <div className="flex flex-col flex-wrap w-full justify-between sm:w-[360px] sm:items-center sm:justify-center">
                    <div className="flex flex-col mt-2 w-[804px] sm:w-full">
                        <h3 className="text-[20px] font-medium mb-3 sm:w-[360px] sm:text-[16px]">{name}</h3>
                        <time className="text-gray3 text-[12px] leading-none mb-2">{date}</time>
                    </div>

                    {/* 설명과 상세 정보를 포함하는 영역 */}
                    <div className="flex flex-col mt-2 w-[804px] sm:w-full sm:flex-wrap">
                        <p className="text-[14px] font-normal mb-2 text-gray4 whitespace-pre-wrap sm:font-medium sm:w-[360px] leading-normal">
                            {introduce}
                        </p>
                        {githubLink && (
                            <div className="flex items-center text-gray4 mt-2 sm:w-[370px]">
                                <Image
                                    src="/assets/image/link.svg"
                                    alt="link"
                                    width={24}
                                    height={24}
                                    className="mr-1"
                                />
                                <Link href={githubLink}>
                                    <p className="text-[12px]">{githubLink}</p>
                                </Link>
                            </div>
                        )}

                        {deployLink && (
                            <div className="flex items-center text-gray4 mt-2 sm:w-[370px]">
                                <Image
                                    src="/assets/image/link.svg"
                                    alt="link"
                                    width={24}
                                    height={24}
                                    className="mr-1"
                                />
                                <Link href={deployLink}>
                                    <p className="text-[12px]">{deployLink}</p>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TimelineItem;
