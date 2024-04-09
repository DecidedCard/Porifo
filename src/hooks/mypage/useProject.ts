import { ChangeEvent, LegacyRef, RefAttributes, useEffect, useRef } from "react";

import useInput from "../useInput";

import { imageUrl, storageInsert } from "@/util/supabase/supabse_storage";
import useProjectsStore from "@/store/projectStore";
import { projectInputFormValidation } from "@/util/input_form_validation";

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
        setProjects,
    } = useProjectsStore();

    const onChangeProjectName = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        console.log(e);
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

    // 이미지 스토리지 저장 및 url 변환 images state에 저장
    const onChangeImagesHandler = async (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const fileList = e.target.files;

        if (fileList!.length + projects[index].images.length > 3) {
            alert("사진은 최대 3장이 최대입니다.");
            return;
        }
        const fileArray: File[] = Array.prototype.slice.call(fileList);
        const url = fileArray.map((item: File) => {
            const blob = new Blob([item]);
            const url = URL.createObjectURL(blob);
            return url;
        });
        setProjectImages([...projects[index].images, ...url], index);
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

    // const onClickInsertHandler = async () => {
    //     const { imagesFile, ...info } = project;

    //     if (projectInputFormValidation(info)) return;

    //     const PROJECT_STORAGE = {
    //         bucket: "projectImage",
    //         path: `project/${crypto.randomUUID()}`,
    //     };

    //     const imagesUrl = project.imagesFile!.map(async (item) => {
    //         try {
    //             const res = await storageInsert(PROJECT_STORAGE.bucket, `${PROJECT_STORAGE.path}/${item.name}`, item);
    //             const url = imageUrl(PROJECT_STORAGE.bucket, res!.path);
    //             return url;
    //         } catch (error) {
    //             console.log(error);
    //             return error;
    //         }
    //     });
    //     const res = (await Promise.all(imagesUrl)) as string[];
    //     setProjects({ ...info, images: res });
    //     setStartDate("");
    //     setEndDate("");
    // };

    return {
        projects,
        fileRef,
        onChangeProjectName,
        onChangeImagesHandler,
        onChangeProjectIntroduce,
        onChangeProjectDate,
        onChangeProjectDeployLink,
        onChangeProjectGithubLink,
        // onClickInsertHandler,
        onClickDeleteImage,
    };
};

export default useProject;
