"use client";

import useInput from "@/hooks/useInput";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/Components/Commen/Input";
import SignUpItem from "@/Components/Sign/SignUpItem";
import SignButton from "@/Components/Sign/SignButton";
import Button from "@/Components/Commen/Button";

const ConfirmEmailpage = () => {
    const [OTPNumber, setOTPNumber] = useState("");
    const [confirmOTP, onChangeConfirmOTP] = useInput();
    const [inputDisabled, setInputDisabled] = useState(false);

    const onClickEmailConfirm = () => {};
    const confirmEmailOTPNumber = () => {};
    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded-2xl p-10 w-[454px] h-[510px] bg-white flex justify-center flex-col">
                <form onSubmit={confirmEmailOTPNumber}>
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
                        <div className="flex flex-row mb-8 w-[342px] gap-2">
                            <div className="mx-auto w-[220px] flex-col">
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
                            <div className=" w-[114px] h-fit mt-7">
                                <Button
                                    onClick={onClickEmailConfirm}
                                    text="인증번호받기"
                                    fontSize="m"
                                    border="none"
                                    size="l"
                                    color="primary"
                                />
                            </div>
                        </div>
                        <div className="w-[342px] mb-12">
                            <Input
                                value={OTPNumber}
                                pattern="[0-9]"
                                maxLength={6}
                                type="text"
                                placeholder="인증번호"
                                onChange={setOTPNumber}
                                color="gray2"
                                size="big"
                            />
                        </div>
                        <SignButton text="다음" inputDisabled={inputDisabled} setInputDisabled={setInputDisabled} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConfirmEmailpage;
