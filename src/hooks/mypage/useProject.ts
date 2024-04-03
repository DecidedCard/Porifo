import { ChangeEvent, useEffect } from "react";

import useInput from "../useInput";
import useProjects from "@/store/projectStore";

import { imageUrl, storageInsert } from "@/util/supabase/supabse_storage";

const useProject = () => {
    const [startDate, onChangeStartDateHandler, setStartDate] = useInput();
    const [endDate, onChangeEndDateHandler, setEndDate] = useInput();

    const {
        project,
        setProjectDate,
        setProjectDeployLink,
        setProjectGithubLink,
        setProjectImage,
        setProjectIntroduce,
        setProjectName,
        setProjects,
    } = useProjects();

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
        const PROJECT_STORAGE = {
            bucket: "projectImage",
            path: `project/${crypto.randomUUID()}`,
        };
        const fileArray = Array.prototype.slice.call(e.target.files);
        const imagesUrl = fileArray.map(async (item) => {
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
        setProjectImage(res);
    };

    const onClickInsertHandler = async () => {
        setProjects(project);
        setProjectDate("");
        setProjectDeployLink("");
        setProjectGithubLink("");
        setProjectImage([]);
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
    };
};

export default useProject;
