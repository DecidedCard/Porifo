import { ChangeEvent, useEffect, useState } from "react";

import useSetMutation from "../useSetMutation";

import useUserStore from "@/store/userStore";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";
import useProjectsStore from "@/store/projectStore";
import useCareerStore from "@/store/careerStore";

import { supabaseInsert, supabasePortfolioUpdate } from "@/util/supabase/portfolioInfo_supabase_DB";
import { imageUrl, storageInsert } from "@/util/supabase/supabase_storage";
import { portfolioInputFormValidation } from "@/util/input_form_validation";
import { QUERY_KEY } from "@/util/query_key";

const useInfo = () => {
    const {
        basicInfo,
        setName,
        setEngName,
        setProfile,
        setImageFile,
        setBirthday,
        setEmail,
        setJob,
        setOneLineIntroduce,
        setIntroduce,
        setSkillTag,
        setBlog,
        setGithub,
    } = usePortfolioInfoStore();
    const { user, portfolio, setPortfolio } = useUserStore();
    const { projects } = useProjectsStore();
    const { careers } = useCareerStore();
    const [disabled, setDisabled] = useState(true);
    const [emailCheck, setEmailCheck] = useState<{ color: string; helperText: string } | null>(null);
    const { mutate: insert } = useSetMutation(supabaseInsert, [QUERY_KEY.myPagePortfolio]);
    const { mutate: update } = useSetMutation(supabasePortfolioUpdate, [QUERY_KEY.myPagePortfolio]);

    const portfolioPreview = { ...basicInfo, project: projects, career: careers };

    // 처음로딩시 작성한 포트폴리오가 있으면 가져온 데이터를 기반으로 초기화

    useEffect(() => {
        const { imageFile, ...info } = basicInfo;
        if (portfolioInputFormValidation({ ...info, project: projects, career: careers })) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [basicInfo, careers, projects]);

    useEffect(() => {
        const localStorageItem = JSON.parse(localStorage.getItem("portfolio")!);
        if (user && !portfolio && localStorageItem) {
            setPortfolio(localStorageItem);
        }
    }, [portfolio, setPortfolio, user]);

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

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const regex = /[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*/;
        if (regex.test(e.target.value)) {
            setEmailCheck(null);
        } else {
            setEmailCheck({ color: "error", helperText: "이메일을 정확하게 입력해주시기 바랍니다." });
        }
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

    const onClickSkillTagHandler = (item: string) => {
        const skillTag = basicInfo.skillTag as string[];
        setSkillTag([...skillTag, item]);
    };

    const onClickSkillTagDeleteHandler = (item: string) => {
        const skillTag = basicInfo.skillTag as string[];

        const idx = skillTag.indexOf(item);
        const skillTagCopy = [...skillTag];
        skillTagCopy.splice(idx, 1);
        setSkillTag(skillTagCopy);
    };

    // 조건에 따라 로컬스토리지 또는 supabase 등록 및 업데이트
    const onClickInsertHandler = async () => {
        let url = "";

        const { imageFile, ...info } = basicInfo;
        if (portfolioInputFormValidation({ ...info, project: projects, career: careers })) return;

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

        if (user && !portfolio?.id) {
            let newPortfolio = { ...info, userId: user!.id, project, career: careers };
            const { ...newPortfolioInfo } = newPortfolio;

            if (
                careers.length === 0 ||
                !careers[0].comment ||
                !careers[0].company ||
                !careers[0].date ||
                !careers[0].department ||
                !careers[0].position
            ) {
                newPortfolio = { ...newPortfolioInfo, career: [] };
            }

            if (url) {
                newPortfolio = {
                    ...newPortfolioInfo,
                    profileImage: url,
                };
            }

            insert(newPortfolio);
            localStorage.removeItem("portfolio");
            alert("이력서가 저장되었습니다.");
            return;
        }

        if (portfolio?.id) {
            let newPortfolio = { ...info, userId: user!.id, project, career: careers };
            const { ...newPortfolioInfo } = newPortfolio;

            if (
                careers.length === 0 ||
                !careers[0].comment ||
                !careers[0].company ||
                !careers[0].date ||
                !careers[0].department ||
                !careers[0].position ||
                !careers
            ) {
                newPortfolio = { ...newPortfolioInfo, career: [] };
            }

            if (url) {
                newPortfolio = {
                    ...newPortfolioInfo,
                    profileImage: url,
                };
            }
            update({ arg: newPortfolio, value: user!.id });
            alert("이력서가 업데이트 되었습니다.");
            localStorage.removeItem("portfolio");

            return;
        }

        let newPortfolio = { ...info, profileImage: url, project, career: careers };
        const { ...newPortfolioInfo } = newPortfolio;
        if (
            careers.length === 0 ||
            !careers[0].comment ||
            !careers[0].company ||
            !careers[0].date ||
            !careers[0].department ||
            !careers[0].position ||
            !careers
        ) {
            newPortfolio = { ...newPortfolioInfo, career: [] };
        }
        localStorage.setItem("portfolio", JSON.stringify(newPortfolio));
    };

    const onClickShareToggle = () => {
        const { imageFile, ...info } = portfolio!;
        const share = { ...info, share: !basicInfo.share };
        update({ arg: share, value: user!.id });
        if (!basicInfo.share) {
            alert("피드에 공유 되었습니다.");
        } else {
            alert("피드에 공유를 중지했습니다.");
        }
    };

    return {
        user,
        portfolio,
        basicInfo,
        careers,
        portfolioPreview,
        disabled,
        emailCheck,
        onChangeNameHandler,
        onChangeEngNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeEmailHandler,
        onChangeOneLineIntroduce,
        onChangeIntroduceHandler,
        onChangeSelectHandler,
        onChangeBlogHandler,
        onChangeGithubHandler,
        onClickSkillTagHandler,
        onClickSkillTagDeleteHandler,
        onClickInsertHandler,
        onClickShareToggle,
    };
};

export default useInfo;
