"use client";

import React from "react";
import { useState } from "react";

import SignButton from "@/Components/Sign/SignButton";
import SignUpItem from "@/Components/Sign/SignUpItem";

import { supabase } from "@/util/supabase/clientSupabase";

const Find_Email = () => {
    const [userEmail, setUserEmail] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const changePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await supabase.auth.resetPasswordForEmail(userEmail, {
                redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/passwordChange`,
            });
            alert("이메일을 확인해 주세요.");
            setUserEmail("");
        } catch (error) {
            console.log(error);
        }
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded p-10 w-[500px] h-[250px] bg-white flex justify-center flex-col">
                    <form onSubmit={changePassword}>
                        <SignUpItem
                            type="email"
                            setLabel="이메일"
                            pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                            onChangeHandler={handleEmail}
                            placeholder="이메일을 입력해 주세요"
                        />
                        <SignButton
                            text="이메일 확인"
                            findEmail={userEmail}
                            inputDisabled={inputDisabled}
                            setInputDisabled={setInputDisabled}
                        />
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Find_Email;
