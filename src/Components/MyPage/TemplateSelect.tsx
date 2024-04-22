import React, { useEffect, useRef } from "react";
import Button from "../Commen/Button";
import Image from "next/image";

const TemplateSelect = ({ onClickTemplateSelectHandler }: { onClickTemplateSelectHandler: (arg: string) => void }) => {
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 w-[932px] h-[741px] bg-white rounded-2xl sm:w-full sm:mx-auto sm:h-fit sm:overflow-auto">
                <h2 className="w-fit h-9 mx-auto text-2xl font-bold mt-10 text-[22px]">원하는 템플릿을 선택하세요.</h2>
                <hr className="w-[852px] h-4 text-gray2 mx-auto sm:w-[90%]" />
                <div className="flex gap-6 w-[852px] h-[549px] mx-auto sm:flex-col">
                    <div className="flex flex-col gap-2 rounded-2xl sm:ml-2">
                        <h3 className="text-lg font-medium text-gray4">Standard</h3>
                        <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-blue rounded-2xl">
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
                    <div className="flex flex-col gap-2 rounded-2xl sm:ml-2">
                        <h3 className="text-lg font-medium text-gray4">Grid</h3>
                        <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-sky_blue rounded-2xl">
                            <div className="w-[315px] h-[413px] rounded-2xl overflow-hidden">
                                <Image
                                    src={"/templateImage/Grid_template.png"}
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
                                        onClick={() => onClickTemplateSelectHandler("Grid")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-2xl sm:ml-2">
                        <h3 className="text-lg font-medium text-gray4">Modern</h3>
                        <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-sky_blue rounded-2xl">
                            <div className="w-[315px] h-[413px] rounded-2xl overflow-hidden">
                                <Image
                                    src={"/templateImage/Grid_template.png"}
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
                </div>
            </div>
        </div>
    );
};

export default TemplateSelect;
