"use client";

import React, { useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";

import SignUpItem from "@/Components/Sign/SignUpItem";
import useGetUser from "@/hooks/sign/useGetUser";
import useInput from "@/hooks/useInput";
import { signSettingValidation } from "@/util/sign/signNumber_validation";
import Input from "@/Components/Commen/Input";
import Button from "@/Components/Commen/Button";
const clickSex = ["남자", "여자"];

const SocialSeting = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setage] = useState("");
    const [sex, setSex] = useState("");
    const router = useRouter();
    useGetUser();

    const onClickFindSex = (sex: string) => setSex(sex);

    const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, "");
        setage(onlyNumber);
    };
    const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, "");
        setPhoneNumber(onlyNumber);
    };

    const signUpNewUser = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            signSettingValidation({ phoneNumber, age, sex });

            await supabase.auth.updateUser({
                data: { age, phoneNumber, sex },
            });

            return router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded p-10 w-[500px] h-[500px] bg-white flex justify-center flex-col">
                <form onSubmit={signUpNewUser}>
                    <h1 className="text-center">추가 정보를 입력해 주세요.</h1>
                    <SignUpItem
                        setLabel="나이"
                        type="text"
                        value={age}
                        pattern="[0-9]{2}"
                        maxLength={2}
                        placeholder="나이를 입력해주세요"
                        onChangeHandler={onChangeAge}
                    />
                    <SignUpItem
                        setLabel="핸드폰 번호"
                        type="text"
                        placeholder="비밀번호를 작성해주세요"
                        onChangeHandler={onChangePhoneNumber}
                    />

                    <p className="mx-9">성별</p>
                    <div className="mx-9 mt-[9px] mb-8 h-fit flex flex-row ">
                        {clickSex.map((item: string, idx: number) => {
                            return (
                                <div key={idx} className="flex flex-row my-auto mr-4">
                                    <label className="mr-1">{item}</label>
                                    <input
                                        type="radio"
                                        name="sex"
                                        value={item}
                                        id={item}
                                        onClick={() => onClickFindSex(item)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-[350px] mt-8 mb-6 mx-auto">
                        <Button text="모두 입력해 주세요" border="none" size="m" color="primary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SocialSeting;
