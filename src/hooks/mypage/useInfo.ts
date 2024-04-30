import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import useSetMutation from "../useSetMutation";
import useInput from "../useInput";

import useUserStore from "@/store/userStore";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";
import useProjectsStore from "@/store/projectStore";
import useCareerStore from "@/store/careerStore";

import { supabaseInsert, supabasePortfolioUpdate } from "@/util/supabase/portfolioInfo_supabase_DB";
import { imageUrl, storageInsert } from "@/util/supabase/supabase_storage";
import { portfolioInputFormValidation } from "@/util/input_form_validation";
import { QUERY_KEY } from "@/util/query_key";
import { userUpdate } from "@/util/supabase/supabase_user";
import { infoNotify, successNotify, warnNotify } from "@/util/toast";
import { SKILL_TAG } from "@/util/skill_tag";
import { getFormattedDate } from "@/util/getformatDate";

import type { PortfolioInfo } from "@/types/PortfolioInfo";
import type { Project } from "@/types/Project";
import type { Career } from "@/types/Career";

const useInfo = () => {
    const {
        basicInfo,
        setName,
        setEngName,
        setProfile,
        setImageFile,
        setBirthday,
        setEmail,
        setTel,
        setJob,
        setOneLineIntroduce,
        setIntroduce,
        setSkillTag,
        setBlog,
        setGithub,
        setInitialBasicInfo,
    } = usePortfolioInfoStore();
    const { user, portfolio, setPortfolio } = useUserStore();
    const { projects, setProjectsInitial } = useProjectsStore();
    const { careers, setInitialCareers } = useCareerStore();
    const [skillTagInput, onChangeSkillTagInputHandler, setSkillTagInput] = useInput();
    const [skill_tag, setSkill_Tag] = useState<string[]>([]);
    const [disabled, setDisabled] = useState(true);
    const [upload, setUpload] = useState(false);
    const [emailCheck, setEmailCheck] = useState<{ color: string; helperText: string } | null>(null);
    const { mutate: insert } = useSetMutation(supabaseInsert, [QUERY_KEY.myPagePortfolio]);
    const { mutate: update } = useSetMutation(supabasePortfolioUpdate, [QUERY_KEY.myPagePortfolio]);
    const localStorageItemRef = useRef<PortfolioInfo | null>(null);

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
        if (localStorageItemRef.current && !portfolio) {
            const project = localStorageItemRef.current.project as unknown as Project[];
            const career = localStorageItemRef.current.career as Career[];

            setPortfolio(localStorageItemRef.current);
            setInitialBasicInfo(localStorageItemRef.current);
            setProjectsInitial([...project]);
            setInitialCareers([...career]);
        }
    }, [
        localStorageItemRef,
        portfolio,
        setPortfolio,
        user,
        setInitialBasicInfo,
        setProjectsInitial,
        setInitialCareers,
    ]);

    useEffect(() => {
        if (user && !portfolio) {
            const birthDate = new Date(
                user.user_metadata.birthDate.replace("년", "-").replace("월", "-").replace("일", ""),
            );
            const formatBirthDay = getFormattedDate(birthDate)
                .replace(" ", "")
                .replace(" ", "")
                .replace(".", "-")
                .replace(".", "-")
                .replace(".", "");
            setBirthday(formatBirthDay);
            setName(user.user_metadata.name || user.user_metadata.user_name);
            if (user.user_metadata.phoneNumber) {
                setTel(user.user_metadata.phoneNumber);
            }
            setEmail(user.user_metadata.email);
        }
    }, [user, portfolio, setBirthday, setName, setTel, setEmail]);

    useEffect(() => {
        const skillTag = SKILL_TAG.filter((item) => item.toLowerCase().includes(skillTagInput.toLowerCase()));
        setSkill_Tag(skillTag);
    }, [skillTagInput]);

    useEffect(() => {
        const localStorageItem = JSON.parse(localStorage.getItem("portfolio")!) as PortfolioInfo;
        if (localStorageItem) {
            localStorageItemRef.current = localStorageItem;
        }
    }, []);

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

    const onChangeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value);
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

        if (skillTag.find((skillTag) => skillTag === item)) {
            warnNotify({ title: "중복입력이 불가능합니다." });
            return;
        }
        setSkillTag([...skillTag, item]);
    };

    const onSubmitSkillTagHandler = (e: FormEvent<HTMLFormElement>, item: string) => {
        e.preventDefault();
        if (!skillTagInput) {
            warnNotify({ title: "내용을 입력해주시기 바랍니다." });
            return;
        }
        onClickSkillTagHandler(item);
        setSkillTagInput("");
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
        setUpload(true);
        infoNotify({ title: "저장 중 입니다." });

        let url = "";

        const { imageFile, ...info } = basicInfo;

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

        let newPortfolio = { ...info, project, career: careers };

        if (
            careers.length === 0 ||
            !careers[0].comment ||
            !careers[0].company ||
            !careers[0].date ||
            !careers[0].department ||
            !careers[0].position
        ) {
            newPortfolio = { ...newPortfolio, career: [] };
        }

        if (url) {
            await userUpdate({ profileImage: url });
            newPortfolio = {
                ...newPortfolio,
                profileImage: url,
            };
        }

        if (user && !portfolio?.id) {
            newPortfolio = { ...newPortfolio, userId: user!.id };

            insert(newPortfolio);
            localStorage.removeItem("portfolio");
            successNotify({ title: "포트폴리오가 저장되었습니다." });
            setUpload(false);
            return;
        }

        if (portfolio?.id) {
            update({ arg: newPortfolio, value: user!.id });
            successNotify({ title: "포트폴리오가 업데이트 되었습니다." });
            localStorage.removeItem("portfolio");
            setUpload(false);
            return;
        }

        localStorage.setItem("portfolio", JSON.stringify(newPortfolio));
        setUpload(false);
        successNotify({ title: "포트폴리오가 저장되었습니다." });
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
        upload,
        emailCheck,
        skillTagInput,
        skill_tag,
        onChangeNameHandler,
        onChangeEngNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeEmailHandler,
        onChangeTelHandler,
        onChangeOneLineIntroduce,
        onChangeIntroduceHandler,
        onChangeSelectHandler,
        onChangeBlogHandler,
        onChangeGithubHandler,
        onChangeSkillTagInputHandler,
        onClickSkillTagHandler,
        onSubmitSkillTagHandler,
        onClickSkillTagDeleteHandler,
        onClickInsertHandler,
        onClickShareToggle,
    };
};

export default useInfo;
