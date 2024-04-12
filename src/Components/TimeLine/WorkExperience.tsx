"use client"

import React from 'react';
import WorkTimelineItem from './WorkTimelineItem';
import { Career } from '@/types/Career';

const WorkExperience = ({career}: {career: Career[]}) => {
    
    const experiences = [
        ...career
    ];

    return (
        <div className="flex flex-col items-start justify-start">
            <h2 className="text-[22px] font-bold">업무경력</h2>
            <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
            <ol className="relative border-s border-solid border-secondary ">
                {experiences.map((experience, index) => (
                    <WorkTimelineItem key={index} date={experience.date} company={experience.company} description={experience.department} position={experience.position} comments={experience.comment}/>
                ))}
            </ol>
        </div>
    );
};

export default WorkExperience;
