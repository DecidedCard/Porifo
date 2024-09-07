"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { Flip, ToastContainer } from "react-toastify";

import Button from "@/Components/Commen/Button";
import SignButton from "@/Components/Sign/SignButton";
import SignInputItem from "@/Components/Sign/SignInputItem";
import SignPasswordValidate from "@/Components/Sign/SignPasswordValidate";

import useInput from "@/hooks/useInput";
import Input from "@/Components/Commen/Input";
import { successNotify, infoNotify } from "@/util/toast";
import { supabase } from "@/util/supabase/clientSupabase";
import { signUpValidation } from "@/util/sign/signNumber_validation";
import { emailValidate, passwordValidate } from "@/util/sign/sign_validate";
import serverClient from "@/util/supabase/serverClient";

const ConfirmEmailpage = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [emailError, setEmailError] = useState(true);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [confirmPasswordError, setConfirmPasswordError] = useState(true);

    const [samePassword, setSamePassword] = useState(false);
    const [emailSMPTNumber, setEmailSMPTNumber] = useState(false);

    const [OTPNumber, onChangeConfirmOTPNumber] = useInput();

    const [inputDisabled, setInputDisabled] = useState(false);

    const router = useRouter();

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);
    const emailRegValid = emailValidate({ email });

    useEffect(() => {
        email.length >= 1 ? setEmailError(false) : setEmailError(true);

        if (emailRegValid) setEmailError(true);
    }, [email.length, emailRegValid]);

    const passwordRegValid = passwordValidate({ password });

    const confirmPasswordIsError =
        password.length === 0 ||
        (passwordRegValid.wordRegBoolean &&
            passwordRegValid.numberRegBoolean &&
            passwordRegValid.specialRegBoolean &&
            passwordRegValid.lengthRegBoolean);

    const passwordError = confirmPasswordIsError && password.length >= 8;

    useEffect(() => {
        if (password === confirmPassword) {
            setSamePassword(true);
            setConfirmPasswordError(true);
        } else {
            setSamePassword(false);
            setConfirmPasswordError(false);
        }
    }, [password, confirmPassword]);

    useEffect(() => {
        email.trim() !== "" && password.trim() !== "" && samePassword === true
            ? setEmailSMPTNumber(true)
            : setEmailSMPTNumber(false);
    }, [email, password, samePassword]);

    const confirmEmailAndOTPNumber = async () => {
        try {
            signUpValidation({ email, password });
            infoNotify({ title: "잠시만 기다려 주세요.🥹" });
            await supabase.auth.signUp({
                email,
                password,
            });
            successNotify({ title: "인증번호를 메일로 보냈습니다.😎" });
        } catch (error) {
            console.log(error);
        }
    };

    const signUpNewUser = async () => {
        const serverSupabase = serverClient();
        try {
            successNotify({ title: "잠시만 기다려 주세요!" });

            await supabase.auth.verifyOtp({ token_hash: OTPNumber, type: "email" });
            await serverSupabase.auth.signInWithPassword({ email, password });

            router.push("/confirmEmail");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-gray-1 relative sm:py-0">
            <div className="rounded-2xl p-14 w-[454px] h-[730px] bg-white flex justify-center flex-col sm:items-center sm:w-full sm:h-screen">
                <div className="flex flex-col">
                    <div className="flex justify-center items-center h-[86px] mb-5 sm:hidden">
                        <Image
                            className="w-[162px] h-[54px]"
                            width={0}
                            height={0}
                            src="/assets/image/signImage/formLogo.svg"
                            priority
                            alt="이메일 확인 form 로고"
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

                    <SignInputItem
                        setLabel="이메일"
                        type="email"
                        helperText={emailError ? "" : "이메일 형식에 맞춰 입력해 주세요."}
                        color={emailError ? "gray2" : "error"}
                        placeholder="이메일을 입력해주세요"
                        pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                        onChangeHandler={onChangeEmailHandler}
                    />

                    <SignInputItem
                        setLabel="비밀번호"
                        placeholder="비밀번호를 작성해주세요"
                        color={password.length === 0 ? "gray2" : passwordError ? "gray2" : "error"}
                        pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                        onChangeHandler={onChangePassword}
                        relative="relative"
                        eye="/assets/image/signImage/eye.svg"
                        eyeClose="/assets/image/signImage/eye_close.svg"
                    />

                    <SignPasswordValidate
                        lengthRegValid={passwordRegValid.lengthRegBoolean}
                        numberRegValid={passwordRegValid.numberRegBoolean}
                        wordRegValid={passwordRegValid.wordRegBoolean}
                        specialRegValid={passwordRegValid.specialRegBoolean}
                    />

                    <SignInputItem
                        setLabel="비밀번호"
                        placeholder="비밀번호를 작성해주세요"
                        color={confirmPassword.length === 0 ? "gray2" : confirmPasswordError ? "gray2" : "error"}
                        pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                        helperText={samePassword ? "" : "비밀번호가 일치하지 않습니다."}
                        onChangeHandler={onChangeConfirmPassword}
                        relative="relative"
                        eye="/assets/image/signImage/eye.svg"
                        eyeClose="/assets/image/signImage/eye_close.svg"
                    />

                    <div className="mx-auto my-4 w-[350px] h-fit flex flex-col sm:mt-5">
                        <div className="flex gap-2">
                            <div className="">
                                <Input
                                    type="text"
                                    placeholder="인증번호"
                                    onChange={onChangeConfirmOTPNumber}
                                    color="gray2"
                                    size="big"
                                />
                            </div>
                            <div className="text-body/P6_M">
                                <Button
                                    text="인증번호 받기"
                                    size="extra"
                                    color="primary"
                                    border
                                    disabled={!emailSMPTNumber}
                                    onClick={confirmEmailAndOTPNumber}
                                />
                            </div>
                        </div>
                    </div>

                    <SignButton
                        text="다음"
                        email={email}
                        password={password}
                        OTPNumber={OTPNumber}
                        inputDisabled={inputDisabled}
                        setInputDisabled={setInputDisabled}
                        onClick={signUpNewUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfirmEmailpage;
