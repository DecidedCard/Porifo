"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/util/supabase/clientSupabase";
import SignInputItem from "@/Components/Sign/SignInputItem";
import SignButton from "@/Components/Sign/SignButton";
import SignPasswordValidate from "@/Components/Sign/SignPasswordValidate";

import { passwordValidate } from "@/util/sign/sign_validate";

const Password_Change = () => {
    const [userPassword, setUserPassword] = useState("");
    const [confirmUserPassword, setConfirmUserPassword] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);

    const [isRecovery, setRecovery] = useState(false);
    const [wordRegValid, setWordRegValid] = useState(false);
    const [specialRegValid, setSpecialRegValid] = useState(false);
    const [numberRegValid, setNumberRegValid] = useState(false);
    const [lengthRegValid, setLengthRegValid] = useState(false);

    const [wordConfirmRegValid, setWordRegConfirmValid] = useState(false);
    const [specialConfirmRegValid, setSpecialConfirmRegValid] = useState(false);
    const [numberConfirmRegValid, setNumberConfirmRegValid] = useState(false);
    const [lengthConfirmRegValid, setLengthConfirmRegValid] = useState(false);

    const router = useRouter();

    const confirmHandler = async () => {
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

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event) => {
            if (
                event === "INITIAL_SESSION" ||
                event == "SIGNED_IN" ||
                event == "PASSWORD_RECOVERY" ||
                event === "USER_UPDATED"
            ) {
                setRecovery(true);
            }

            data.subscription.unsubscribe();
        });
    }, []);

    useEffect(() => {
        passwordValidate({
            password: userPassword,
            setWordRegValid,
            setNumberRegValid,
            setSpecialRegValid,
            setLengthRegValid,
        });
        passwordValidate({
            password: confirmUserPassword,
            setWordRegValid: setWordRegConfirmValid,
            setNumberRegValid: setNumberConfirmRegValid,
            setSpecialRegValid: setSpecialConfirmRegValid,
            setLengthRegValid: setLengthConfirmRegValid,
        });
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
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                {isRecovery ? (
                    <div className="rounded-2xl p-10 w-[454px] h-[520px] bg-white flex justify-center flex-col">
                        <form onSubmit={confirmHandler}>
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
                            <SignInputItem
                                setLabel="비밀번호"
                                placeholder="비밀번호를 작성해주세요"
                                pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                                onChangeHandler={handleUserPassword}
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
                            <SignInputItem
                                setLabel="비밀번호 확인"
                                placeholder="비밀번호를 확인해 주세요"
                                pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                                onChangeHandler={handleConfirmUserPassword}
                                relative="relative"
                                eye="eye.svg"
                                eyeClose="eye_close.svg"
                            />

                            <SignPasswordValidate
                                lengthRegValid={lengthConfirmRegValid}
                                numberRegValid={numberConfirmRegValid}
                                wordRegValid={wordConfirmRegValid}
                                specialRegValid={specialConfirmRegValid}
                            />

                            <SignButton
                                text="비밀번호"
                                password={userPassword}
                                confirmUserPassword={confirmUserPassword}
                                inputDisabled={inputDisabled}
                                setInputDisabled={setInputDisabled}
                            />
                        </form>
                    </div>
                ) : (
                    <div className="rounded-2xl p-10 w-[454px] h-[500px] items-center bg-white flex justify-center flex-col">
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
