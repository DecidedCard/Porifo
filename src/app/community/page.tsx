import Carousel from "@/Components/Community/Carousel";
import Filter from "@/Components/Community/Filter";
import React from "react";

const ComuunityPage = () => {
    return (
        <>
            <div className="font-spoqaMedium text-black font-bold text-2xl relative flex items-center justify-start mt-20 mb-3 pl-28 ">
                포리포 추천, HOT🔥 개발자
            </div>
            <div>
                <Carousel />
            </div>
            <Filter />;
        </>
    );
};

export default ComuunityPage;
