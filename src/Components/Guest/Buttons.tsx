"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Flip, ToastContainer } from "react-toastify";
import { usePDF } from "react-to-pdf";

import TemplateSelect from "../MyPage/TemplateSelect";
import Preview from "../MyPage/Preview";
import Button from "../Commen/Button";
import Standard from "../Template/Standard/Standard";
import Grid from "../Template/Grid/Grid";
import Modern from "../Template/Modern/Modern";
import Box from "../Template/Box/Box";

import useInfo from "@/hooks/mypage/useInfo";
import useTemplateSelect from "@/hooks/mypage/useTemplateSelect";
import useGuestButton from "@/hooks/guest/useGuestButton";

const Buttons = () => {
    const { basicInfo, disabled, onClickInsertHandler } = useInfo();
    const {
        templateSelectModal,
        setTemplateSelectModal,
        onClickTemplateModalToggleHandler,
        onClickTemplateSelectHandler,
    } = useTemplateSelect();
    const { previewModal, portfolioPreview, setPreviewModal, onClickPreviewModal } = useGuestButton();

    const { targetRef } = usePDF({ filename: "Porifo_Portfolio" });
    const router = useRouter();

    const onCliCkHandler = async () => {
        await onClickInsertHandler();
        router.push("/guest/result");
    };

    return (
        <div className="flex flex-col">
            <div className="mt-2 w-fit hidden sm:block sm:absolute sm:top-48 sm:left-[67%] ml-auto">
                <button
                    onClick={onClickTemplateModalToggleHandler}
                    className="flex justify-center items-center w-fit h-[26px] py-1 px-3 text-primary_1 text-P8_M"
                >
                    템플릿 선택하기
                </button>
            </div>
            <main className="relative flex flex-col items-center gap-5">
                <div className="pt-5 pl-3 pr-3 flex flex-col mt-20 items-center border-slate-800 bg-white rounded-2xl h-[280px] sm:hidden">
                    <div className="absolute right-[120%] w-20 flex flex-row">
                        <Button text="미리보기" size="s" color="black" onClick={onClickPreviewModal} fontSize="xs" />
                    </div>
                    <div className="w-64 h-[186px] bg-blue overflow-hidden">
                        <div className="w-[168px] mx-auto">
                            <p className="text-xs font-medium">{basicInfo.template}</p>
                            <Image
                                src={`/templateImage/${basicInfo.template}_template.png`}
                                alt="템플릿 미리보기"
                                width={200}
                                height={100}
                            />
                        </div>
                    </div>

                    <div className="mt-2 w-52">
                        <button
                            onClick={onClickTemplateModalToggleHandler}
                            className="flex justify-center items-center w-[208px] h-[26px] py-1 px-3 text-primary_1 text-P8_M"
                        >
                            템플릿 선택하기
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white p-4 rounded-2xl">
                    <div className="w-[250px]">
                        <Button
                            text="저장하기"
                            size="l"
                            border="none"
                            color={disabled ? "" : "primary"}
                            onClick={onCliCkHandler}
                            disabled={disabled}
                        />
                        {disabled && <span className="text-P8_R text-alert">필수항목을 입력해 주세요.</span>}
                    </div>
                </div>
                {templateSelectModal && (
                    <TemplateSelect
                        templateSelectModal={templateSelectModal}
                        setTemplateSelectModal={setTemplateSelectModal}
                        onClickTemplateSelectHandler={onClickTemplateSelectHandler}
                    />
                )}
            </main>
            <div className="absolute top-0 left-0 opacity-0 -z-50">
                {portfolioPreview && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] overflow-y-auto rounded-2xl">
                        <div ref={targetRef} className="">
                            {basicInfo.template === "Standard" && <Standard portfolio={portfolioPreview} />}
                            {basicInfo.template === "Grid" && <Grid portfolio={portfolioPreview} />}
                            {basicInfo.template === "Modern" && <Modern portfolio={portfolioPreview} />}
                            {basicInfo.template === "Box" && <Box portfolio={portfolioPreview} />}
                        </div>
                    </div>
                )}
            </div>
            {previewModal && (
                <Preview
                    template={basicInfo.template!}
                    previewModal={previewModal}
                    setPreviewModal={setPreviewModal}
                    portfolio={portfolioPreview}
                />
            )}
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                draggable
                theme="light"
                transition={Flip}
                style={{ width: "fit-content" }}
            />
        </div>
    );
};

export default Buttons;
