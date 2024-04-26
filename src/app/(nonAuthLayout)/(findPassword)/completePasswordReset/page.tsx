import React from "react";
import Image from "next/image";
import Button from "@/Components/Commen/Button";
const CompletePasswordResetPage = () => {
    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded-2xl p-10 w-[454px] h-[500px] items-center bg-white flex justify-center flex-col">
                <div className="flex flex-col justify-center items-center w-[274px] h-[324px]">
                    <p className="text-[108px]">🧩</p>
                    <p className="flex items-center text-center justify-center leading-normal mt-8 font-medium text-[20px] w-[274px] h-[44px]">
                        비밀번호가 재설정되었습니다.
                        <br />
                        로그인 후 포리포를 이용해 보세요.
                    </p>
                </div>
                <Button text="로그인하기" size="l" color="primary" />
            </div>
        </div>
    );
};

export default CompletePasswordResetPage;
