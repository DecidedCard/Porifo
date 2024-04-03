import { ChangeEvent, useState } from "react";

import usePortfolioInfo from "@/store/portfolioInfoStore";
import useProjects from "@/store/projectStore";

import { supabaseInsert } from "@/util/supabase/supabase_DB";
import { imageUrl, storageInsert } from "@/util/supabase/supabse_storage";

const useInfo = () => {
    const {
        basicInfo,
        setName,
        setProfile,
        setImageFile,
        setBirthday,
        setTel,
        setSchool,
        setClass,
        setJob,
        setIntroduce,
        setBlog,
        setGithub,
    } = usePortfolioInfo();
    const { projects } = useProjects();

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

    // 스토어 적용 onChangeHandler
    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onChangeProfileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files![0];
        // 이미지 미리보기
        const blob = new Blob([imageFile]);
        const url = URL.createObjectURL(blob);

        setProfile(url);

        setImageFile(e.target.files![0]);
    };

    const onChangeBirthdayHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value);
    };

    const onChangeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value);
    };

    const onChangeSchoolHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSchool(e.target.value);
    };

    const onChangeClassHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setClass(e.target.value);
    };

    const onChangeIntroduceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIntroduce(e.target.value);
    };

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setJob(e.target.value);
    };

    const onChangeBlogHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBlog(e.target.value);
    };

    const onChangeGithubHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setGithub(e.target.value);
    };

    const onClickInsertHandler = async () => {
        const { imageFile, ...info } = basicInfo;
        if (!basicInfo.imageFile) {
            alert("프로필 이미지를 선택해주시기 바랍니다.");
            return;
        }

        const STORAGE = {
            bucket: "portfolioProfile",
            path: `profile/${crypto.randomUUID()}`,
        };

        try {
            const image = await storageInsert(
                STORAGE.bucket,
                `${STORAGE.path}/${basicInfo.imageFile.lastModified}`,
                basicInfo.imageFile!,
            );
            const url = imageUrl(STORAGE.bucket, image!.path);
            const newPortfolio = { ...info, profileImage: url, project: projects };
            await supabaseInsert(newPortfolio);
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    return {
        basicInfo,
        selectList,
        onChangeNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeIntroduceHandler,
        onChangeSelectHandler,
        onChangeBlogHandler,
        onChangeGithubHandler,
        onClickInsertHandler,
    };
};

export default useInfo;
