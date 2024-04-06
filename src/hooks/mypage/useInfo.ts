import { ChangeEvent, useEffect } from "react";

import usePortfolioInfo from "@/store/portfolioInfoStore";
import useProjects from "@/store/projectStore";

import { supabaseInsert, supabasePortfolioUpdate } from "@/util/supabase/portfolioInfo_supabase_DB";
import { imageUrl, storageInsert } from "@/util/supabase/supabse_storage";
import useUser from "@/store/userStore";

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
    const { user, portfolio } = useUser();
    const { projects } = useProjects();

    useEffect(() => {
        if (portfolio) {
            setName(portfolio.name!);
            setProfile(portfolio.profileImage!);
            setBirthday(portfolio.birthday!);
            setTel(portfolio.tel!);
            setSchool(portfolio.school!);
            setClass(portfolio.class!);
            setJob(portfolio.job!);
            setIntroduce(portfolio.introduce!);
            setBlog(portfolio.blogLink!);
            setGithub(portfolio.githubLink!);
        }
    }, [
        portfolio,
        setName,
        setProfile,
        setBirthday,
        setTel,
        setSchool,
        setClass,
        setJob,
        setIntroduce,
        setBlog,
        setGithub,
    ]);

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
        let url = "";

        const { imageFile, ...info } = basicInfo;
        if (!basicInfo.profileImage) {
            alert("프로필 이미지를 선택해주시기 바랍니다.");
            return;
        }

        // 이미지 파일이 있을 경우 스토리지에 저장 및 url 저장
        if (basicInfo.imageFile) {
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
                url = imageUrl(STORAGE.bucket, image!.path);
            } catch (error) {
                console.error(error);
                return error;
            }
        }

        if (user && !portfolio) {
            try {
                const newPortfolio = { ...info, userId: user.id, profileImage: url, project: projects };
                await supabaseInsert(newPortfolio);
                alert("이력서가 저장되었습니다.");
                return;
            } catch (error) {
                console.error(error);
                return error;
            }
        }

        if (portfolio) {
            let newPortfolio = { ...info, userId: user!.id, project: projects };

            try {
                if (url) {
                    newPortfolio = { ...info, userId: user!.id, profileImage: url, project: projects };
                }
                await supabasePortfolioUpdate(newPortfolio, user!.id);
                alert("이력서가 업데이트 되었습니다.");
                return;
            } catch (error) {
                alert("데이터를 업데이트 하지 못 했습니다.");
                return error;
            }
        }

        const newPortfolio = { ...info, profileImage: url, project: projects };
        localStorage.setItem("portfolio", JSON.stringify(newPortfolio));
    };

    return {
        user,
        portfolio,
        basicInfo,
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
