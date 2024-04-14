"use client";

import { ChangeEvent } from "react";

import useProject from "@/hooks/mypage/useProject";
import Input from "../Commen/Input";

import Image from "next/image";

import { MdClose } from "react-icons/md";

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
        onClickAddHandler,
        onClickMinusHandler,
        onClickDeleteImage,
    } = useProject();

    return (
        <>
            <main className="flex flex-col gap-4 bg-white rounded-2xl mt-10 ml-9 w-[720px] pb-20">
                <h1 className="pl-6 pt-6 text-2xl font-bold tracking-wider">프로젝트</h1>

                <hr className="w-[657px] mx-auto border border-neutral-100" />

                <p className="flex justify-center text-xl font-medium">프로젝트 정보</p>
                {projects &&
                    projects.map((item, projectsIndex) => {
                        return (
                            <div key={projectsIndex} className="flex flex-col gap-5 mt-4">
                                {projects.length >= 2 && (
                                    <div className="w-[637px]" onClick={() => onClickMinusHandler(projectsIndex)}>
                                        <MdClose className="w-6 h-6 ml-auto text-grayblack" />
                                    </div>
                                )}
                                <div className="flex">
                                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">기본정보</label>
                                    <div className="w-[460px]">
                                        <Input
                                            type="text"
                                            size="big"
                                            placeholder="프로젝트명"
                                            value={item.name}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeProjectName(e, projectsIndex)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex">
                                    <p className="pl-6 font-medium text-zinc-500 w-[177px]">사진 업로드 하기</p>
                                    <div className="flex flex-col gap-4 items-center border border-solid border-zinc-300 w-[460px] h-[200px] rounded-lg overflow-scroll">
                                        {item.images.length !== 0 ? (
                                            <div>
                                                {item.images.map((item, idx) => {
                                                    return (
                                                        <div key={idx} className="relative group">
                                                            <div className="relative w-[435px] h-[100px] overflow-hidden">
                                                                <Image
                                                                    src={item}
                                                                    alt="프로젝트 이미지"
                                                                    width={600}
                                                                    height={100}
                                                                    className="absolute bottom-0"
                                                                />
                                                            </div>

                                                            <div className="absolute bottom-0 flex justify-end items-center w-[435px] h-[100px] pr-2 bg-black bg-opacity-20 invisible opacity-0 ease-in-out duration-300  group-hover:visible group-hover:opacity-100">
                                                                <p
                                                                    className="cursor-pointer text-white"
                                                                    onClick={() =>
                                                                        onClickDeleteImage(idx, projectsIndex)
                                                                    }
                                                                >
                                                                    X
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                                <label htmlFor={`file${projectsIndex}`}>
                                                    <div className="flex items-center justify-center w-10 h-10 border border-solid border-zinc-300 rounded-full text-2xl text-zinc-300 cursor-pointer mx-auto">
                                                        +
                                                    </div>
                                                </label>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full">
                                                <label htmlFor={`file${projectsIndex}`}>
                                                    <div className="flex items-center justify-center w-10 h-10 border border-solid border-zinc-300 rounded-full text-2xl text-zinc-300 cursor-pointer">
                                                        +
                                                    </div>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        ref={fileRef}
                                        type="file"
                                        name={`file${projectsIndex}`}
                                        id={`file${projectsIndex}`}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            onChangeImagesHandler(e, projectsIndex);
                                        }}
                                        className="hidden"
                                        multiple
                                    />
                                </div>

                                <div className="flex">
                                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">내용</label>
                                    <div className="w-[460px]">
                                        <Input
                                            type="text"
                                            size="big"
                                            placeholder="프로젝트의 내용과 본인의 역할, 기여도 등을 서술해 주세요"
                                            value={projects[projectsIndex].introduce}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeProjectIntroduce(e, projectsIndex)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex">
                                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">프로젝트 기간</label>
                                    <div className="flex justify-between w-[460px]">
                                        <div className="w-[224px]">
                                            <Input
                                                type="date"
                                                size="big"
                                                name="startDate"
                                                placeholder="YYYY.MM"
                                                value={item.date.slice(0, 10)}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    onChangeProjectDate(e, projectsIndex)
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
                                                    onChangeProjectDate(e, projectsIndex)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">베포링크</label>
                                    <div className="w-[460px]">
                                        <Input
                                            type="url"
                                            size="big"
                                            placeholder="http://"
                                            value={projects[projectsIndex].deployLink}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeProjectDeployLink(e, projectsIndex)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex">
                                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">Github</label>
                                    <div className="w-[460px]">
                                        <Input
                                            type="url"
                                            size="big"
                                            placeholder="http://"
                                            value={projects[projectsIndex].githubLink}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeProjectGithubLink(e, projectsIndex)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                <div
                    onClick={onClickAddHandler}
                    className="flex justify-center items-center text-2xl text-nonegray cursor-pointer w-8 h-8 mx-auto mt-10 border border-solid border-zinc-300 rounded-full"
                >
                    +
                </div>
            </main>
        </>
    );
};

export default Project;
