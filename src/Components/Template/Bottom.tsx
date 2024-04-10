import React from 'react';
import WorkExperience from "../TimeLine/WorkExperience";
import Project from '../TimeLine/Project';

const Bottom = () => {
    return (
        <main className="flex items-start justify-start ml-10">
            <section className="flex flex-col justify-center items-start self-stretch shrink-0 gap-">
                <Project />
                <WorkExperience />

            </section>
        </main>
    );
};

export default Bottom;
