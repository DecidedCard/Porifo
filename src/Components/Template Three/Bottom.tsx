"use client"

import { Career } from "@/types/Career";
import { Project } from "@/types/Project";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";
import Link from "next/link";

const Bottom = ({ portfolio }: { portfolio: PortfolioInfo }) => {

    const project = portfolio.project as Project[];

    const projects = [...project];

    return (
        <div>
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
                                    <h3 className="text-[20px] font-semibold text-gray-900 mb-3">{project.name}</h3>
                                    <time className="text-middlegray text-[12px] font-normal leading-none">
                                        {project.date}
                                    </time>
                                </div>

                                {/* 설명과 상세 정보를 포함하는 영역 */}
                                <div className="flex flex-col mt-5">
                                    <p className="text-[14px] font-normal mb-2 text-neutral-600">
                                        {project.introduce}
                                    </p>
                                    {project.githubLink && (
                                        <div className="flex items-center text-neutral-600 mt-2">
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
                                        <div className="flex items-center text-neutral-600 mt-2">
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
        </div>
    );
};

export default Bottom;