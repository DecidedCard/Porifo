import React from "react";

import ProjectTimelineItem from "./ProjectTimelineItem";

import type { Project } from "@/types/Project";

const UserProject = ({ project }: { project: Project[] }) => {
    const projects = [...project];

    return (
        <div className="flex flex-col items-start justify-start relative">
            <h2 className="text-[22px] font-bold">프로젝트</h2>
            <div className=" bg-deepgray w-[804px] h-[1px] my-5"></div>
            {projects.length > 1 && (
                <div className="absolute border-s border-solid border-secondary h-[46%] mt-[230px]">
                </div>
            )}
            <div>
                {projects.map((project, index) => (
                    <ProjectTimelineItem
                        key={index}
                        name={project.name}
                        date={project.date}
                        images={project.images}
                        introduce={project.introduce}
                        deployLink={project.deployLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserProject;
