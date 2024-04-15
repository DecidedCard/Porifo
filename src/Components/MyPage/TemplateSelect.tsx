import React from "react";
import Button from "../Commen/Button";
import Image from "next/image";

const TemplateSelect = ({ onClickTemplateSelectHandler }: { onClickTemplateSelectHandler: (arg: string) => void }) => {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-80 z-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 w-[932px] h-[741px] bg-gray rounded-2xl">
                <h2 className="w-fit h-9 mx-auto text-2xl font-bold mt-10">원하는 템플릿을 선택하세요</h2>
                <hr className="w-[852px] text-gray2 mx-auto" />
                <div className="flex gap-6 w-[852px] h-[549px] mx-auto">
                    <div className="flex flex-col gap-2 rounded-2xl">
                        <h3 className="text-lg font-medium">Standard</h3>
                        <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-blue">
                            <div className="w-[315px] h-[413px] rounded-2xl overflow-hidden">
                                <Image src={"/standard_template.png"} alt="스탠다드 템플릿" width={400} height={100} />
                            </div>
                            <div className="flex gap-2">
                                <div className="w-[100px]">
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
                    <div className="flex flex-col gap-2 rounded-2xl">
                        <h3 className="text-lg font-medium">Grid</h3>
                        <div className="flex flex-col items-center justify-center gap-2 w-[414px] h-[517px] bg-blue">
                            <div className="w-[315px] h-[413px] rounded-2xl overflow-hidden">
                                <Image src={"/grid_template.png"} alt="스탠다드 템플릿" width={400} height={100} />
                            </div>
                            <div className="flex gap-2">
                                <div className="w-[100px]">
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
            </div>
        </div>
    );
};

export default TemplateSelect;
