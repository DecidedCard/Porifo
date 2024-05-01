import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import URL from "./URL";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Grid = ({ portfolio, pdf }: { portfolio: PortfolioInfo; pdf?: boolean }) => {
    return (
        <div className="w-[932px] flex flex-col items-center bg-white pb-10 sm:w-full sm:pt-10">
            <Top portfolio={portfolio} pdf={pdf} />
            <Middle portfolio={portfolio} pdf={pdf} />
            <Bottom portfolio={portfolio} />
            <URL portfolio={portfolio} />
        </div>
    );
};

export default Grid;
