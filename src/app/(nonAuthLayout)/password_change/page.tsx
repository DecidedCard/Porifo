"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";
import { passwordValidate } from "@/util/sign/password_validate";
import SignUpItem from "@/Components/Sign/SignUpItem";
import SignButton from "@/Components/Sign/SignButton";
import SignValidate from "@/Components/Sign/SignValidate";
import Button from "@/Components/Commen/Button";

const Password_Change = () => {
    const [userPassword, setUserPassword] = useState("");
    const [confirmUserPassword, setConfirmUserPassword] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [isRecovery, setRecovery] = useState(false);
    const [wordRegValid, setWordRegValid] = useState(false);
    const [specialRegValid, setSpecialRegValid] = useState(false);
    const [numberRegValid, setNumberRegValid] = useState(false);
    const [lengthRegValid, setLengthRegValid] = useState(false);

    const router = useRouter();
    const handleSigninBtn = () => router.replace("/signin");

    const confirmHandler = async () => {
        passwordValidate({
            password: userPassword,
            setWordRegValid,
            setNumberRegValid,
            setSpecialRegValid,
            setLengthRegValid,
        });
        if (userPassword !== confirmUserPassword) {
            setUserPassword("");
            setConfirmUserPassword("");
            alert("비밀번호가 일치하지 않습니다!");
        }

        await supabase.auth.updateUser({ password: userPassword });
    };

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event == "PASSWORD_RECOVERY") {
                setRecovery(true);
            }
        });
    }, []);

    const handleUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);
    const handleConfirmUserPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
        setConfirmUserPassword(e.target.value);

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded p-10 w-[500px] h-[400px] bg-white flex justify-center flex-col">
                    <form onSubmit={confirmHandler}>
                        {isRecovery ? (
                            <>
                                <SignUpItem
                                    setLabel="비밀번호"
                                    placeholder="비밀번호를 작성해주세요"
                                    pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                                    onChangeHandler={handleUserPassword}
                                    relative="relative"
                                    eye="eye.svg"
                                    eyeClose="eye_close.svg"
                                />
                                <SignValidate
                                    password={userPassword}
                                    lengthRegValid={lengthRegValid}
                                    numberRegValid={numberRegValid}
                                    wordRegValid={wordRegValid}
                                    specialRegValid={specialRegValid}
                                />
                                <SignUpItem
                                    setLabel="비밀번호 확인"
                                    placeholder="비밀번호를 확인해 주세요"
                                    pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                                    onChangeHandler={handleConfirmUserPassword}
                                    relative="relative"
                                    eye="eye.svg"
                                    eyeClose="eye_close.svg"
                                />
                                <SignButton
                                    text="비밀번호"
                                    password={userPassword}
                                    inputDisabled={inputDisabled}
                                    setInputDisabled={setInputDisabled}
                                />
                            </>
                        ) : (
                            <Button
                                size="m"
                                text="로그인 페이지로 이동하기"
                                fontSize="l"
                                color="secondary"
                                onClick={handleSigninBtn}
                            />
                        )}
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Password_Change;
