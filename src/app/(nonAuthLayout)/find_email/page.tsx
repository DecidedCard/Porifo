"use client";
import React from "react";
import { useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import Input from "@/Components/Commen/Input";

const Find_Email = () => {
    const [userEmail, setUserEmail] = useState("");

    const changePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await supabase.auth.resetPasswordForEmail(userEmail, {
                redirectTo: "http://localhost:3000/password_change",
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
                <div className="rounded p-10 w-[500px] h-[750px] bg-white flex justify-center flex-col">
                    <form onSubmit={changePassword}>
                        <label className="my-5">이메일</label>
                        <Input type="text" onChange={handleEmail} placeholder="이메일을 입력해 주세요" />

                        <button>확인</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Find_Email;
