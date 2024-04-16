"use client";

import React from "react";

import WorkTimelineItem from "./WorkTimelineItem";

import type { Career } from "@/types/Career";

const WorkExperience = ({ career }: { career: Career[] }) => {
    const experiences = [...career];
    console.log(career)

    return (
        <div className="flex flex-col items-start justify-start relative">
            <h2 className="text-[22px] font-bold">업무경력</h2>
            <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>

            {career.length > 2 && (
                <div className="absolute border-s border-solid border-secondary h-[40%] mt-[64px]">
                </div>
            )}
            <div>
                {experiences.map((experience, index) => (
                    <WorkTimelineItem
                        key={index}
                        date={experience.date}
                        company={experience.company}
                        description={experience.department}
                        position={experience.position}
                        comments={experience.comment}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
