"use client";

import { useState } from "react";
import { Career } from "@/types/Career";
import { Project } from "@/types/Project";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";
import Link from "next/link";

const Bottom = ({ portfolio }: { portfolio: PortfolioInfo }) => {

    const career = portfolio.career as Career[];
    const project = portfolio.project as Project[];

    const experiences = [...career];
    const projects = [...project];

    return (
        <div>
            <ol className="flex flex-col items-start justify-start w-[800px]">
                <p className="font-medium text-[20px] mb-3">프로젝트</p>
                {projects.map((project, index) => (
                    <li key={index} className="flex flex-col items-start justify-start w-[800px] rounded-lg border border-solid border-disabled p-4">

                        <div className="flex flex-col w-[804px]">
                            {/* 이미지 영역 - 이미지가 있을 경우에만 렌더링 */}
                            <div className="flex flex-row">
                                {project.images &&
                                    project.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt="프로젝트"
                                            className="object-cover flex flex-row w-[250.67px] h-[198px] rounded-2xl mr-2"
                                            width={800}
                                            height={800}
                                        />
                                    ))}
                            </div>

                            {/* 제목과 날짜를 포함하는 영역 */}
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between w-[804px] mt-2">
                                    <h3 className="text-[20px] font-semibold text-gray-900 mb-3">{project.name}</h3>
                                </div>

                                {/* 설명과 상세 정보를 포함하는 영역 */}
                                <div className="flex flex-col mt-5">
                                    <p className="text-[14px] font-normal mb-2 text-gray4">
                                        {project.introduce}
                                    </p>
                                    <time className="text-gray3 text-[12px] font-normal leading-none my-3">
                                        {project.date}
                                    </time>
                                    {project.githubLink && (
                                        <div className="flex items-center text-gray4 mt-2">
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
                                        <div className="flex items-center text-gray4 mt-2">
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
                <div className="bg-deepgray w-[804px] h-[1px] my-10"></div>
            </ol>

            {experiences.length > 0 && (
                <div className="flex flex-col items-start justify-start w-[800px]">
                    <p className="font-medium text-[20px] mb-3">업무경험</p>
                    <ol>
                        {experiences.map((experience, index) => (
                            <li key={index} className="flex mb-5 w-[800px] rounded-lg border border-solid border-disabled p-4">
                                <div className="flex w-full flex-col">
                                    {/* 제목과 날짜를 포함하는 영역 */}
                                    <div className="flex justify-between w-[804px]">
                                        <h3 className="text-[16px] font-semibold mb-3">
                                            {experience.company}
                                        </h3>
                                        <time className="text-gray4 text-[12px] font-normal leading-none mr-10">
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
            <div className="bg-deepgray w-[804px] h-[1px] mb-10 mt-6"></div>
        </div>
    );
};

export default Bottom;