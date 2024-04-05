import Detail from "@/Components/DetailPage/Detail";
import React from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <>
            <Detail id={id} />
        </>
    );
};

export default DetailPage;
