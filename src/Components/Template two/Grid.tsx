import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import URL from "./URL";

const Grid = ({ id }: { id: string }) => {
    return (
        <div className="w-[932px] flex flex-col items-center bg-gray">
            <Top id={id} />
            <Middle id={id} />
            <Bottom id={id} />
            <URL id={id} />
        </div>
    );
};

export default Grid;
