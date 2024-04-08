import React from "react";

import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

const Preview = ({ project, career }: { project?: Project; career?: Career }) => {
    return project ? (
        <div className="flex flex-col gap-10 w-72 bg-deepgray">
            <div className="flex justify-between">
                <h3 className="text-xl">{project?.name}</h3>
                <p className="text-xs">{project.date}</p>
            </div>
            <div className="flex flex-col">
                <p>{project?.introduce}</p>
                <div className="flex flex-wrap justify-evenly">
                    {project?.images.map((item, idx) => {
                        return <Image key={idx} src={item} alt="프로젝트 이미지" width={100} height={100} />;
                    })}
                </div>
                <Link href={project.githubLink}>GithubLink</Link>
                {project.deployLink && <Link href={project.deployLink}>배포링크</Link>}
            </div>
        </div>
    ) : (
        career && (
            <div className="flex flex-col gap-10 w-72 bg-deepgray">
                <div className="flex justify-between">
                    <h3 className="text-xl">{career.company}</h3>
                    <p className="text-xs">{career.date}</p>
                </div>
                <div className="flex flex-col">
                    <div>
                        <p>{career.department}</p>
                        <p>{career.position}</p>
                    </div>
                    <p>{career.comment}</p>
                </div>
            </div>
        )
    );
};

export default Preview;
