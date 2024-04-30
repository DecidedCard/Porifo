"use client";

import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import Comments from "./Comments";
import Standard from "../Template/Standard/Standard";
import Grid from "../Template/Grid/Grid";
import Modern from "../Template/Modern/Modern";
import Box from "../Template/Box/Box";
import LikeShare from "./LikeShare";
import Loading from "../Loading";

import { QUERY_KEY } from "@/util/query_key";
import { getDetailData } from "@/util/supabase/detail_supabase_DB";

import useCardIdStore from "@/store/detailStore";

import type { PortfolioInfo } from "@/types/PortfolioInfo";

const PortfolioDetail = () => {
    const { cardId: id } = useCardIdStore();
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.detailPortfolio],
        queryFn: () => getDetailData({ id: "id", value: id! }),
    });

    useEffect(() => {
        document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        };
    }, []);

    if (isPending) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    const portfolioInfo: PortfolioInfo = data![0];

    return (
        // 포트폴리오 영역
        <div className="relative h-[900px] w-full overflow-auto rounded-2xl  ">
            <div className="flex flex-col">
                {portfolioInfo.template === "Standard" && <Standard portfolio={portfolioInfo} />}
                {portfolioInfo.template === "Grid" && <Grid portfolio={portfolioInfo} />}
                {portfolioInfo.template === "Modern" && <Modern portfolio={portfolioInfo} />}
                {portfolioInfo.template === "Box" && <Box portfolio={portfolioInfo} />}
            </div>
            <div className="flex flex-col items-center gap-[20px] bg-white">
                <div className="pt-10">
                    <LikeShare portfolioInfo={portfolioInfo} />
                </div>
                <div
                    className="w-[80%] sm:w-[95%] sm:mb-[120px] sm:px-4 mb-10 flex justify-center rounded-2xl bg-hihigray"
                    id="comment"
                >
                    <Comments />
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;
