"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";
import { passwordValidate } from "@/util/sign/password_validate";
import SignUpItem from "@/Components/Sign/SignUpItem";
import SignButton from "@/Components/Sign/SignButton";
import SignValidate from "@/Components/Sign/SignValidate";

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
        }

        await supabase.auth.updateUser({ password: userPassword });
    };

    const finishChangePassword = () => router.push("/signin");

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event) => {
            if (event == "PASSWORD_RECOVERY") {
                setRecovery(true);
            }
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
                    <div className="rounded p-10 w-[500px] h-[520px] bg-white flex justify-center flex-col">
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

                            <SignValidate
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
                    <div className="rounded p-10 w-[500px] h-[380px] bg-white flex justify-center flex-col">
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
                        <p className="text-center mb-[40px] flex-row text-[108px]">👏</p>
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
