import Detail from "@/Components/DetailPage/Detail";
import Portfolio_detail from "@/Components/DetailPage/Portfolio_detail";
import React from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div>
            <Portfolio_detail id={id} />
            <Detail id={id} />
        </div>
    );
};

export default DetailPage;
