import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Modern = ({ portfolio }: { portfolio: PortfolioInfo }) => {

    return (
        <div className="w-[932px] flex flex-col items-center bg-white pb-10">
            <Top portfolio={portfolio} />
            <Middle portfolio={portfolio} />
            <Bottom portfolio={portfolio} />
        </div>
    );
};

export default Modern;