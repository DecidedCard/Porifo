"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { supabase } from "@/util/supabase/clientSupabase";
import { passwordValidate } from "@/util/sign/password_validate";

import SignUpItem from "@/Components/Sign/SignUpItem";
import SocialSign from "@/Components/Sign/SocialSign";
import SignButton from "@/Components/Sign/SignButton";
import SignValidate from "@/Components/Sign/SignValidate";

import useInput from "@/hooks/useInput";

const SignIn = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, setPassword] = useState("");

    const [inputDisabled, setInputDisabled] = useState(false);
    const [wordRegValid, setWordRegValid] = useState(false);
    const [specialRegValid, setSpecialRegValid] = useState(false);
    const [numberRegValid, setNumberRegValid] = useState(false);
    const [lengthRegValid, setLengthRegValid] = useState(false);

    const router = useRouter();
    const findPassword = () => router.replace("/find_email");
    const onSubmitLoginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasAllInput = email.trim() !== "" && password.trim() !== "";
        try {
            if (hasAllInput) {
                alert("값이 입력 되었습니다.");
            }
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                console.error(error);
                alert("로그인에 실패했습니다.");
                throw new Error("로그인에 실패했습니다.");
            }

            return router.replace("/");
        } catch (error) {
            return Promise.reject(error);
        }
    };
    useEffect(() => {
        passwordValidate({ password, setWordRegValid, setNumberRegValid, setSpecialRegValid, setLengthRegValid });
    }, [password]);

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded p-10 w-[500px] h-[750px] bg-white flex justify-center flex-col">
                    <form onSubmit={onSubmitLoginUser}>
                        <div className="flex justify-center">
                            <Image
                                width={0}
                                height={0}
                                className="w-[160px] h-[140px]"
                                src="formLogo.svg"
                                alt="로그인의 form 로고"
                                priority
                            />
                        </div>
                        <SignUpItem
                            setLabel="이메일"
                            type="email"
                            placeholder="이메일을 입력해주세요"
                            pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                            onChangeHandler={onChangeEmailHandler}
                        />

                        <SignUpItem
                            setLabel="비밀번호"
                            placeholder="비밀번호를 작성해주세요"
                            pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                            value={password}
                            onChangeHandler={onChangePassword}
                            relative="relative"
                            eye="eye.svg"
                            eyeClose="eye_close.svg"
                        />
                        <SignValidate
                            lengthRegValid={lengthRegValid}
                            numberRegValid={numberRegValid}
                            wordRegValid={wordRegValid}
                            specialRegValid={specialRegValid}
                        />
                        <div
                            className="mx-9 mb-8 text-slate-400 float-right flex flex-row cursor-pointer"
                            onClick={findPassword}
                        >
                            <div className="mt-[1.5px]">비밀번호 찾기</div>
                            <Image
                                width={0}
                                height={0}
                                className="w-[20px] h-[20px]"
                                src="find_password_arrow.svg"
                                alt="페이지 이동 화살표"
                            />
                        </div>
                        <SignButton
                            text="로그인"
                            inputDisabled={inputDisabled}
                            setInputDisabled={setInputDisabled}
                            email={email}
                            loginPassword={password}
                        />
                    </form>
                    <SocialSign />
                    <div className="mx-auto">
                        아직 포리포의 회원이 아니신가요?{" "}
                        <a href="/signup_method" className=" ml-3 underline">
                            회원가입
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;
