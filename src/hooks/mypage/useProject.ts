import { ChangeEvent, useState } from "react";
import useInput from "../useInput";

const useProject = () => {
    const [images, setImages] = useState<FileList>();
    const [introduce, onChangeIntroduceHandler] = useInput();
    const [selected, setSelected] = useState("직무 선택");
    const [projectName, onChangeProjectNameHandler] = useInput();

    const selectList = [
        { value: "default", name: "직무 선택" },
        { value: "프론트앤드 개발자", name: "프론트앤드 개발자" },
        { value: "서버/백앤드 개발자", name: "서버/백앤드 개발자" },
        { value: "웹 풀스택 개발자", name: "웹 풀스택 개발자" },
        { value: "앱 개발자 개발자", name: "앱 개발자 개발자" },
        { value: "머신러닝/인공지능 개발자", name: "머신러닝/인공지능 개발자" },
        { value: "데이터 엔지니어 개발자", name: "데이터 엔지니어 개발자" },
        { value: "def게임 개발자ault", name: "게임 개발자" },
        { value: "DevOps 개발자", name: "DevOps 개발자" },
        { value: "SW/솔루션 엔지니어", name: "SW/솔루션 엔지니어" },
        { value: "정보보안 엔지니어", name: "정보보안 엔지니어" },
        { value: "QA 엔지니어", name: "QA 엔지니어" },
        { value: "기타", name: "기타" },
    ];

    const onChangeImagesHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setImages(e.target.files!);
    };

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };

    return {
        introduce,
        selected,
        selectList,
        projectName,
        onChangeProjectNameHandler,
        onChangeImagesHandler,
        onChangeIntroduceHandler,
        onChangeSelectHandler,
    };
};

export default useProject;
