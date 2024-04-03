"use client";

import React from "react";

const Portfolio = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    console.log(id);
    return <div>Portfolio</div>;
};

export default Portfolio;
