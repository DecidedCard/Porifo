import { ChangeEvent, useState } from "react";

import useInput from "../useInput";
import useProjects from "@/store/projectStore";

import { imageUrl, storageInsert } from "@/util/supabase/supabse_storage";

import type { Project } from "@/types/project";

const useProject = () => {
    const [introduce, onChangeIntroduceHandler] = useInput();
    const [projectName, onChangeProjectNameHandler] = useInput();
    const [startDate, onChangeStartDateHandler] = useInput();
    const [endDate, onChangeEndDateHandler] = useInput();
    const [deployLink, onChangeDeployLinkHandler] = useInput();
    const [githubLink, onChangeGithubLinkHandler] = useInput();

    const [images, setImages] = useState<string[]>([]);

    const { setProjects } = useProjects();

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
                setImages((state) => [...state, url]);
            } catch (error) {
                console.log(error);
                return error;
            }
        });
        await Promise.all(imagesUrl);
    };

    const onClickInsertHandler = async () => {
        const newProject: Project = {
            name: projectName,
            image: images,
            introduce,
            date: `${startDate} ~ ${endDate}`,
            deployLink: deployLink,
            githubLink: githubLink,
        };
        setProjects(newProject);
    };

    return {
        introduce,
        projectName,
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
    };
};

export default useProject;
