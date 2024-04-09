"use client";

import useProject from "@/hooks/mypage/useProject";
import Image from "next/image";
import Input from "../Commen/Input";
import Button from "../Commen/Button";
import { ChangeEvent } from "react";

const Project = () => {
    const {
        projects,
        fileRef,
        onChangeProjectName,
        onChangeImagesHandler,
        onChangeProjectIntroduce,
        onChangeProjectDate,
        onChangeProjectDeployLink,
        onChangeProjectGithubLink,
        // onClickInsertHandler,
        // onClickDeleteImage,
    } = useProject();

    console.log(projects);

    return (
        <>
            <main className="bg-white rounded-2xl mt-10 ml-9 w-[720px] pb-20">
                <h1 className="flex items-center justify-start pl-6 pt-6 text-2xl font-bold tracking-wider">
                    프로젝트
                </h1>
                {projects &&
                    projects.map((item, idx) => {
                        return (
                            <div key={idx} className="flex flex-col gap-10">
                                <h2 className="pl-6 text-xl font-medium text-left relative flex items-center justify-start">
                                    프로젝트 정보
                                </h2>

                                <div className="flex">
                                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">기본정보</label>
                                    <div className="w-[460px]">
                                        <Input
                                            type="text"
                                            size="big"
                                            placeholder="프로젝트명"
                                            value={item.name}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeProjectName(e, idx)}
                                        />
                                    </div>
                                </div>
                                <div className="flex">
                                    {/* 사진 제한 3장 */}
                                    <p className="pl-6 font-medium text-zinc-500 w-[177px]">사진 업로드 하기</p>
                                    <div className="flex items-center justify-center border border-solid border-zinc-300 w-[460px] h-[200px] rounded-lg">
                                        {item.images.length !== 0 ? (
                                            item.images.map((item, idx) => {
                                                return (
                                                    <div key={idx}>
                                                        <Image
                                                            src={item}
                                                            alt="프로젝트 미리보기"
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <p className="cursor-pointer">X</p>
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <label htmlFor="file">
                                                <div className="flex items-center justify-center w-10 h-10 border border-solid border-zinc-300 rounded-full text-2xl text-zinc-300">
                                                    +
                                                </div>
                                            </label>
                                        )}
                                    </div>
                                    <input
                                        ref={fileRef}
                                        type="file"
                                        id="file"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeImagesHandler(e, idx)}
                                        className="hidden"
                                        multiple
                                    />
                                </div>

                                <div className="flex items-start">
                                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                                        내용
                                    </label>
                                    <div className="w-[460px]">
                                        <Input
                                            type="text"
                                            size="big"
                                            placeholder="프로젝트의 내용과 본인의 역할, 기여도 등을 서술해 주세요"
                                            value={projects[idx].introduce}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeProjectIntroduce(e, idx)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                                        프로젝트 기간
                                    </label>
                                    <div className="flex justify-between w-[460px]">
                                        <div className="w-[224px]">
                                            <Input
                                                type="date"
                                                size="big"
                                                name="startDate"
                                                placeholder="YYYY.MM"
                                                value={item.date.slice(0, 10)}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    onChangeProjectDate(e, idx)
                                                }
                                            />
                                        </div>

                                        <div className="w-[224px]">
                                            <Input
                                                type="date"
                                                size="big"
                                                name="endDate"
                                                placeholder="YYYY.MM"
                                                value={item.date.slice(13)}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    onChangeProjectDate(e, idx)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                                        베포링크
                                    </label>
                                    <div className="w-[460px]">
                                        <Input
                                            type="url"
                                            size="big"
                                            placeholder="http://"
                                            value={projects[idx].deployLink}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeProjectDeployLink(e, idx)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                                        Github
                                    </label>
                                    <div className="w-[460px]">
                                        <Input
                                            type="url"
                                            size="big"
                                            placeholder="http://"
                                            value={projects[idx].githubLink}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeProjectGithubLink(e, idx)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                {/* <div onClick={onClickInsertHandler} className="text-4xl cursor-pointer w-fit mx-auto">
                            +
                        </div> */}
            </main>
        </>
    );
};

export default Project;
