import { ChangeEvent, useRef } from "react";

import useProjectsStore from "@/store/projectStore";

const useProject = () => {
    const fileRef = useRef<HTMLInputElement>(null);

    const {
        projects,
        setProjectDate,
        setProjectDeployLink,
        setProjectGithubLink,
        setProjectImages,
        setProjectImagesFile,
        setProjectIntroduce,
        setProjectName,
        setAddProjects,
        setMinusProjects,
    } = useProjectsStore();

    const onChangeProjectName = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setProjectName(e.target.value, index);
    };

    const onChangeProjectIntroduce = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setProjectIntroduce(e.target.value, index);
    };

    const onChangeProjectDate = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        if (name === "startDate") {
            const startDate = name === "startDate" && value;
            setProjectDate(`${startDate} ~ ${projects[index].date.slice(13)}`, index);
            return;
        }
        const endDate = name === "endDate" && value;
        setProjectDate(`${projects[index].date.slice(0, 10)} ~ ${endDate}`, index);
    };

    const onChangeProjectDeployLink = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setProjectDeployLink(e.target.value, index);
    };

    const onChangeProjectGithubLink = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setProjectGithubLink(e.target.value, index);
    };

    // 이미지 blob url 변환 및 파일 저장
    const onChangeImagesHandler = async (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const fileList = [...e.target.files!];
        fileRef.current!.value = "";

        if (fileList!.length + projects[index].images.length > 5) {
            alert("사진은 최대 5장이 최대입니다.");
            return;
        }

        const fileArray: File[] = Array.prototype.slice.call(fileList);
        const url = fileArray.map((item: File) => {
            const blob = new Blob([item]);
            const url = URL.createObjectURL(blob);
            return url;
        });
        setProjectImages([...projects[index].images, ...url], index);
        if (!projects[index].imagesFile!) {
            setProjectImagesFile([...fileArray], index);
            return;
        }
        setProjectImagesFile([...projects[index].imagesFile!, ...fileArray], index);
    };

    const onClickDeleteImage = (arg: number, index: number) => {
        const removeImages = [...projects[index].images];
        removeImages.splice(arg, 1);
        setProjectImages(removeImages, index);
        if (projects[index].imagesFile) {
            const removeImagesFile = [...projects[index].imagesFile!];
            removeImagesFile.splice(arg, 1);
            setProjectImagesFile(removeImagesFile, index);
        }
    };

    const onClickAddHandler = () => {
        setAddProjects();
    };

    const onClickMinusHandler = (arg: number) => {
        setMinusProjects(arg);
    };

    return {
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
    };
};

export default useProject;
