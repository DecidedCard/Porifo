import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import URL from "./URL";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Standard = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    return (
        <div className="w-[932px] flex flex-col items-center bg-gray">
            <Top portfolio={portfolio} />
            <Middle portfolio={portfolio} />
            <URL portfolio={portfolio} />
        </div>
    );
};

export default Standard;
