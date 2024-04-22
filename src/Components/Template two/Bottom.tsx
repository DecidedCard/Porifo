"use client";

import React from "react";
import { useState } from "react";

import WorkExperience from "../TimeLine/WorkExperience";
import UserProject from "../TimeLine/UserProject";

import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";
import type { PortfolioInfo } from "@/types/PortfolioInfo";

const Bottom = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const career = portfolio.career as Career[];
    const [userCareer] = useState<Career[]>([...career]);

    const project = portfolio.project as Project[];
    const [userProject] = useState<Project[]>([...project]);
    return (
        <main className="flex items-start justify-start">
            <section className="flex flex-col justify-center items-start gap-10">
                <UserProject project={userProject} />
                <WorkExperience career={userCareer} />
            </section>
        </main>
    );
};

export default Bottom;
