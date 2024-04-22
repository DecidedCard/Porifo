import React from "react";
import Top from "@/Components/Template Three/Top";
import Middle from "@/Components/Template Three/Middle";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Modern = ({ portfolio }: { portfolio: PortfolioInfo }) => {

    return (
        <div className="w-[932px] flex flex-col justify-center items-center bg-white pb-10">
            <Top portfolio={portfolio} />
            <Middle portfolio={portfolio} />
            {/* <Bottom portfolio={portfolio} />
            <URL portfolio={portfolio} /> */}
        </div>
    );
};

export default Modern;