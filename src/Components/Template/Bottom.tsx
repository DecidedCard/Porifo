import React from 'react';
import WorkExperience from "../TimeLine/WorkExperience";
import Project from '../TimeLine/Project';

const Bottom = () => {
    return (
        <main className="flex items-start justify-start">
            <section className="flex flex-col justify-center items-start self-stretch shrink-0 gap-12 relative">

                <div className="flex justify-start">
                    <WorkExperience />
                </div>

                <article className="flex flex-col items-start justify-start self-stretch shrink-0 relative">

                    <Project />

                </article>
            </section>
        </main>
    );
};

export default Bottom;
