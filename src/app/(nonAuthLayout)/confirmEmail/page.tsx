"use client";

import React, { useState, useEffect } from "react";

import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";
import SignPasswordValidate from "@/Components/Sign/SignPasswordValidate";
import useInput from "@/hooks/useInput";
import Image from "next/image";
import { signUpValidation } from "@/util/sign/signNumber_validation";
import SignButton from "@/Components/Sign/SignButton";

import { supabase } from "@/util/supabase/clientSupabase";
import SignUpItem from "@/Components/Sign/SignUpItem";
import { emailValidate, passwordValidate } from "@/util/sign/sign_validate";
import Button from "@/Components/Commen/Button";

const ConfirmEmailpage = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [emailError, setEmailError] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");

    const [OTPNumber, onChangeConfirmOTPNumber] = useInput();
    const [emailRegValid, setEmailRegValid] = useState(false);

    const [inputDisabled, setInputDisabled] = useState(false);
    const [wordRegValid, setWordRegValid] = useState(false);
    const [specialRegValid, setSpecialRegValid] = useState(false);
    const [numberRegValid, setNumberRegValid] = useState(false);
    const [lengthRegValid, setLengthRegValid] = useState(false);

    const router = useRouter();
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

    useEffect(() => {
        emailValidate({ email, setEmailRegValid });
        email.length >= 1 ? setEmailError(false) : setEmailError(true);

        if (emailRegValid === true) setEmailError(true);
    }, [email, emailRegValid]);

    useEffect(() => {
        passwordValidate({ password, setWordRegValid, setNumberRegValid, setSpecialRegValid, setLengthRegValid });
        const confirmPassword =
            password.length === 0 || (wordRegValid && specialRegValid && numberRegValid && lengthRegValid);

        password.length === 0
            ? setPasswordError(true)
            : confirmPassword && password.length >= 8
            ? setPasswordError(true)
            : setPasswordError(false);
    }, [wordRegValid, specialRegValid, numberRegValid, lengthRegValid, password]);

    const confirmEmailAndOTPNumber = async () => {
        try {
            signUpValidation({ email, password });
            await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmEmail`,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };
    const showToastAlert = () =>
        toast.success("OTP인증 메일을 전송하고 있습니다!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        });
    const signUpNewUser = async () => {
        try {
            await supabase.auth.verifyOtp({ token_hash: OTPNumber, type: "email" });

            return router.push("/signup");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded-2xl p-10 w-[454px] h-[730px] bg-white flex justify-center flex-col">
                <div className="flex flex-col items-center justify-center">
                    <form onSubmit={signUpNewUser}>
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

                        <SignUpItem
                            setLabel="이메일"
                            type="email"
                            helperText={emailError ? "" : "이메일 형식에 맞춰 입력해 주세요."}
                            color={emailError ? "black" : "error"}
                            placeholder="이메일을 입력해주세요"
                            pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                            onChangeHandler={onChangeEmailHandler}
                        />

                        <SignUpItem
                            setLabel="비밀번호"
                            placeholder="비밀번호를 작성해주세요"
                            color={passwordError ? "black" : "error"}
                            pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                            onChangeHandler={onChangePassword}
                            relative="relative"
                            eye="eye.svg"
                            eyeClose="eye_close.svg"
                        />
                        <SignPasswordValidate
                            lengthRegValid={lengthRegValid}
                            numberRegValid={numberRegValid}
                            wordRegValid={wordRegValid}
                            specialRegValid={specialRegValid}
                        />

                        <SignUpItem
                            setLabel="비밀번호"
                            placeholder="비밀번호를 작성해주세요"
                            color={confirmPassword ? "black" : "error"}
                            pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                            onChangeHandler={onChangeConfirmPassword}
                            relative="relative"
                            eye="eye.svg"
                            eyeClose="eye_close.svg"
                        />

                        <SignUpItem
                            setLabel="인증번호"
                            type="text"
                            placeholder="인증번호를 입력해주세요"
                            onChangeHandler={onChangeConfirmOTPNumber}
                        />

                        <Button text="인증번호 받기" onClick={confirmEmailAndOTPNumber} />

                        <SignButton
                            text="다음"
                            OTPNumber={OTPNumber}
                            inputDisabled={inputDisabled}
                            setInputDisabled={setInputDisabled}
                            onClick={showToastAlert}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmEmailpage;
