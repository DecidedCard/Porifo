"use client";

import useProject from "@/hooks/myPage/useProject";

const Project = () => {
    const {
        projectName,
        introduce,
        startDate,
        endDate,
        deployLink,
        githubLink,
        onChangeProjectNameHandler,
        onChangeImagesHandler,
        onChangeIntroduceHandler,
        onChangeStartDateHandler,
        onChangeEndDateHandler,
        onChangeDeployLinkHandler,
        onChangeGithubLinkHandler,
        onClickInsertHandler,
    } = useProject();

    return (
        <>
            <div>
                <div>
                    <label>프로젝트 이름: </label>
                    <input type="text" value={projectName} onChange={onChangeProjectNameHandler} />
                </div>
                <div>
                    <label htmlFor="file">
                        <div>사진 업로드하기</div>
                    </label>
                    <input type="file" id="file" onChange={onChangeImagesHandler} className="hidden" multiple />
                </div>
                <div>
                    <label>소개: </label>
                    <input type="text" value={introduce} onChange={onChangeIntroduceHandler} maxLength={100} />
                </div>
                <div>
                    <label>프로젝트 기간: </label>
                    <input type="date" value={startDate} onChange={onChangeStartDateHandler} /> ~{" "}
                    <input type="date" value={endDate} onChange={onChangeEndDateHandler} />
                </div>
                <div>
                    <label>베포링크: </label>
                    <input type="url" value={deployLink} onChange={onChangeDeployLinkHandler} />
                </div>
                <div>
                    <label>Github: </label>
                    <input type="url" value={githubLink} onChange={onChangeGithubLinkHandler} />
                </div>
                <div onClick={onClickInsertHandler} className="text-4xl cursor-pointer w-fit">
                    +
                </div>
            </div>
        </>
    );
};

export default Project;
