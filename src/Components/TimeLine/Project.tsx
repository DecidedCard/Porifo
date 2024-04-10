import React from 'react';
import ProjectTimelineItem from './ProjectTimelineItem';

const Project = () => {
    const projects = [
        {
            title: "스파르타 게임 제작 프로젝트",
            date: "2023.01 ~ 2024.03",
            role: "게임 개발",
            details: [
                "프로젝트 세부 내용 1",
                "프로젝트 세부 내용 2",
                "프로젝트 세부 내용 3",
            ],
            link: "http://spartacodingclub.kr"
        },
        {
            date: "2023.01 ~ 2024.03",
            title: "게임 제작 프로젝트",
            role: "게임 개발",
            details: [
                "프로젝트 세부 내용 1",
                "프로젝트 세부 내용 2",
                "프로젝트 세부 내용 3",
            ],
            link: "http://spartacodingclub.kr"
        },
        
        // 다른 프로젝트 추가 가능
    ];

    return (
        <div className="flex flex-col items-start justify-start">
            <h2 className="text-[22px] font-bold">프로젝트</h2>
            <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
            <ol className="relative border-s border-solid border-secondary ">
                {projects.map((project, index) => (
                    <ProjectTimelineItem 
                    key={index} 
                    title={project.title} 
                    date={project.date} 
                    role={project.role} 
                    details={project.details} 
                    link={project.link}/>
                ))}
            </ol>
        </div>
    );
};

export default Project;
