"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";
import SignUpItem from "@/Components/Sign/SignUpItem";

const Password_Change = () => {
    const [userPassword, setUserPassword] = useState("");
    const [confirmUserPassword, setConfirmUserPassword] = useState("");
    const [isRecovery, setRecovery] = useState(false);
    const router = useRouter();
    const confirmHandler = async () => {
        if (userPassword !== confirmUserPassword) {
            setUserPassword("");
            setConfirmUserPassword("");
            alert("비밀번호가 일치하지 않습니다!");
        }
        await supabase.auth.updateUser({ password: userPassword });
        return router.replace("/signin");
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
                <div className="rounded p-10 w-[500px] h-[750px] bg-white flex justify-center flex-col">
                    {isRecovery && (
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
                        </>
                    )}

                    <button onClick={confirmHandler}>확인</button>
                </div>
            </div>
        </main>
    );
};

export default Password_Change;
