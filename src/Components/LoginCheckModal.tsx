import React from "react";
import Button from "./Commen/Button";
import { useRouter } from "next/navigation";

const LoginCheckModal = () => {
    const router = useRouter();

    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-80 z-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-evenly w-[440px] h-[220px] bg-white text-xl rounded-2xl">
                <div className="text-center">
                    <p>로그인이 필요한 서비스 입니다.</p>
                    <p>로그인 하시겠습니까?</p>
                </div>
                <div className="flex gap-2 w-[376px]">
                    <Button text="취소" size="m" border="none" onClick={() => router.replace("/")} />
                    <Button
                        text="로그인"
                        size="m"
                        color="primary"
                        border="none"
                        onClick={() => router.replace("/signin")}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginCheckModal;
