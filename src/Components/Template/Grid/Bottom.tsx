import React from "react";

import WorkExperience from "./TimeLine/WorkExperience";
import UserProject from "./TimeLine/UserProject";

import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";
import type { PortfolioInfo } from "@/types/PortfolioInfo";
import type { Education } from "@/types/Education";

const Bottom = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const education = portfolio.education as Education[];
    const career = portfolio.career as Career[];
    const project = portfolio.project as Project[];

    return (
        <main className="flex items-start justify-start sm:items-center sm:justify-center">
            <section className="flex flex-col justify-center items-start gap-10 sm:items-center">
                <UserProject project={project} />
                <WorkExperience career={career} />
                {education && education.length > 0 && education[0].school && (
                    <div>
                        <h2 className="text-H7_B sm:text-[20px] sm:font-medium sm:w-[360px]">학력</h2>
                        <div className="bg-gray_3 w-[804px] h-[1px] my-5 sm:w-[360px]"></div>

                        <div>
                            {education.map((education, index) => (
                                <li key={index} className="mb-10 flex relative sm:w-full">
                                    {/* {careerCount > 0 && (
                            <div className="absolute w-[10px] h-[10px] rounded-full left-[-5px] border-2 border-primary border-solid bg-white"></div>
                            )} */}
                                    <div className="flex w-full sm:w-[360px]">
                                        {/* 제목과 날짜를 포함하는 영역 */}
                                        <div className="flex flex-col w-1/2">
                                            <h3 className="mb-3 text-black text-P5_M sm:text-[16px]">
                                                {education.school}
                                            </h3>
                                            {education.date && education.date.length > 10 && (
                                                <time className="mb-1 text-gray_4 text-P8_R sm:w-[150px]">
                                                    {education.date}
                                                </time>
                                            )}
                                        </div>

                                        {/* 설명과 상세 정보를 포함하는 영역 */}
                                        <div className="flex flex-col w-[480px] ml-10">
                                            {education.class && (
                                                <p className="mb-2 text-gray_4 text-P8_R">{education.class}</p>
                                            )}
                                            {education.comment && (
                                                <div className="flex flex-col">
                                                    <p className="text-gray_5 text-P8_R whitespace-pre-wrap">
                                                        {education.comment}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Bottom;
