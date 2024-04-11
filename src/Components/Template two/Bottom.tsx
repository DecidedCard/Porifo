"use client"

import React from 'react';
import WorkExperience from "../TimeLine/WorkExperience";
import UserProject from '../TimeLine/UserProject';
import { useState, useEffect } from "react";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { Career } from '@/types/Career';
import { Project } from '@/types/Project';

const Bottom = ({ id }: { id: string }) => {

    const [userCareer, setUserCareer] = useState<Career[]>(
        []
    );
    const [userProject, setUserProject] = useState<Project[]>(
        []
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await supabasePortfolioInfoRead({ id: 'userId', value: id });
                const career = data[0].career as Career[]
                setUserCareer(
                    career, 
                )
                const project = data[0].project as unknown as Project[]
                setUserProject(
                    project,
                )
            } catch (error) {
                console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="flex items-start justify-start ml-10">
            <section className="flex flex-col justify-center items-start self-stretch shrink-0 gap-10">

                <UserProject project={userProject}/>
                <WorkExperience career={userCareer}/>

            </section>
        </main>
    );
};

export default Bottom;
