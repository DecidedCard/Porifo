import { ChangeEvent, useEffect } from "react";

import useUserStore from "@/store/userStore";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";
import useProjectsStore from "@/store/projectStore";
import useCareerStore from "@/store/careerStore";

import useInput from "../useInput";

import { supabaseInsert, supabasePortfolioUpdate } from "@/util/supabase/portfolioInfo_supabase_DB";
import { imageUrl, storageInsert } from "@/util/supabase/supabse_storage";
import { portfolioInputFormValidation } from "@/util/input_form_validation";

import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";
import useEducationStore from "@/store/educationStore";
import { Education } from "@/types/education";

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
        setJob,
        setOneLineIntroduce,
        setIntroduce,
        setBlog,
        setGithub,
    } = usePortfolioInfoStore();
    const { user, portfolio } = useUserStore();
    const { projects, setProjectsInitial } = useProjectsStore();
    const { careers, setInitialCareers } = useCareerStore();
    const { education, setInitialEducation } = useEducationStore();
    const [careerStartDate, onChangeCareerStartDate, setCareerStartDate] = useInput();
    const [careerEndDate, onChangeCareerEndDate, setCareerEndDate] = useInput();

    // 처음로딩시 작성한 포트폴리오가 있으면 가져온 데이터를 기반으로 초기화
    useEffect(() => {
        const career = basicInfo.career as Career[];
        if (
            !basicInfo.name &&
            !basicInfo.birthday &&
            !basicInfo.email &&
            !basicInfo.englishName &&
            !basicInfo.profileImage &&
            !basicInfo.tel &&
            !basicInfo.job &&
            !basicInfo.project &&
            career.length === 0 &&
            portfolio
        ) {
            const project = portfolio.project as Project[];
            if (project) {
                setProjectsInitial(project);
            }

            const career = portfolio.career as Career[];

            if (career) {
                setInitialCareers(career);
            }
            const education = portfolio.education as Education[];

            if (education) {
                setInitialEducation(education);
            }

            setName(portfolio.name!);
            setEngName(portfolio.englishName!);
            setProfile(portfolio.profileImage!);
            setBirthday(portfolio.birthday!);
            setTel(portfolio.tel!);
            setEmail(portfolio.email!);
            setJob(portfolio.job!);
            setOneLineIntroduce(portfolio.oneLineIntroduce!);
            setIntroduce(portfolio.introduce!);
            setBlog(portfolio.blogLink!);
            setGithub(portfolio.githubLink!);
        }
    }, [
        basicInfo,
        portfolio,
        setName,
        setEngName,
        setProfile,
        setBirthday,
        setTel,
        setEmail,
        setJob,
        setOneLineIntroduce,
        setIntroduce,
        setBlog,
        setGithub,
        setProjectsInitial,
        setInitialCareers,
        setInitialEducation,
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

    const onChangeOneLineIntroduce = (e: ChangeEvent<HTMLInputElement>) => {
        setOneLineIntroduce(e.target.value);
    };

    const onChangeIntroduceHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

    // 조건에 따라 로컬스토리지 또는 supabase 등록 및 업데이트
    const onClickInsertHandler = async () => {
        let url = "";

        const { imageFile, ...info } = basicInfo;

        if (portfolioInputFormValidation({ ...info, project: projects, career: careers, education })) return;

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

        // 프로젝트 이미지 파일이 있을경우 스토리지에 저장 및 url 변경 작성
        const imagesSetting = projects.map(async (item, idx) => {
            if (item.imagesFile?.length !== undefined && item.imagesFile?.length !== 0) {
                const PROJECT_STORAGE = {
                    bucket: "projectImage",
                    path: `project/${crypto.randomUUID()}/${idx}`,
                };

                const imagesUrl = item.imagesFile?.map(async (file) => {
                    try {
                        const res = await storageInsert(
                            PROJECT_STORAGE.bucket,
                            `${PROJECT_STORAGE.path}/${file.lastModified}`,
                            file,
                        );
                        const url = imageUrl(PROJECT_STORAGE.bucket, res!.path);
                        return url;
                    } catch (error) {
                        return error;
                    }
                });
                const res = (await Promise.all(imagesUrl!)) as string[];

                projects.map((port, index) => {
                    if (index === idx) {
                        return {
                            ...port,
                            images: port.images.splice(port.images.length - res.length, res.length, ...res),
                        };
                    } else {
                        return { ...port };
                    }
                });
            }
        });

        await Promise.all(imagesSetting);

        const project = projects.map((item) => {
            const { imagesFile, ...projectInfo } = item;
            return projectInfo;
        });

        if (user && !portfolio) {
            let newPortfolio = {
                ...info,
                userId: user.id,
                profileImage: url,
                project,
                career: careers,
                education,
            };

            try {
                await supabaseInsert(newPortfolio);
                alert("이력서가 저장되었습니다.");
                return;
            } catch (error) {
                console.error(error);
                return error;
            }
        }

        if (portfolio) {
            let newPortfolio = { ...info, userId: user!.id, project, career: careers, education };

            try {
                if (url) {
                    newPortfolio = {
                        ...info,
                        userId: user!.id,
                        profileImage: url,
                        project,
                        career: careers,
                        education,
                    };
                }
                await supabasePortfolioUpdate(newPortfolio, user!.id);
                alert("이력서가 업데이트 되었습니다.");
                return;
            } catch (error) {
                alert("데이터를 업데이트 하지 못 했습니다.");
                return error;
            }
        }

        const newPortfolio = { ...info, profileImage: url, project, career: careers, education };
        localStorage.setItem("portfolio", JSON.stringify(newPortfolio));
    };

    return {
        user,
        portfolio,
        basicInfo,
        careers,
        careerStartDate,
        careerEndDate,
        onChangeNameHandler,
        onChangeEngNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeEmailHandler,
        onChangeOneLineIntroduce,
        onChangeIntroduceHandler,
        onChangeSelectHandler,
        onChangeBlogHandler,
        onChangeGithubHandler,
        onChangeCareerStartDate,
        onChangeCareerEndDate,
        onClickInsertHandler,
    };
};

export default useInfo;
