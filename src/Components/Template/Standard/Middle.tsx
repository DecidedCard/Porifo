import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import CheckImage from "../CheckImage";

import type { Education } from "@/types/Education";
import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";
import type { PortfolioInfo } from "@/types/PortfolioInfo";

const Middle = ({ portfolio, pdf }: { portfolio: PortfolioInfo; pdf?: boolean }) => {
    const [checkImage, setCheckImage] = useState<number | null>(null);
    const [projectIdx, setProjectIndex] = useState<number | null>(null);
    const career = portfolio.career as Career[];
    const project = portfolio.project as Project[];
    const education = portfolio.education as Education[];
    const userSkillTag = portfolio.skillTag as string[];

    const onClickImageCheckHandler = (project: number, image: number) => {
        setProjectIndex(project);
        setCheckImage(image);
    };

    return (
        <main>
            <div className="my-12 flex flex-col items-start justify-start gap-10 sm:items-center sm:justify-center">
                {userSkillTag.length > 0 && (
                    <div className="flex flex-col items-start justify-start mt-2 sm:w-full sm:items-center sm:justify-center">
                        <p className="w-[804px] sm:w-[370px] text-black text-H7_B sm:font-medium sm:text-[20px]">
                            기술스택
                        </p>
                        <div className="flex flex-wrap text-primary_1 text-P8_M sm:w-[370px]">
                            {userSkillTag.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`flex items-center mt-4 mr-2 px-3 bg-gray-200 rounded-lg border border-primary_1 border-solid h-9 ${
                                        pdf && "pb-2"
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col items-start justify-start my-10 whitespace-pre-wrap sm:items-center sm:justify-center">
                    <p className="text-black text-H7_B sm:w-[370px] sm:font-medium sm:text-[20px]">자기소개</p>
                    <div className="bg-gray_3 w-[804px] h-[1px] my-5 sm:w-[370px]"></div>
                    <p className="w-[804px] tracking-wide text-gray_5 text-P7_R sm:w-[370px] sm:text-gray4">
                        {portfolio.introduce}
                    </p>
                </div>

                <ol>
                    {project.map((project, projectIndex) => (
                        <li
                            key={projectIndex}
                            className="flex flex-col items-start justify-start sm:items-center sm:justify-center"
                        >
                            <p className="text-black text-H7_B sm:w-[370px] sm:font-medium sm:text-[20px]">프로젝트</p>
                            <div className="bg-gray_3 w-[804px] h-[1px] my-5 sm:w-[370px]"></div>
                            <div className="flex flex-col w-[804px] sm:w-full">
                                {/* 이미지 영역 - 이미지가 있을 경우에만 렌더링 */}
                                <div className="flex flex-row sm:items-center sm:justify-center">
                                    {project.images &&
                                        project.images.map((image, index) => (
                                            <div key={index}>
                                                <Image
                                                    src={image}
                                                    alt="프로젝트"
                                                    className="object-cover flex flex-row w-[263px] h-[198px] rounded-2xl mr-2 sm:w-[120px] sm:h-[110px] sm:mr-1"
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

                                {/* 제목과 날짜를 포함하는 영역 */}
                                <div className="flex w-full flex-col sm:items-center sm:justify-center sm:mt-2">
                                    <div className="flex justify-between w-[804px] mt-2 sm:w-[370px]">
                                        <h3 className="text-black text-P5_M mb-1 sm:text-[16px] sm:w-[299px]">
                                            {project.name}
                                        </h3>
                                        <time className="text-gray_5 text-P8_R sm:text-[10px]">{project.date}</time>
                                    </div>

                                    {/* 설명과 상세 정보를 포함하는 영역 */}
                                    <div className="flex flex-col mt-5 sm:items-center sm:justify-center">
                                        <p className="mb-2 text-gray_5 text-P7_R whitespace-pre-wrap sm:w-[370px]">
                                            {project.introduce}
                                        </p>
                                        {project.githubLink && (
                                            <div className="flex items-center text-gray_4 mt-1 sm:w-[370px]">
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
                                            <div className="flex items-center text-gray_4 mt-1 sm:w-[370px]">
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
                    <div className="flex flex-col items-start justify-start mt-12 sm:items-center sm:justify-center">
                        <p className="text-black text-H7_B sm:w-[370px] sm:font-medium sm:text-[20px]">업무경력</p>
                        <div className="bg-gray_3 w-[804px] h-[1px] my-5 sm:w-[370px]"></div>
                        <ol>
                            {career.map((experience, index) => (
                                <li key={index} className="flex relative mb-5 sm:w-[370px]">
                                    <div className="flex w-full flex-col">
                                        {/* 제목과 날짜를 포함하는 영역 */}
                                        <div className="flex justify-between w-[804px] sm:w-[370px]">
                                            <h3 className="mb-3 text-black text-P5_M sm:text-[16px]">
                                                {experience.company}
                                            </h3>
                                            {experience.date && experience.date.length > 10 && (
                                                <time className="text-gray_5 text-P8_R sm:text-[10px]">
                                                    {experience.date}
                                                </time>
                                            )}
                                        </div>

                                        {/* 설명과 상세 정보를 포함하는 영역 */}
                                        <div className="flex flex-col w-[370px]">
                                            {experience.department && experience.position && (
                                                <p className="mb-2 text-gray_5 text-P7_R">
                                                    {experience.department} / {experience.position}
                                                </p>
                                            )}

                                            <div className="flex flex-col">
                                                {experience.comment && (
                                                    <p className="text-gray_5 text-P7_R whitespace-pre-wrap sm:text-[14px]">
                                                        • {experience.comment}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}

                {education && education.length > 0 && education[0].school && (
                    <div className="flex flex-col items-start justify-start mt-12 sm:items-center sm:justify-center">
                        <p className="text-black text-H7_B sm:w-[370px] sm:font-medium sm:text-[20px]">학력</p>
                        <div className="bg-gray_3 w-[804px] h-[1px] my-5 sm:w-[370px]"></div>
                        <ol>
                            {education.map((education, index) => (
                                <li key={index} className="flex relative mb-5 sm:w-[370px]">
                                    <div className="flex w-full flex-col">
                                        {/* 제목과 날짜를 포함하는 영역 */}
                                        <div className="flex justify-between w-[804px] sm:w-[370px]">
                                            <h3 className="mb-3 text-black text-P5_M sm:text-[16px]">
                                                {education.school}
                                            </h3>
                                            {education.date && education.date.length > 10 && (
                                                <time className="text-gray_5 text-P7_R sm:text-[10px]">
                                                    {education.date}
                                                </time>
                                            )}
                                        </div>

                                        {/* 설명과 상세 정보를 포함하는 영역 */}
                                        <div className="flex flex-col w-[370px]">
                                            {education.class && (
                                                <p className="mb-2 text-gray_5 text-P7_R">{education.class}</p>
                                            )}
                                            {education.comment && (
                                                <p className="text-gray_5 text-P7_R whitespace-pre-wrap sm:text-[14px]">
                                                    • {education.comment}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Middle;
