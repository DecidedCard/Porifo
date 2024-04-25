"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import SignUpItem from "@/Components/Sign/SignUpItem";
import SocialSign from "@/Components/Sign/SocialSign";
import SignButton from "@/Components/Sign/SignButton";

import { supabase } from "@/util/supabase/clientSupabase";
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
    const [emailRegValid, setEmailRegValid] = useState(false);

    const { user, setUser } = useUserStore();

    const router = useRouter();
    const findPassword = () => router.replace("/findEmail");

    useEffect(() => {
        emailValidate({ email, setEmailRegValid });
        email.length >= 1 ? setEmailError(false) : setEmailError(true);
        password.length >= 1 ? setPasswordError(false) : setPasswordError(true);
        if (emailRegValid === true) setEmailError(true);
        if (password.length >= 8) setPasswordError(true);
    }, [email, password, emailRegValid]);

    useEffect(() => {
        signCheckUserPortfolio({ setRedirecTo });
    }, []);

    const signInWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            const { data: userId } = await supabase.from("portfolioInfo").select("userId");

            let confirmPortfolio;

            if (data.user !== null) {
                confirmPortfolio = userId?.find((item) => (item.userId === data.user.id ? true : false));
            }

            if (error) {
                alert("로그인에 실패했습니다.");
                throw new Error("로그인에 실패했습니다.");
            }
            setUser(data.user);

            confirmPortfolio !== undefined ? router.replace("/community") : router.replace("/mypage");
            router.refresh();
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <main>
            <div className="flex py-36 items-center justify-center bg-hihigray sm:w-full sm:py-0">
                <div className="rounded-2xl w-[454px] h-[670px] bg-white flex justify-center items-center flex-col sm:w-full sm:h-[844px] sm:justify-start">
                    <form onSubmit={signInWithEmail}>
                        <div className="flex justify-center items-center h-[86px] sm:hidden">
                            <Image
                                width={0}
                                height={0}
                                className="w-[160px] h-[54px]"
                                src="formLogo.svg"
                                alt="로그인의 form 로고"
                                priority
                            />
                        </div>

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
                            helperText={passwordError ? "" : "비밀번호가 일치하지 않습니다."}
                            color={passwordError ? "black" : "error"}
                            pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/"
                            value={password}
                            onChangeHandler={onChangePassword}
                            relative="relative"
                            eye="eye.svg"
                            eyeClose="eye_close.svg"
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
                            <div className="mt-[1.5px] w-[67px] h-[27px] flex items-center">비밀번호 찾기</div>
                            <Image
                                width={0}
                                height={0}
                                className="w-[20px] h-[20px]"
                                src="find_password_arrow.svg"
                                alt="페이지 이동 화살표"
                            />
                        </div>
                    </form>

                    <SocialSign redirectTo={redirectTo} />

                    <div className="flex flex-row mx-auto text-[12px] sm:flex-col sm:gap-5">
                        <p className="text-gray4">아직 포리포의 회원이 아니신가요? </p>
                        <a href="/signupMethod" className="ml-3 underline sm:flex sm:items-center sm:justify-center sm:ml-0">
                            이메일로 회원가입
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;
