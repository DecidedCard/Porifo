import React from "react";

import ProjectTimelineItem from "./ProjectTimelineItem";
import type { Project } from "@/types/Project";

const UserProject = ({ project }: { project: Project[] }) => {
    const projects = [...project];

    return (
        <div className="flex flex-col items-start justify-start mt-10">
            <h2 className="text-[22px] font-bold">프로젝트</h2>
            <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
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
                        />
                        {index !== projects.length - 1 && (
                            <div className="bg-deepgray w-[760px] h-[1px] my-10 ml-7"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default UserProject;
