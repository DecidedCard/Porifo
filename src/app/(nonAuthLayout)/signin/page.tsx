"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Flip, ToastContainer } from "react-toastify";

import SocialSign from "@/Components/Sign/SocialSign";
import SignButton from "@/Components/Sign/SignButton";
import SignInputNonStarItem from "@/Components/Sign/SignInputNonStar";

import serverClient from "@/util/supabase/serverClient";
import { successNotify, errorNotify } from "@/util/toast";
import { emailValidate } from "@/util/sign/sign_validate";
import signCheckUserPortfolio from "@/util/sign/signCheckUserPortfolio";

import useInput from "@/hooks/useInput";

import useUserStore from "@/store/userStore";

const SignIn = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, setPassword] = useState("");

    const [redirectTo, setRedirecTo] = useState("");

    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);

    const [inputDisabled, setInputDisabled] = useState(false);

    const { setUser } = useUserStore();

    const router = useRouter();
    const findPassword = () => router.replace("/findEmail");

    useEffect(() => {
        const emailRegValid = emailValidate({ email });

        email.length >= 1 ? setEmailError(false) : setEmailError(true);
        password.length >= 1 ? setPasswordError(false) : setPasswordError(true);
        if (emailRegValid === true) setEmailError(true);
        if (password.length >= 8) setPasswordError(true);
    }, [email, password]);

    useEffect(() => {
        signCheckUserPortfolio({ setRedirecTo });
    }, []);

    const signInWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const supabase = serverClient();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                errorNotify({ title: "비밀번호를 확인해 주세요.😅" });
                throw new Error("로그인에 실패했습니다.");
            }
            setUser(data.user);

            successNotify({ title: "로그인에 성공하였습니다.😎" });

            router.replace("/");
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <main>
            <div className="flex py-36 items-center justify-center bg-gray-1 sm:w-full sm:py-0">
                <div className="rounded-2xl w-[454px] h-[670px] bg-white flex justify-center items-center flex-col sm:w-full sm:h-screen sm:justify-center">
                    <form onSubmit={signInWithEmail}>
                        <div className="flex justify-center items-center h-[86px] sm:hidden">
                            <Image
                                width={0}
                                height={0}
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
                        <SignInputNonStarItem
                            setLabel="이메일"
                            type="email"
                            helperText={emailError ? "" : "이메일 형식에 맞춰 입력해 주세요."}
                            color={emailError ? "gray2" : "error"}
                            placeholder="이메일을 입력해주세요"
                            pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                            onChangeHandler={onChangeEmailHandler}
                        />

                        <SignInputNonStarItem
                            setLabel="비밀번호"
                            placeholder="비밀번호를 작성해주세요"
                            helperText={passwordError ? "" : "비밀번호가 일치하지 않습니다."}
                            color={passwordError ? "gray2" : "error"}
                            pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/"
                            value={password}
                            onChangeHandler={onChangePassword}
                            relative="relative"
                            eye="/assets/image/signImage/eye.svg"
                            eyeClose="/assets/image/signImage/eye_close.svg"
                        />

                        <SignButton
                            text="로그인"
                            inputDisabled={inputDisabled}
                            setInputDisabled={setInputDisabled}
                            email={email}
                            loginPassword={password}
                        />
                        <div
                            className="text-gray4 float-right flex flex-row items-center justify-center text-[12px] cursor-pointer sm:float-none"
                            onClick={findPassword}
                        >
                            <div className="mt-[1.5px] w-[80px] h-[27px] flex items-center">비밀번호 찾기</div>
                            <Image
                                width={20}
                                height={20}
                                className="w-[20px] h-[20px]"
                                src="/assets/image/signImage/find_password_arrow.svg"
                                alt="페이지 이동 화살표"
                            />
                        </div>
                    </form>

                    <SocialSign
                        redirectTo={redirectTo}
                        text="간편하게 시작하기"
                        gap={6}
                        imageWidthNum={32}
                        imageHeightNum={32}
                    />

                    <div className="flex flex-row mx-auto text-body/P8_R sm:flex-col sm:gap-5">
                        <p className="text-gray4">아직 포리포의 회원이 아니신가요?</p>
                        <Link
                            href="/signup"
                            className="ml-3 underline sm:flex sm:items-center sm:justify-center sm:ml-0"
                        >
                            <p>이메일로 회원가입</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;
