import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import CheckImage from "../CheckImage";

import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";
import type { PortfolioInfo } from "@/types/PortfolioInfo";
import type { Education } from "@/types/Education";

const Bottom = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const [checkImage, setCheckImage] = useState<number | null>(null);
    const [projectIdx, setProjectIndex] = useState<number | null>(null);
    const education = portfolio.education as Education[];
    const career = portfolio.career as Career[];
    const project = portfolio.project as Project[];

    const onClickImageCheckHandler = (project: number, image: number) => {
        setProjectIndex(project);
        setCheckImage(image);
    };

    return (
        <div>
            <ol className="flex flex-col items-start justify-start w-[800px] sm:w-full sm:items-center sm:justify-center">
                <p className="mb-3 text-black text-SH4_M sm:w-[370px] sm:font-medium sm:text-[20px]">프로젝트</p>
                {project.map((project, projectIndex) => (
                    <li
                        key={projectIndex}
                        className="flex flex-col items-start justify-start w-[800px] mb-3 rounded-lg border border-solid border-disabled p-4 sm:p-6 sm:w-[370px] sm:h-fit sm:items-center sm:justify-center"
                    >
                        <div className="flex flex-col w-[730px] gap-3 sm:items-center sm:w-full sm:justify-center">
                            {/* 이미지 영역 - 이미지가 있을 경우에만 렌더링 */}
                            <div className="flex flex-row sm:flex-col sm:w-full sm:items-center sm:justify-center">
                                {project.images &&
                                    project.images.map((image, index) => (
                                        <div key={index}>
                                            <Image
                                                src={image}
                                                alt="프로젝트"
                                                className="object-cover flex flex-row w-[250.67px] h-[198px] rounded-2xl mr-2 cursor-pointer sm:w-[320px] sm:mr-0"
                                                width={800}
                                                height={800}
                                                onClick={() => onClickImageCheckHandler(projectIndex, index)}
                                            />
                                            {projectIndex === projectIdx && checkImage === index && (
                                                <CheckImage
                                                    image={image}
                                                    checkImage={checkImage}
                                                    setCheckImage={setCheckImage}
                                                />
                                            )}
                                        </div>
                                    ))}
                            </div>

                            <div className="flex w-[750px] flex-col sm:items-center sm:justify-center sm:w-[370px] sm:ml-3">
                                <div className="flex justify-between w-[804px] mt-2 sm:w-[350px]">
                                    <h3 className="mb-3 text-black text-SH5_M sm:text-[16px] sm:mt-3 sm:mb-0">
                                        {project.name}
                                    </h3>
                                </div>

                                <div className="flex flex-col mt-5 sm:w-[350px]">
                                    <p className="mb-2 whitespace-pre-wrap text-gray_5 text-P7_M sm:w-[345px]">
                                        {project.introduce}
                                    </p>
                                    <time className="my-3 text-gray_4 text-P8_R sm:text-[10px]">{project.date}</time>
                                    {project.githubLink && (
                                        <div className="flex items-center mt-2 text-gray_4 sm:w-[350px] sm:flex-wrap">
                                            <Image
                                                src="/assets/image/link.svg"
                                                alt="link"
                                                width={24}
                                                height={24}
                                                className="mr-1"
                                            />
                                            <Link href={project.githubLink}>
                                                <p className="text-P8_R">{project.githubLink}</p>
                                            </Link>
                                        </div>
                                    )}

                                    {project.deployLink && (
                                        <div className="flex items-center text-gray_4 mt-2 sm:w-[350px] sm:flex-wrap">
                                            <Image
                                                src="/assets/image/link.svg"
                                                alt="link"
                                                width={24}
                                                height={24}
                                                className="mr-1"
                                            />
                                            <Link href={project.deployLink}>
                                                <p className="text-P8_R">{project.deployLink}</p>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>

            {career.length > 0 && career[0].company && (
                <div className="flex flex-col items-start justify-start w-[800px] sm:w-full sm:items-center sm:justify-center">
                    <div className="sm:flex sm:justify-center sm:items-center">
                        <div className="bg-disabled w-[804px] h-[0.5px] mb-10 mt-10 sm:w-[370px]"></div>
                    </div>
                    <p className="mb-3 text-black text-SH4_M sm:w-[370px] sm:font-medium sm:text-[20px]">업무경력</p>
                    <ol>
                        {career.map((experience, index) => (
                            <>
                                <li
                                    key={index}
                                    className="flex mb-5 w-[800px] rounded-lg border border-solid border-disabled p-4 sm:p-6 sm:w-[370px] sm:h-fit sm:items-center sm:justify-center"
                                >
                                    <div className="flex w-full flex-col">
                                        {/* 제목과 날짜를 포함하는 영역 */}
                                        <div className="flex justify-between w-[804px] sm:w-full">
                                            <h3 className="mb-3 text-black text-SH5_M sm:text-[16px]">
                                                {experience.company}
                                            </h3>
                                            {experience.date && experience.date.length > 10 && (
                                                <time className="mr-10 text-gray_5 text-P7_M sm:mr-0 ">
                                                    {experience.date}
                                                </time>
                                            )}
                                        </div>

                                        {/* 설명과 상세 정보를 포함하는 영역 */}
                                        <div className="flex flex-col w-[480px] sm:w-full sm:flex-wrap">
                                            {experience.department && experience.position && (
                                                <p className="mb-2 text-gray_5 text-P7_R">
                                                    {experience.department} / {experience.position}
                                                </p>
                                            )}
                                            {experience.comment && (
                                                <div className="flex flex-col sm:w-full sm:flex-wrap">
                                                    <p className="text-gray_5 text-P7_R whitespace-pre-wrap">
                                                        • {experience.comment}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            </>
                        ))}
                    </ol>
                </div>
            )}
            {education && education.length > 0 && education[0].school && (
                <div className="flex flex-col items-start justify-start w-[800px] sm:w-full sm:items-center sm:justify-center">
                    <div className="sm:flex sm:justify-center sm:items-center">
                        <div className="bg-disabled w-[804px] h-[0.5px] mb-10 mt-10 sm:w-[370px]"></div>
                    </div>
                    <p className="mb-3 text-black text-SH4_M sm:w-[370px] sm:font-medium sm:text-[20px]">학력</p>
                    <ol>
                        {education.map((education, index) => (
                            <>
                                <li
                                    key={index}
                                    className="flex mb-5 w-[800px] rounded-lg border border-solid border-disabled p-4 sm:p-6 sm:w-[370px] sm:h-fit sm:items-center sm:justify-center"
                                >
                                    <div className="flex w-full flex-col">
                                        {/* 제목과 날짜를 포함하는 영역 */}
                                        <div className="flex justify-between w-[804px] sm:w-full">
                                            <h3 className="mb-3 text-black text-SH5_M sm:text-[16px]">
                                                {education.school}
                                            </h3>
                                            {education.date && education.date.length > 10 && (
                                                <time className="mr-10 text-gray_5 text-P8_R sm:mr-0 ">
                                                    {education.date}
                                                </time>
                                            )}
                                        </div>

                                        {/* 설명과 상세 정보를 포함하는 영역 */}
                                        <div className="flex flex-col w-[480px] sm:w-full sm:flex-wrap">
                                            {education.class && (
                                                <p className="mb-2 text-gray_5 text-P7_R">{education.class}</p>
                                            )}
                                            {education.comment && (
                                                <div className="flex flex-col sm:w-full sm:flex-wrap">
                                                    <p className="text-gray_5 text-P7_R whitespace-pre-wrap">
                                                        • {education.comment}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            </>
                        ))}
                    </ol>
                </div>
            )}
            <div className="sm:flex sm:justify-center sm:items-center">
                <div className="bg-disabled w-[804px] h-[0.5px] mb-10 mt-10 sm:w-[370px]"></div>
            </div>
        </div>
    );
};

export default Bottom;
