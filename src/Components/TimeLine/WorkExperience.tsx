import React from 'react';
import WorkTimelineItem from './WorkTimelineItem';

const WorkExperience = () => {
    const experiences = [
        {
            title: "스파르타코딩클럽",
            date: "2023.01 ~ 2024.03",
            description: "게임 개발팀 / 게임 개발자",
            details: [
                "근무한 세부 내용 1",
                "근무한 세부 내용 2",
                "근무한 세부 내용 3",
            ],
            
        },
        {
            title: "스파르타코딩클럽",
            date: "2023.01 ~ 2024.03",
            description: "게임 개발팀 / 게임 개발자",
            details: [
                "근무한 세부 내용 1",
                "근무한 세부 내용 2",
                "근무한 세부 내용 3",
            ],
        },
        {
            title: "스파르타코딩클럽",
            date: "2023.01 ~ 2024.03",
            description: "게임 개발팀 / 게임 개발자",
            details: [
                "근무한 세부 내용 1",
                "근무한 세부 내용 2",
                "근무한 세부 내용 3",
            ],
        }
        // 다른 경험 추가 가능
    ];

    return (
        <div className="flex flex-col items-start justify-start">
            <h2 className="text-[22px] font-bold">업무경력</h2>
            <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
            <ol className="relative border-s  border-solid border-secondary ">
                {experiences.map((experience, index) => (
                    <WorkTimelineItem key={index} date={experience.date} title={experience.title} description={experience.description} details={experience.details}/>
                ))}
            </ol>
        </div>
    );
};

export default WorkExperience;
