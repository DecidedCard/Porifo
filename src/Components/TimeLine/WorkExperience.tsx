"use client";

import WorkTimelineItem from "./WorkTimelineItem";
import type { Career } from "@/types/Career";

const WorkExperience = ({ career }: { career: Career[] }) => {


    return (
        <div className="flex flex-col items-start justify-start relative">
            {career.length > 0 && (
                <>
                    <h2 className="text-[22px] font-bold">업무경력</h2>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                    {/* <>
                        {career.length > 1 && (
                            <div className="absolute border-s border-solid border-secondary h-[40%] mt-[64px]"></div>
                        )}
                    </> */}
                    <div>
                        {career.map((experience, index) => (
                            <WorkTimelineItem
                                key={index}
                                date={experience.date}
                                company={experience.company}
                                description={experience.department}
                                position={experience.position}
                                comments={experience.comment}
                                careerCount={career.length}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default WorkExperience;
