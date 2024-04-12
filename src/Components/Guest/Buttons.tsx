"use client";

import useInfo from "@/hooks/mypage/useInfo";
import Button from "../Commen/Button";
import { RiLinkM } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import { onClickCopyClipBoardHandler } from "@/util/urlCopy";
import { usePDF } from "react-to-pdf";
import useTemplateSelect from "@/hooks/mypage/useTemplateSelect";
import Image from "next/image";
import TemplateSelect from "../MyPage/TemplateSelect";
import Preview from "../MyPage/Preview";
import useGuestButton from "@/hooks/guest/useGuestButton";
import { useRouter } from "next/navigation";

const Buttons = () => {
    const { user, portfolio, basicInfo, disabled, onClickInsertHandler } = useInfo();
    const { templateSelectModal, onClickTemplateModalToggleHandler, onClickTemplateSelectHandler } =
        useTemplateSelect();
    const { previewModal, portfolioPreview, setPreviewModal, onClickPreviewModal } = useGuestButton();

    const { targetRef, toPDF } = usePDF({ filename: "Porifo_Portfolio" });
    const router = useRouter();

    const onCliCkHandler = async () => {
        await onClickInsertHandler();
        router.push("/guest/result");
    };

    return (
        <div className="flex flex-col">
            <main className="relative flex flex-col items-center ">
                <div className="pt-5 pl-3 pr-3 flex flex-col mt-10 items-center border-slate-800 bg-white rounded-2xl h-[350px]">
                    <div className="absolute right-[120%] w-20 flex flex-row">
                        <Button text="미리보기" size="s" color="black" onClick={onClickPreviewModal} fontSize="xs" />
                    </div>
                    <div className="w-52 h-[186px] bg-blue overflow-hidden">
                        <div className="w-[168px] mx-auto">
                            <p className="text-xs font-medium">{basicInfo.template}</p>
                            <Image
                                src={`/${basicInfo.template}_template.png`}
                                alt="템플릿 미리보기"
                                width={200}
                                height={100}
                            />
                        </div>
                    </div>

                    <div className="mt-3 w-52">
                        <Button
                            text="템플릿 선택하기"
                            size="s"
                            color="primary"
                            fontSize="s"
                            onClick={onClickTemplateModalToggleHandler}
                        />
                    </div>

                    <div className="flex flex-row mt-5 mb-5">
                        <button
                            className="flex items-center py-2 px-4 rounded-xl text-zinc-500"
                            onClick={() => onClickCopyClipBoardHandler(`http://localhost:3000/create/${user?.id}`)}
                        >
                            <RiLinkM className="mr-2" /> URL 복사
                        </button>
                        <button
                            className="flex items-center py-2 px-4 rounded-xl text-zinc-500"
                            onClick={() => toPDF()}
                        >
                            <GrDownload className="mr-2" /> PDF로 저장
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-[250px]">
                        <Button
                            text={portfolio ? "수정하기" : "저장하기"}
                            size="l"
                            border="none"
                            color={disabled ? "" : "primary"}
                            onClick={onCliCkHandler}
                            disabled={disabled}
                        />
                    </div>
                </div>
                {templateSelectModal && <TemplateSelect onClickTemplateSelectHandler={onClickTemplateSelectHandler} />}
            </main>
            <div className="absolute top-0 left-0 opacity-0 -z-50">
                {portfolioPreview && (
                    <Preview
                        template={basicInfo.template!}
                        setPreviewModal={setPreviewModal}
                        targetRef={targetRef}
                        portfolio={portfolioPreview}
                    />
                )}
            </div>
            {previewModal && (
                <Preview
                    template={basicInfo.template!}
                    setPreviewModal={setPreviewModal}
                    portfolio={portfolioPreview}
                />
            )}
        </div>
    );
};

export default Buttons;