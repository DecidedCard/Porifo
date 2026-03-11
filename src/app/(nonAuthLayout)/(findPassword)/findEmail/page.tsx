"use client";

import React, { useState } from "react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { Flip, ToastContainer } from "react-toastify";

import SignButton from "@/Components/Sign/SignButton";
import SignInputNonStarItem from "@/Components/Sign/SignInputNonStar";

import { successNotify } from "@/util/toast";
import { supabase } from "@/util/supabase/clientSupabase";

const Find_Email = () => {
    const [userEmail, setUserEmail] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);

    const changePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await supabase.auth.resetPasswordForEmail(userEmail, {
                redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/passwordChange`,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);

    const showToastAlert = () => successNotify({ title: "이메일로 비밀번호를 변경해 주세요." });

    return (
        <main>
            <div className="flex py-36 items-center justify-center bg-gray_1 relative sm:py-0">
                <div className="rounded-2xl p-10 w-[454px] h-[456px] bg-white flex justify-center items-center flex-col sm:w-full sm:h-screen sm:p-0">
                    <form onSubmit={changePassword} className="flex flex-col items-center justify-center">
                        <div className="flex justify-center items-center h-[86px] sm:hidden">
                            <Image
                                width={160}
                                height={54}
                                className="w-[160px] h-[54px]"
                                src="/assets/image/signImage/formLogo.svg"
                                alt="로그인의 form 로고"
                                priority
                            />
                        </div>

                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition={Flip}
                        />

                        <p className="flex items-center text-center justify-center mt-8 w-[236px] h-[44px] text-black text-P7_R">
                            비밀번호 재설정을 위해 회원님의 이메일로
                            <br />
                            인증메일이 발송됩니다.
                        </p>
                        <SignInputNonStarItem
                            type="email"
                            setLabel="이메일"
                            pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                            onChangeHandler={handleEmail}
                            placeholder="이메일을 입력해 주세요"
                        />
                        <SignButton
                            text="인증메일 보내기"
                            findEmail={userEmail}
                            inputDisabled={inputDisabled}
                            setInputDisabled={setInputDisabled}
                            onClick={showToastAlert}
                        />
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Find_Email;
