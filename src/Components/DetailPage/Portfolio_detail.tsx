"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/util/query_key";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";

import useCardIdStore from "@/store/detailStore";

import Comments from "./Comments";
import Standard from "../Template one/Standard";
import Grid from "../Template two/Grid";
import LikeShare from "./LikeShare";

const Portfolio_detail = () => {
    const { cardId: id } = useCardIdStore();
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.detailPortfolio],
        queryFn: () => supabasePortfolioInfoRead({ id: "id", value: id }),
    });

    if (isPending) {
        return <div>로딩중</div>;
    }

    const portfolioInfo = data![0];

    return (
        // 포트폴리오 영역
        <div className="h-[820px] w-[100%] overflow-auto ">
            <div className="flex flex-col">
                {portfolioInfo.template === "Standard" && <Standard portfolio={portfolioInfo} />}
                {portfolioInfo.template === "Grid" && <Grid portfolio={portfolioInfo} />}
            </div>
            <div className="flex flex-col items-center gap-[30px] bg-gray">
                <div>{/* <LikeShare /> */}</div>
                <div className="w-[80%] flex justify-center rounded-2xl bg-hihigray">
                    <Comments />
                </div>
            </div>
        </div>
    );
};

export default Portfolio_detail;
