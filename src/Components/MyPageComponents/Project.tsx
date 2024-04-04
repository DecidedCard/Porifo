"use client";

import useProject from "@/hooks/mypage/useProject";
import Image from "next/image";

const Project = () => {
    const {
        project,
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
        <>
            <div>
                <div>
                    <label>프로젝트 이름: </label>
                    <input type="text" value={project.name} onChange={onChangeProjectName} />
                </div>
                <div>
                    {/* 사진 제한 5장 */}
                    <label htmlFor="file">
                        <div>사진 업로드하기</div>
                    </label>
                    <input type="file" id="file" onChange={onChangeImagesHandler} className="hidden" multiple />
                </div>
                <button onClick={onClickDeleteImage}>이미지 지우기</button>
                <div>
                    {project.images &&
                        project.images.map((item, idx) => {
                            return <Image key={idx} src={item} alt="프로젝트 미리보기" width={100} height={100} />;
                        })}
                </div>
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
        </>
    );
};

export default Project;
