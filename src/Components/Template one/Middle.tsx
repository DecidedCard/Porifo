"use client";

import { useState } from "react";
import { Career } from "@/types/Career";
import { Project } from "@/types/Project";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";
import Link from "next/link";

const Middle = ({ portfolio }: { portfolio: PortfolioInfo }) => {

    const [userInfo] = useState({
        introduce: portfolio.introduce,
    });

    const career = portfolio.career as Career[];
    const project = portfolio.project as Project[];
    const userSkillTag = portfolio.skillTag as string[];

    const experiences = [...career];
    const projects = [...project];
    const userSkillTags = [...userSkillTag];

    return (
        <main>
            <div className="my-12 flex flex-col items-start justify-start gap-10">

                {userSkillTag.length > 0 && (
                    <div className="flex flex-col items-start justify-start mt-2">
                        <p className="font-bold text-[22px] w-[804px]">기술스택</p>
                        <div className="flex flex-wrap text-primary text-[12px]">
                            {userSkillTags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="mt-4 mr-2 p-3 bg-gray-200 rounded-lg border border-primary border-solid h-9"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col items-start justify-start my-10">
                    <p className="font-bold text-[22px]">자기소개</p>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                    <p className="text-[14px] w-[804px] tracking-wide leading-normal">{userInfo.introduce}</p>
                </div>

                <ol>
                    {projects.map((project, index) => (
                        <li key={index} className="flex flex-col items-start justify-start">
                            <p className="font-bold text-[22px]">프로젝트</p>
                            <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                            <div className="flex flex-col w-[804px]">
                                {/* 이미지 영역 - 이미지가 있을 경우에만 렌더링 */}
                                <div className="flex flex-row">
                                    {project.images &&
                                        project.images.map((image, index) => (
                                            <Image
                                                key={index}
                                                src={image}
                                                alt="프로젝트"
                                                className="object-cover flex flex-row w-[263px] h-[198px] rounded-2xl mr-2"
                                                width={800}
                                                height={800}
                                            />
                                        ))}
                                </div>

                                {/* 제목과 날짜를 포함하는 영역 */}
                                <div className="flex w-full flex-col">
                                    <div className="flex justify-between w-[804px] mt-2">
                                        <h3 className="text-[20px] font-medium mb-1">{project.name}</h3>
                                        <time className="text-gray4 text-[12px] font-normal leading-none">
                                            {project.date}
                                        </time>
                                    </div>

                                    {/* 설명과 상세 정보를 포함하는 영역 */}
                                    <div className="flex flex-col mt-5">
                                        <p className="text-[14px] font-normal mb-2 text-gray4">
                                            {project.introduce}
                                        </p>
                                        {project.githubLink && (
                                            <div className="flex items-center text-gray4 mt-1">
                                                <Image
                                                    src="/assets/image/link.svg"
                                                    alt="link"
                                                    width={24}
                                                    height={24}
                                                    className="mr-1"
                                                />
                                                <Link href={project.githubLink}>
                                                    <p className="text-[12px]">{project.githubLink}</p>
                                                </Link>
                                            </div>
                                        )}

                                        {project.deployLink && (
                                            <div className="flex items-center text-neutral-600 mt-1">
                                                <Image
                                                    src="/assets/image/link.svg"
                                                    alt="link"
                                                    width={24}
                                                    height={24}
                                                    className="mr-1"
                                                />
                                                <Link href={project.deployLink}>
                                                    <p className="text-[12px]">{project.deployLink}</p>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>


                {experiences.length > 0 && (
                    <div className="flex flex-col items-start justify-start mt-12">
                        <p className="font-bold text-[22px]">업무경력</p>
                        <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                        <ol>
                            {experiences.map((experience, index) => (
                                <li key={index} className="flex relative mb-5">
                                    <div className="flex w-full flex-col">
                                        {/* 제목과 날짜를 포함하는 영역 */}
                                        <div className="flex justify-between w-[804px]">
                                            <h3 className="text-[20px] font-medium mb-3">
                                                {experience.company}
                                            </h3>
                                            <time className="text-gray3 text-[12px] font-normal leading-none">
                                                {experience.date}
                                            </time>
                                        </div>

                                        {/* 설명과 상세 정보를 포함하는 영역 */}
                                        <div className="flex flex-col w-[480px]">
                                            <p className="text-[14px] font-normal mb-2 text-gray4">
                                                {experience.department} / {experience.position}
                                            </p>
                                            <div className="flex flex-col">
                                                <p className="font-normal text-gray4 leading-6 text-[12px]">
                                                    • {experience.comment}
                                                </p>
                                            </div>
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
