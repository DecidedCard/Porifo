import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import URL from "./URL";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Modern = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    return (
        <div className="w-[932px] flex flex-col items-center bg-white pb-10 sm:w-full sm:pt-7">
            <Top portfolio={portfolio} />
            <Middle portfolio={portfolio} />
            <Bottom portfolio={portfolio} />
            <URL portfolio={portfolio} />
        </div>
    );
};

export default Modern;
