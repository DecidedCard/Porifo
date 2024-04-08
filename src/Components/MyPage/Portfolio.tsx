"use client";

import usePortfolio from "@/hooks/mypage/usePortfolio";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject } from "react";
import { usePDF } from "react-to-pdf";
import Button from "../Commen/Button";
import useUserStore from "@/store/userStore";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Portfolio = ({ item, targetRef }: { item: PortfolioInfo; targetRef: MutableRefObject<any> }) => {
    const project = item.project as unknown as Project[];
    return (
        <div ref={targetRef}>
            <div className="px-5 w-96">
                <div>
                    <h2>
                        <label>이름: </label>
                        {item.name}
                    </h2>
                    <Image
                        src={item.profileImage!}
                        alt="프로필 이미지"
                        width={100}
                        height={100}
                        className="w-32 h-32 rounded-full"
                    />
                </div>
                <div>
                    <label>소개: </label>
                    {item.introduce}
                </div>
                <div>
                    <div>
                        <label>전화번호: </label>
                        {item.tel}
                    </div>
                    <div>
                        <label>학교: </label>
                        {item.school}
                    </div>
                    <div>
                        <label>전공: </label>
                        {item.class}
                    </div>
                    <div>
                        <label>직군: </label>
                        {item.job}
                    </div>
                    <div>
                        <Link href={item.blogLink!}>Blog </Link>
                    </div>
                    <div>
                        <Link href={item.githubLink!}>Github </Link>
                    </div>

                    <p>프로젝트</p>
                    <div>
                        {project.map((item, idx) => {
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
        </div>
    );
};

export default Portfolio;
