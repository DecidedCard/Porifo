"use client";

import usePortfolio from "@/hooks/myPage/usePortfolio";
import useUser from "@/store/userStore";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
    const { user } = useUser();
    const { portfolio, isError, isFetching } = usePortfolio(user!.id);

    if (isFetching) {
        return <div>로딩중입니다...</div>;
    }

    if (isError) {
        return <div>에러!</div>;
    }

    const info = portfolio![0];
    const project: Project[] = JSON.parse(JSON.stringify(info.project));

    return (
        <>
            <button>pdf 다운로드</button>
            <div className="px-5 w-96">
                <div>
                    <h2>
                        <label>이름: </label>
                        {info.name}
                    </h2>
                    <Image
                        src={info.profileImage!}
                        alt="프로필 이미지"
                        width={100}
                        height={100}
                        className="w-32 h-32 rounded-full"
                    />
                </div>
                <div>
                    <label>소개: </label>
                    {info.introduce}
                </div>
                <div>
                    <div>
                        <label>전화번호: </label>
                        {info.tel}
                    </div>
                    <div>
                        <label>학교: </label>
                        {info.school}
                    </div>
                    <div>
                        <label>전공: </label>
                        {info.class}
                    </div>
                    <div>
                        <label>직군: </label>
                        {info.job}
                    </div>
                    <div>
                        <Link href={info.blogLink!}>Blog </Link>
                    </div>
                    <div>
                        <Link href={info.githubLink!}>Github </Link>
                    </div>

                    <p>프로젝트</p>
                    <div>
                        {project!.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    {item.name}
                                    <div>
                                        {item.images.map((item, idx) => {
                                            return (
                                                <div key={idx}>
                                                    <Image src={item} alt="프로젝트 이미지" width={100} height={100} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
