import Portfolio from "@/Components/MyPageComponents/Portfolio";
import React from "react";

const MyPortfolio = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <>
            <Portfolio id={id} />
        </>
    );
};

export default MyPortfolio;
