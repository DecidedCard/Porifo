import { ChangeEvent, useEffect } from "react";

import { supabaseInsert, supabasePortfolioUpdate } from "@/util/supabase/portfolioInfo_supabase_DB";
import { imageUrl, storageInsert } from "@/util/supabase/supabse_storage";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";
import useUserStore from "@/store/userStore";
import useProjectsStore from "@/store/projectStore";
import { portfolioInputFormValidation } from "@/util/input_form_validation";

const useInfo = () => {
    const {
        basicInfo,
        setName,
        setEngName,
        setProfile,
        setImageFile,
        setBirthday,
        setTel,
        setEmail,
        setSchool,
        setClass,
        setJob,
        setIntroduce,
        setBlog,
        setGithub,
        setProject,
    } = usePortfolioInfoStore();
    const { user, portfolio } = useUserStore();
    const { projects } = useProjectsStore();

    useEffect(() => {
        if (portfolio) {
            setName(portfolio.name!);
            setEngName(portfolio.englishName!);
            setProfile(portfolio.profileImage!);
            setBirthday(portfolio.birthday!);
            setTel(portfolio.tel!);
            setEmail(portfolio.email!);
            setSchool(portfolio.school!);
            setClass(portfolio.class!);
            setJob(portfolio.job!);
            setIntroduce(portfolio.introduce!);
            setBlog(portfolio.blogLink!);
            setGithub(portfolio.githubLink!);
            setProject(JSON.parse(JSON.stringify(portfolio.project!)));
        }
    }, [
        portfolio,
        setName,
        setEngName,
        setProfile,
        setBirthday,
        setTel,
        setEmail,
        setSchool,
        setClass,
        setJob,
        setIntroduce,
        setBlog,
        setGithub,
        setProject,
    ]);

    // 스토어 적용 onChangeHandler
    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onChangeEngNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEngName(e.target.value);
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

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
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

        if (portfolioInputFormValidation(info)) return;

        if (basicInfo.imageFile) {
            // 이미지 파일이 있을 경우 스토리지에 저장 및 url 저장
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
        onChangeEngNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeEmailHandler,
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
