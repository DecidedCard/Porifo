import React, { useEffect } from "react";
import Standard from "../Template one/Standard";
import Grid from "../Template two/Grid";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Preview = ({
    template,
    setPreviewModal,
    targetRef,
    portfolio,
}: {
    template: string;
    setPreviewModal: React.Dispatch<React.SetStateAction<boolean>>;
    targetRef?: React.MutableRefObject<any>;
    portfolio: PortfolioInfo;
}) => {
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
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-80 z-50 ">
            <div
                className="flex justify-center items-center text-[32px] text-gray3 absolute top-[9%] left-[22%] w-12 h-12 bg-gray2 rounded-full cursor-pointer"
                onClick={() => setPreviewModal(false)}
            >
                x
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] overflow-y-auto rounded-2xl">
                <div ref={targetRef} className="">
                    {template === "Standard" && <Standard portfolio={portfolio} />}
                    {template === "Grid" && <Grid portfolio={portfolio} />}
                </div>
            </div>
        </div>
    );
};

export default Preview;
