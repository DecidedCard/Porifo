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
                <div className="mt-10 rounded-2xl p-14 w-[500px] h-fit bg-white sm:flex sm:flex-col sm:items-center sm:justify-center sm:rounded-none sm:w-[400px] sm:h-screen sm:mt-0">
                    <p className="text-lg font-bold mb-1">개인정보 수집및 이용</p>
                    <p className="mb-2 leading-normal">
                        본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로
                        개인정보를 수집, 이용 및 제공하는데 동의합니다.
                    </p>
                    <p className="mb-2 leading-normal">
                        □ 개인정보의 수집 및 이용에 관한 사항 - 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명,
                        전화번호, 주소, 이메일, 경력사항, 등과 그 外 이력서 기재 내용 일체 - 개인정보의 이용 목적 :
                        수집된 개인정보를 인사서류로 활용하며, 목적 외의 용도로는 사용하지 않습니다.
                    </p>
                    <p className="mb-2 leading-normal">
                        □ 개인정보의 보관 및 이용 기간 - 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및
                        제공목적이 달성된 경우 [개인정보 보호법] 제21조에 따라 처리합니다.
                    </p>
                    <div className="flex h-fit justify-items-end gap-2 relative">
                        <div className="w-72 h-fit mt-6 mb-6 mx-auto sm:w-40">
                            <Button border="none" size="m" text="취소하기" onClick={disagreePersonalInfo} />
                        </div>
                        <div className="w-72 mt-6 mb-6 mx-auto sm:w-40">
                            <Button
                                border="none"
                                size="m"
                                color="primary"
                                text="동의하기"
                                onClick={agreePersonalInfo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignPersonalInfoCheck;
