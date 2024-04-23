
import React from "react";

import WorkExperience from "../TimeLine/WorkExperience";
import UserProject from "../TimeLine/UserProject";

import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";
import type { PortfolioInfo } from "@/types/PortfolioInfo";

const Bottom = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const career = portfolio.career as Career[];
    const project = portfolio.project as Project[];

    return (
        <main className="flex items-start justify-start">
            <section className="flex flex-col justify-center items-start gap-10">
                <UserProject project={project} />
                <WorkExperience career={career} />
            </section>
        </main>
    );
};

export default Bottom;
