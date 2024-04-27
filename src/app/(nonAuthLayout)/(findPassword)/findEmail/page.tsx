"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignButton from "@/Components/Sign/SignButton";
import SignInputItem from "@/Components/Sign/SignInputItem";

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

    const showToastAlert = () => successNotify({ title: "이메일을 통해 비밀번호를 변경해 주세요. 😎" });

    return (
        <main>
            <div className="flex py-36 items-center justify-center bg-hihigray relative">
                <div className="rounded-2xl p-10 w-[454px] h-[456px] bg-white flex justify-center items-center flex-col">
                    <form onSubmit={changePassword} className="flex flex-col items-center justify-center">
                        <div className="flex justify-center items-center h-[86px]">
                            <Image
                                width={160}
                                height={54}
                                className="w-[160px] h-[54px]"
                                src="formLogo.svg"
                                alt="로그인의 form 로고"
                                priority
                            />
                        </div>

                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
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

                        <p className="flex items-center text-center justify-center mt-8 font-normal text-sm w-[236px] h-[44px]">
                            비밀번호 재설정을 위해 회원님의 이메일로
                            <br />
                            인증메일이 발송됩니다.
                        </p>
                        <SignInputItem
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
