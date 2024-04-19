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
            <main className="flex justify-center bg-white rounded-2xl mt-20 ml-[75px] w-[705px] min-h-[817px] pb-10">
                <div className="flex flex-col gap-4">
                    <h1 className="flex items-center w-[657px] h-[46px] text-[30px] mt-4 font-bold tracking-wider">
                        프로젝트
                    </h1>
                    <hr className="w-[657px] mx-auto my-1 border border-neutral-100" />
                    <p className="flex items-center w-[657px] h-[38px] text-xl font-medium">프로젝트 정보</p>

                    {projects &&
                        projects.map((item, projectsIndex) => {
                            return (
                                <div key={projectsIndex} className="flex flex-col gap-5 mt-4">
                                    {projects.length >= 2 && (
                                        <div className="w-[637px]" onClick={() => onClickMinusHandler(projectsIndex)}>
                                            <MdClose className="w-6 h-6 ml-auto text-grayblack" />
                                        </div>
                                    )}
                                    <div className="flex mt-1">
                                        <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                                            기본정보<span className="ml-1 text-[10px] text-red-500">★</span>
                                        </label>
                                        <div className="w-[460px] ml-3">
                                            <Input
                                                type="text"
                                                size="big"
                                                placeholder="프로젝트명"
                                                maxLength={100}
                                                value={item.name}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    onChangeProjectName(e, projectsIndex)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="flex mt-1">
                                        <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                                            내용<span className="ml-1 text-[10px] text-red-500">★</span>
                                        </label>
                                        <div className="flex flex-col gap-1 w-[460px] ml-3 text-[14px]">
                                            <textarea
                                                placeholder="프로젝트의 내용과 본인의 역할, 기여도 등을 서술해 주세요"
                                                maxLength={300}
                                                value={item.introduce}
                                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                                    onChangeProjectIntroduce(e, projectsIndex)
                                                }
                                                className="w-[460px] h-[140px] resize-none rounded-lg py-3 px-3 border border-solid border-zinc-300"
                                            />
                                            <div className="ml-auto text-sm text-nonegray">
                                                {item.introduce.length}/300
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mt-1">
                                        <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                                            프로젝트 기간<span className="ml-1 text-[10px] text-red-500">★</span>
                                        </label>
                                        <div className="flex justify-between w-[460px] ml-3">
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
                                    <div className="flex mt-1">
                                        <p className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                                            사진 업로드 하기
                                        </p>
                                        <div className="flex flex-col gap-4 items-center border border-solid border-zinc-300 w-[460px] h-[200px] rounded-lg ml-3 overflow-scroll">
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
                                                        <div className="flex items-center justify-center w-8 h-8 border border-solid border-zinc-300 rounded-full text-2xl text-zinc-300 cursor-pointer">
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
                                            accept="image/png, image/jpeg"
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                onChangeImagesHandler(e, projectsIndex);
                                            }}
                                            className="hidden"
                                            multiple
                                        />
                                    </div>
                                    <div className="flex mt-1">
                                        <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                                            Github
                                        </label>
                                        <div className="w-[460px] ml-3">
                                            <Input
                                                type="url"
                                                size="big"
                                                placeholder="http://"
                                                maxLength={200}
                                                value={projects[projectsIndex].githubLink}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    onChangeProjectGithubLink(e, projectsIndex)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mt-1">
                                        <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                                            베포링크
                                        </label>
                                        <div className="w-[460px] ml-3">
                                            <Input
                                                type="url"
                                                size="big"
                                                placeholder="http://"
                                                maxLength={200}
                                                value={projects[projectsIndex].deployLink}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    onChangeProjectDeployLink(e, projectsIndex)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    <div
                        onClick={onClickAddHandler}
                        className="flex items-center justify-center rounded-full border-2 border-solid border-gray2 text-gray3 w-[32px] h-[32px] font-extralight pb-1 mt-1 text-3xl mx-auto cursor-pointer"
                    >
                        +
                    </div>
                </div>
            </main>
        </>
    );
};

export default Project;
