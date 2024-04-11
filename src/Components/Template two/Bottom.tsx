"use client";

import React from "react";
import WorkExperience from "../TimeLine/WorkExperience";
import UserProject from "../TimeLine/UserProject";
import { useState, useEffect } from "react";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { Career } from "@/types/Career";
import { Project } from "@/types/Project";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Bottom = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const career = portfolio.career as Career[];
    const [userCareer] = useState<Career[]>([...career]);

    const project = portfolio.project as Project[];
    const [userProject] = useState<Project[]>([...project]);
    return (
        <main className="flex items-start justify-start ml-10">
            <section className="flex flex-col justify-center items-start self-stretch shrink-0 gap-10">
                <UserProject project={userProject} />
                <WorkExperience career={userCareer} />
            </section>
        </main>
    );
};

export default Bottom;
