import React from "react";
import Button from "@/Components/Commen/Button";

type PersonalCheck = {
    setPersonalInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
    setPersonalInfoCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignPersonalInfoCheck = ({ setPersonalInfoModal, setPersonalInfoCheck }: PersonalCheck) => {
    const disagreePersonalInfo = () => {
        setPersonalInfoModal(false);
        setPersonalInfoCheck(false);
    };

    const agreePersonalInfo = () => {
        setPersonalInfoModal(false);
        setPersonalInfoCheck(true);
    };
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-80 z-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit overflow-y-auto">
                <div className="mt-10 rounded p-14 w-[500px] h-fit bg-white">
                    <p className="text-lg font-bold mb-1">개인정보 수집및 이용</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <p>전문입니다.</p>
                    <div className="flex h-fit justify-items-end gap-2 relative ">
                        <div className="w-72 h-fit mt-6 mb-6 mx-auto">
                            <Button border="none" size="m" text="취소하기" onClick={disagreePersonalInfo} />
                        </div>
                        <div className="w-72 mt-6 mb-6 mx-auto">
                            <Button
                                border="none"
                                size="m"
                                color="primary"
                                text="동의하기"
                                onClick={agreePersonalInfo}
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignPersonalInfoCheck;
