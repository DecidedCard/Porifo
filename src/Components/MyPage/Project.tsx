"use client";

import useProject from "@/hooks/mypage/useProject";
import Image from "next/image";
import Input from "../Commen/Input";
import Button from "../Commen/Button";

const Project = () => {
    const {
        project,
        fileRef,
        startDate,
        endDate,
        onChangeProjectName,
        onChangeImagesHandler,
        onChangeProjectIntroduce,
        onChangeStartDateHandler,
        onChangeEndDateHandler,
        onChangeProjectDeployLink,
        onChangeProjectGithubLink,
        onClickInsertHandler,
        onClickDeleteImage,
    } = useProject();

    return (
        <main className="bg-white rounded-2xl mt-10 ml-9 w-[720px] pb-20">
            <div>
                <h1 className="flex items-center justify-start pl-6 pt-6 text-2xl font-bold tracking-wider">
                    프로젝트
                </h1>
                <h2 className="pl-6 text-xl font-medium text-left relative flex items-center justify-start">
                    프로젝트 정보
                </h2>

                <div className="flex">
                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">기본정보</label>
                    <Input
                        type="text"
                        width={500}
                        size="big"
                        placeholder="프로젝트명"
                        value={project.name}
                        onChange={onChangeProjectName}
                    />
                </div>
                <div className="flex">
                    {/* 사진 제한 3장 */}
                    <p className="pl-6 font-medium text-zinc-500 w-[177px]">사진 업로드 하기</p>
                    <label htmlFor="file">
                        <div className="flex items-center justify-center border border-solid border-zinc-300 w-[500px] h-[200px] cursor-pointer">
                            {project.images.length !== 0 ? (
                                project.images.map((item, idx) => {
                                    return (
                                        <Image key={idx} src={item} alt="프로젝트 미리보기" width={100} height={100} />
                                    );
                                })
                            ) : (
                                <div className="flex items-center justify-center w-10 h-10 border border-solid border-zinc-300 rounded-full text-2xl text-zinc-300">
                                    +
                                </div>
                            )}
                        </div>
                    </label>

                    <input
                        ref={fileRef}
                        type="file"
                        id="file"
                        onChange={onChangeImagesHandler}
                        className="hidden"
                        multiple
                    />
                </div>
                <Button color="primary" width={200} text="이미지 지우기" onClick={onClickDeleteImage} />

                <div>
                    <label>소개: </label>
                    <input type="text" value={project.introduce} onChange={onChangeProjectIntroduce} maxLength={100} />
                </div>
                <div>
                    <label>프로젝트 기간: </label>
                    <input type="date" value={startDate} onChange={onChangeStartDateHandler} /> ~{" "}
                    <input type="date" value={endDate} onChange={onChangeEndDateHandler} />
                </div>
                <div>
                    <label>베포링크: </label>
                    <input type="url" value={project.deployLink} onChange={onChangeProjectDeployLink} />
                </div>
                <div>
                    <label>Github: </label>
                    <input type="url" value={project.githubLink} onChange={onChangeProjectGithubLink} />
                </div>
                <div onClick={onClickInsertHandler} className="text-4xl cursor-pointer w-fit">
                    +
                </div>
            </div>
        </main>
    );
};

export default Project;
