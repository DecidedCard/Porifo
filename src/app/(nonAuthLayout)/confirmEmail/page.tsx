"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";
import Image from "next/image";
import Input from "@/Components/Commen/Input";
import SignButton from "@/Components/Sign/SignButton";
import Button from "@/Components/Commen/Button";
import { supabase } from "@/util/supabase/clientSupabase";
import SignUpItem from "@/Components/Sign/SignUpItem";

const ConfirmEmailpage = () => {
    const [confirmOTP, onChangeConfirmOTP] = useInput();
    const [OTPNumber, onChangeConfirmOTPNumber] = useInput();
    const [inputDisabled, setInputDisabled] = useState(false);

    const router = useRouter();

    const onClickResendOTP = async () => {
        try {
            await supabase.auth.resend({
                type: "signup",
                email: confirmOTP,
            });
        } catch (error) {
            console.log("catchError: ", error);
        }
    };

    const confirmEmailAndOTPNumber = async () => {
        try {
            await supabase.auth.verifyOtp({ token_hash: OTPNumber, type: "email" });

            return router.push("/welcome");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded-2xl p-10 w-[454px] h-[510px] bg-white flex justify-center flex-col">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center h-[86px] mb-5">
                        <Image
                            className="w-[162px] h-[54px]"
                            width={0}
                            height={0}
                            src="formLogo.svg"
                            priority
                            alt="이메일 확인 form 로고"
                        />
                    </div>

                    <div className="flex flex-row w-[342px] gap-2">
                        <div className="mx-auto w-[190px] flex-col">
                            <label className="mb-2 flex text-sm font-medium">
                                이메일 <p className="ml-1 text-[10px] text-red-500">★</p>
                            </label>
                            <Input
                                type="email"
                                value={confirmOTP}
                                placeholder="이메일을 입력해주세요"
                                pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                                onChange={onChangeConfirmOTP}
                                color="gray2"
                                size="big"
                            />
                        </div>
                        <div className=" w-[144px] h-fit mt-7">
                            <Button
                                onClick={onClickResendOTP}
                                text="인증번호 다시 받기"
                                fontSize="m"
                                border="none"
                                size="l"
                                color="primary"
                            />
                        </div>
                    </div>

                    <SignUpItem
                        setLabel="인증번호"
                        type="text"
                        placeholder="인증번호를 입력해주세요"
                        onChangeHandler={onChangeConfirmOTPNumber}
                    />
                    <SignButton
                        text="다음"
                        confirmUserEmail={confirmOTP}
                        confirmOTP={OTPNumber}
                        inputDisabled={inputDisabled}
                        setInputDisabled={setInputDisabled}
                        onClick={confirmEmailAndOTPNumber}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfirmEmailpage;
