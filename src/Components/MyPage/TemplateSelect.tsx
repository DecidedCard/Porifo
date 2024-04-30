import React, { useEffect } from "react";

import Image from "next/image";

import Button from "../Commen/Button";

import useMouseClickClose from "@/hooks/useMouseClickClose";

const TemplateSelect = ({
    templateSelectModal,
    setTemplateSelectModal,
    onClickTemplateSelectHandler,
}: {
    templateSelectModal: boolean;
    setTemplateSelectModal: React.Dispatch<React.SetStateAction<boolean>>;
    onClickTemplateSelectHandler: (arg: string) => void;
}) => {
    const { modalRef } = useMouseClickClose(templateSelectModal, setTemplateSelectModal);
    useEffect(() => {
        document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-80 z-50">
            <div
                ref={modalRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 overflow-auto w-[932px] bg-white rounded-2xl sm:mx-auto sm:h-fit sm:overflow-auto sm:w-full sm:ml-0 sm:mt-0 sm:pt-4 sm:pb-10 sm:px-4"
            >
                <h2 className="w-fit h-9 mx-auto text-2xl font-bold mt-10 text-[22px]">원하는 템플릿을 선택하세요.</h2>
                <hr className="w-[852px] h-4 text-gray2 mx-auto sm:w-[90%]" />
                <div className="flex flex-col gap-6 w-[852px] h-[549px] mx-auto sm:w-full">
                    <div className="flex flex-row sm:flex-col sm:w-full">
                        <div className="flex flex-col gap-2 rounded-2xl">
                            <h3 className="text-lg font-medium text-gray4">Standard</h3>
                            <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-gray2 rounded-2xl mr-6 sm:w-full">
                                <div className="w-[315px] h-[413px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={"/templateImage/Standard_template.png"}
                                        alt="스탠다드 템플릿"
                                        width={400}
                                        height={100}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-[100px] mt-2">
                                        <Button
                                            text="사용하기"
                                            size="m"
                                            border="none"
                                            color="primary"
                                            onClick={() => onClickTemplateSelectHandler("Standard")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 rounded-2xl sm:w-full">
                            <h3 className="text-lg font-medium text-gray4">Grid</h3>
                            <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-gray2 rounded-2xl sm:w-full">
                                <div className="w-[315px] h-[413px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={"/templateImage/Grid_template.png"}
                                        alt="그리드 템플릿"
                                        width={400}
                                        height={100}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-[100px] mt-2">
                                        <Button
                                            text="사용하기"
                                            size="m"
                                            border="none"
                                            color="primary"
                                            onClick={() => onClickTemplateSelectHandler("Grid")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row pb-10 sm:flex-col">
                        <div className="flex flex-col gap-2 rounded-2xl sm:w-full">
                            <h3 className="text-lg font-medium text-gray4">Modern</h3>
                            <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-gray2 rounded-2xl mr-6 sm:w-full">
                                <div className="w-[315px] h-[413px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={"/templateImage/Modern_template.png"}
                                        alt="모던 템플릿"
                                        width={400}
                                        height={100}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-[100px] mt-2">
                                        <Button
                                            text="사용하기"
                                            size="m"
                                            border="none"
                                            color="primary"
                                            onClick={() => onClickTemplateSelectHandler("Modern")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 rounded-2xl sm:w-full">
                            <h3 className="text-lg font-medium text-gray4">Box</h3>
                            <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-gray2 rounded-2xl sm:w-full">
                                <div className="w-[315px] h-[413px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={"/templateImage/Box_template.png"}
                                        alt="박스 템플릿"
                                        width={400}
                                        height={100}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-[100px] mt-2">
                                        <Button
                                            text="사용하기"
                                            size="m"
                                            border="none"
                                            color="primary"
                                            onClick={() => onClickTemplateSelectHandler("Box")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelect;
