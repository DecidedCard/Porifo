import { ChangeEvent, useEffect } from "react";

import useInput from "../useInput";

import { imageUrl, storageInsert } from "@/util/supabase/supabse_storage";
import useProjectsStore from "@/store/projectStore";

const useProject = () => {
    const [startDate, onChangeStartDateHandler, setStartDate] = useInput();
    const [endDate, onChangeEndDateHandler, setEndDate] = useInput();

    const {
        project,
        setProjectDate,
        setProjectDeployLink,
        setProjectGithubLink,
        setProjectImages,
        setProjectImagesFile,
        setProjectIntroduce,
        setProjectName,
        setProjects,
    } = useProjectsStore();

    useEffect(() => {
        setProjectDate(`${startDate} ~ ${endDate}`);
    }, [setProjectDate, startDate, endDate]);

    const onChangeProjectName = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectName(e.target.value);
    };

    const onChangeProjectIntroduce = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectIntroduce(e.target.value);
    };

    const onChangeProjectDeployLink = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectDeployLink(e.target.value);
    };

    const onChangeProjectGithubLink = (e: ChangeEvent<HTMLInputElement>) => {
        setProjectGithubLink(e.target.value);
    };

    // 이미지 스토리지 저장 및 url 변환 images state에 저장
    const onChangeImagesHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        console.log(project.images.length);

        if (fileList!.length + project.images.length > 5) {
            alert("사진은 최대 5장이 최대입니다.");
            return;
        }
        const fileArray: File[] = Array.prototype.slice.call(fileList);
        const url = fileArray.map((item: File) => {
            const blob = new Blob([item]);
            const url = URL.createObjectURL(blob);
            return url;
        });
        setProjectImages([...project.images, ...url]);
        setProjectImagesFile([...project.imagesFile!, ...fileArray]);
    };

    const onClickDeleteImage = () => {
        setProjectImages([]);
        setProjectImagesFile([]);
    };

    const onClickInsertHandler = async () => {
        const PROJECT_STORAGE = {
            bucket: "projectImage",
            path: `project/${crypto.randomUUID()}`,
        };

        const imagesUrl = project.imagesFile!.map(async (item) => {
            try {
                const res = await storageInsert(PROJECT_STORAGE.bucket, `${PROJECT_STORAGE.path}/${item.name}`, item);
                const url = imageUrl(PROJECT_STORAGE.bucket, res!.path);
                return url;
            } catch (error) {
                console.log(error);
                return error;
            }
        });
        const res = (await Promise.all(imagesUrl)) as string[];
        const { imagesFile, ...info } = project;
        setProjects({ ...info, images: res });
        setProjectDate("");
        setProjectDeployLink("");
        setProjectGithubLink("");
        setProjectImages([]);
        setProjectIntroduce("");
        setProjectName("");
        setStartDate("");
        setEndDate("");
    };

    return {
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
    };
};

export default useProject;
