"use client";

import React, { useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { signSettingValidation } from "@/util/sign/signNumber_validation";
import SignPhoneNumber from "@/Components/Sign/SignPhoneNumber";
import Button from "@/Components/Commen/Button";
const clickSex = ["남자", "여자"];

const SocialSeting = () => {
    const [firstNumber, setFirstNumber] = useState("010");
    const [middlePhoneNumber, setMiddlePhoneNumber] = useState("");
    const [lastPhoneNumber, setLastPhoneNumber] = useState("");

    const [birthYear, setBirthYear] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");

    const [sex, setSex] = useState("");
    const router = useRouter();
    const thisYear = new Date();
    thisYear.getFullYear();
    const onClickFindSex = (sex: string) => setSex(sex);

    const onClickPhoneNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setFirstNumber(e.target.value);
    const onChangeMiddlePhoneNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, "");
        setMiddlePhoneNumber(onlyNumber);
    };

    const onChangeLastPhoneNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, "");
        setLastPhoneNumber(onlyNumber);
    };
    const phoneNumber = firstNumber + middlePhoneNumber + lastPhoneNumber;

    const onClickBirthYear = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthYear(e.target.value);

    const onClickBirthMonth = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthMonth(e.target.value);

    const onClickBirthDay = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthDay(e.target.value);
    const birthDate = birthYear + birthMonth + birthDay;

    const signUpNewUser = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            signSettingValidation({ phoneNumber, birthDate, sex });

            await supabase.auth.updateUser({
                data: { phoneNumber, birthDate, sex },
            });

            return router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    const BIRTHDAY_YEAR_LIST = Array.from({ length: 30 }, (_, i) => `${thisYear.getFullYear() - 20 - i}년`);
    const BIRTHDAY_MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
    const BIRTHDAY_DAY_LIST = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);
    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded p-10 w-[500px] h-[500px] bg-white flex justify-center flex-col">
                <form onSubmit={signUpNewUser}>
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

                    <div className="mb-5 mx-auto w-fit h-fit flex flex-col">
                        <label className="mb-5">생년월일</label>

                        <div className="flex flex-row gap-2">
                            <select
                                onChange={onClickBirthYear}
                                className="flex-1 border border-solid size-14 border-zinc-300 rounded-lg w-[110px] p-2 text-sm font-nomal"
                            >
                                {BIRTHDAY_YEAR_LIST.map((year, index) => (
                                    <option value={year} key={index}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <select
                                onChange={onClickBirthMonth}
                                className="flex-1 border border-solid size-14 border-zinc-300 rounded-lg w-[110px] p-2 text-sm font-nomal"
                            >
                                {BIRTHDAY_MONTH_LIST.map((month, index) => (
                                    <option key={index}>{month}</option>
                                ))}
                            </select>
                            <select
                                onChange={onClickBirthDay}
                                className="flex-1 border border-solid size-14 border-zinc-300 rounded-lg w-[110px] p-2 text-sm font-nomal"
                            >
                                {BIRTHDAY_DAY_LIST.map((day, index) => (
                                    <option key={index}>{day}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <SignPhoneNumber
                        onClickPhoneNumber={onClickPhoneNumber}
                        onChangeMiddlePhoneNumber={onChangeMiddlePhoneNumber}
                        onChangeLastPhoneNumber={onChangeLastPhoneNumber}
                        middlePhoneNumber={middlePhoneNumber}
                        lastPhoneNumber={lastPhoneNumber}
                    />

                    <p className="mt-5 mx-9">성별</p>
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
