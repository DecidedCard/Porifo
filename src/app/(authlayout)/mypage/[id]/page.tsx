"use client";

import usePortfolio from "@/hooks/myPage/usePortfolio";
import Image from "next/image";
import React from "react";

const Portfolio = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { portfolio, isError, isFetching } = usePortfolio(id);

    if (isFetching) {
        return <div>로딩중입니다...</div>;
    }

    if (isError) {
        return <div>에러!</div>;
    }

    const info = portfolio![0];
    console.log(info.profileImage);

    return (
        <div>
            <div>
                <h2>
                    <label>이름: </label>
                    {info.name}
                </h2>
                {/* <Image
                    src={info.profileImage}
                    alt="프로필 이미지"
                    width={100}
                    height={100}
                    className="w-32 h-32 rounded-full"
                /> */}
            </div>
        </div>
    );
};

export default Portfolio;
