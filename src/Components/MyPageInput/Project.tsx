"use client";

import useProject from "@/hooks/mypage/useProject";

const Project = () => {
    const {
        projectName,
        introduce,
        selected,
        selectList,
        onChangeProjectNameHandler,
        onChangeImagesHandler,
        onChangeIntroduceHandler,
        onChangeSelectHandler,
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
                        <div>파일 업로드하기</div>
                    </label>
                    <input type="file" id="file" onChange={onChangeImagesHandler} className="hidden" multiple />
                </div>
                <div>
                    <label>소개: </label>
                    <input type="text" value={introduce} onChange={onChangeIntroduceHandler} maxLength={100} />
                </div>
                <div>
                    <label>프로젝트 기간: </label>
                    <input type="date" /> ~ <input type="date" />
                </div>
                <div>
                    <label>블로그: </label>
                    <input type="url" />
                </div>
                <div>
                    <label>Github: </label>
                    <input type="url" />
                </div>
                <select value={selected} onChange={onChangeSelectHandler}>
                    {selectList.map((item) => {
                        return (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
};

export default Project;
