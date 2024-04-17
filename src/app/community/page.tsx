"use client";
import Cards from "@/Components/Community/Cards";
import Carousel from "@/Components/Community/Carousel";
import JobFilter from "@/Components/Community/Filter";
import Filter from "@/Components/Community/JobFilter";
import useSupabaseRange from "@/hooks/useSupabaseRange";
import { useEffect } from "react";

const ComuunityPage = () => {
    const { setPage } = useSupabaseRange();

    useEffect(() => {
        setPage(0);
    }, []);
    return (
        <>
            <div className="font-spoqaMedium text-black font-bold text-2xl relative flex items-center justify-start mt-20 mb-3 pl-28 ">
                포리포 추천, HOT🔥 개발자
            </div>
            <div>
                <Carousel />
            </div>
            <div className="flex gap-32 lg:gap-20">
                <Filter />
                <div>
                    <JobFilter />
                    <Cards />
                </div>
            </div>
        </>
    );
};

export default ComuunityPage;
