"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import SignButton from "@/Components/Sign/SignButton";
import SignInputItem from "@/Components/Sign/SignInputItem";
import SignPasswordValidate from "@/Components/Sign/SignPasswordValidate";

import { supabase } from "@/util/supabase/clientSupabase";
import { passwordValidate } from "@/util/sign/sign_validate";

const Password_Change = () => {
    const [userPassword, setUserPassword] = useState("");
    const [confirmUserPassword, setConfirmUserPassword] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);

    const [isRecovery, setRecovery] = useState(true);

    const router = useRouter();

    const confirmHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userPassword !== confirmUserPassword) {
            setUserPassword("");
            setConfirmUserPassword("");
            alert("비밀번호가 일치하지 않습니다!");
            return;
        }
        await supabase.auth.updateUser({ password: userPassword });

        setRecovery(false);
    };

    const finishChangePassword = () => router.replace("/signin");

    const { data } = supabase.auth.onAuthStateChange(async (event) => {
        if (event == "PASSWORD_RECOVERY") {
            setRecovery(true);
        }

        data.subscription.unsubscribe();
    });
    const passwordRegValid = passwordValidate({ password: userPassword });

    const confirmPasswordRegValid = passwordValidate({
        password: confirmUserPassword,
    });

    useEffect(() => {
        if (userPassword && confirmUserPassword) {
            setInputDisabled(true);
        } else {
            setInputDisabled(false);
        }
    }, [userPassword, confirmUserPassword]);

    const handleUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);

    const handleConfirmUserPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
        setConfirmUserPassword(e.target.value);

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative sm:py-0">
                {isRecovery ? (
                    <div className="rounded-2xl p-10 w-[454px] h-[520px] bg-white flex justify-center flex-col sm:items-center sm:p-0 sm:w-full sm:h-screen">
                        <form onSubmit={confirmHandler}>
                            <div className="flex justify-center sm:hidden">
                                <Image
                                    width={0}
                                    height={0}
                                    className="w-[160px] h-[140px]"
                                    src="/assets/image/signImage/formLogo.svg"
                                    alt="로그인의 form 로고"
                                    priority
                                />
                            </div>
                            <p className="hidden sm:flex sm:items-center sm:justify-center sm:text-[14px] sm:mb-10">
                                새로운 비밀번호를 입력해주세요.
                            </p>
                            <SignInputItem
                                setLabel="비밀번호"
                                placeholder="비밀번호를 작성해주세요"
                                pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/"
                                onChangeHandler={handleUserPassword}
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
                                setLabel="비밀번호 확인"
                                placeholder="비밀번호를 확인해 주세요"
                                pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                                onChangeHandler={handleConfirmUserPassword}
                                relative="relative"
                                eye="/assets/image/signImage/eye.svg"
                                eyeClose="/assets/image/signImage/eye_close.svg"
                            />

                            <SignPasswordValidate
                                lengthRegValid={confirmPasswordRegValid.lengthRegBoolean}
                                numberRegValid={confirmPasswordRegValid.numberRegBoolean}
                                wordRegValid={confirmPasswordRegValid.wordRegBoolean}
                                specialRegValid={confirmPasswordRegValid.specialRegBoolean}
                            />

                            <SignButton
                                text="비밀번호 재설정 완료"
                                password={userPassword}
                                confirmUserPassword={confirmUserPassword}
                                inputDisabled={inputDisabled}
                                setInputDisabled={setInputDisabled}
                            />
                        </form>
                    </div>
                ) : (
                    <div className="rounded-2xl p-10 w-[454px] h-[500px] items-center bg-white flex justify-center flex-col sm:p-0 sm:w-full sm:h-screen">
                        <div className="flex flex-col justify-center items-center w-[274px] h-[324px]">
                            <p className="text-[108px]">🧩</p>
                            <p className="flex items-center text-center justify-center leading-normal mt-8 font-medium text-[20px] w-[274px] h-[44px]">
                                비밀번호가 재설정되었습니다.
                                <br />
                                로그인 후 포리포를 이용해 보세요.
                            </p>
                        </div>
                        <SignButton
                            text="로그인 페이지로 이동"
                            password={userPassword}
                            inputDisabled={!inputDisabled}
                            setInputDisabled={setInputDisabled}
                            onClick={finishChangePassword}
                        />
                    </div>
                )}
            </div>
        </main>
    );
};

export default Password_Change;
