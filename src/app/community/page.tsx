"use client";
import Cards from "@/Components/Community/Cards";
import Carousel from "@/Components/Community/Carousel";
import JobFilter from "@/Components/Community/Filter";
import Filter from "@/Components/Community/JobFilter";
import useSupabaseRange from "@/hooks/useSupabaseRange";
import useJobFilterStore from "@/store/jobFilterStore";
import { QUERY_KEY } from "@/util/query_key";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const ComuunityPage = () => {
    const queryClient = useQueryClient();
    const { setPage } = useSupabaseRange();
    const { setJobFilter } = useJobFilterStore();

    useEffect(() => {
        // queryClient.removeQueries({ queryKey: [QUERY_KEY.communityPortfolio] });
        setPage(0);
    }, [setPage]);
    return (
        <div className="flex flex-col items-center">
            <div className="flex w-full">
                <div className="font-spoqaMedium text-black font-bold text-2xl relative mt-20 mb-3 ml-[15%]">
                    포리포 추천, HOT🔥 개발자
                </div>
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
        </div>
    );
};

export default ComuunityPage;
