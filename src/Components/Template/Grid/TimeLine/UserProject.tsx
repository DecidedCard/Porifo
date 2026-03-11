import React from "react";

import ProjectTimelineItem from "./ProjectTimelineItem";
import type { Project } from "@/types/Project";

const UserProject = ({ project }: { project: Project[] }) => {
    const projects = [...project];

    return (
        <div className="flex flex-col items-start justify-start mt-10 sm:w-full sm:items-center sm:justify-center">
            <h2 className="text-black text-H7_B sm:text-[20px] sm:font-medium sm:w-[360px]">프로젝트</h2>
            <div className="bg-gray_3 w-[804px] h-[1px] my-5 sm:w-[360px]"></div>
            {/* {projects.length > 1 && (
                <div className="absolute border-s border-solid border-secondary h-[70%] mt-[296px] pb-[300px]"></div>
            )} */}
            <div>
                {projects.map((project, index) => (
                    <React.Fragment key={index}>
                        {/* Fragment로 각 요소를 감싸고 key 속성 제공 */}
                        <ProjectTimelineItem
                            name={project.name}
                            date={project.date}
                            images={project.images}
                            introduce={project.introduce}
                            deployLink={project.deployLink}
                            githubLink={project.githubLink}
                            index={index}
                        />
                        {index !== projects.length - 1 && (
                            <div className="bg-gray_3 w-[760px] h-[1px] my-10 ml-7 sm:w-[360px]"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default UserProject;
