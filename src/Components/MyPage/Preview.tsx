import React from "react";
import Standard from "../Template one/Standard";
import Grid from "../Template two/Grid";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Preview = ({
    template,
    id,
    setPreviewModal,
    targetRef,
    portfolio,
}: {
    template: string;
    id: string;
    setPreviewModal: React.Dispatch<React.SetStateAction<boolean>>;
    targetRef?: React.MutableRefObject<any>;
    portfolio: PortfolioInfo;
}) => {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-80 z-50">
            <div
                className="flex justify-center items-center text-3xl absolute top-[9%] left-[7%] w-12 h-12 bg-gray2 rounded-full cursor-pointer"
                onClick={() => setPreviewModal(false)}
            >
                X
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] overflow-y-auto">
                <div ref={targetRef}>
                    {template === "standard" && <Standard portfolio={portfolio} />}
                    {template === "grid" && <Grid portfolio={portfolio} />}
                </div>
            </div>
        </div>
    );
};

export default Preview;
