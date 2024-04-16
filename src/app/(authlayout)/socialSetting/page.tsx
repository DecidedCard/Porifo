"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import SignSelectSex from "@/Components/Sign/SignSelectSex";
import SignUploadBitrthDay from "@/Components/Sign/SignUploadBitrthDay";
import SignPhoneNumber from "@/Components/Sign/SignPhoneNumber";
import Button from "@/Components/Commen/Button";
import { signPhoneNumber } from "@/util/sign/signPhoneNumberUtill";
import { supabase } from "@/util/supabase/clientSupabase";
import { signSettingValidation } from "@/util/sign/signNumber_validation";

const SocialSeting = () => {
    const [firstNumber, setFirstNumber] = useState("010");
    const [middlePhoneNumber, setMiddlePhoneNumber] = useState("");
    const [lastPhoneNumber, setLastPhoneNumber] = useState("");

    const [birthYear, setBirthYear] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");

    const [sex, setSex] = useState("");

    const [personalInfoCheck, setPersonalInfoCheck] = useState(false);

    const phoneNumber = firstNumber + middlePhoneNumber + lastPhoneNumber;
    const birthDate = birthYear + birthMonth + birthDay;

    const router = useRouter();

    const onClickSelectSex = (sex: string) => setSex(sex);

    const onClickPhoneNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setFirstNumber(e.target.value);

    const onChangeMiddlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) =>
        signPhoneNumber({ event, setPhoneNumber: setMiddlePhoneNumber });

    const onChangeLastPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) =>
        signPhoneNumber({ event, setPhoneNumber: setLastPhoneNumber });

    const onClickBirthYear = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthYear(e.target.value);

    const onClickBirthMonth = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthMonth(e.target.value);

    const onClickBirthDay = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthDay(e.target.value);

    const checkRequiredPersonalInfo = () =>
        personalInfoCheck ? setPersonalInfoCheck(false) : setPersonalInfoCheck(true);

    const signUpNewUser = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            signSettingValidation({ birthDate, phoneNumber, sex });

            await supabase.auth.updateUser({
                data: { birthDate, phoneNumber, sex },
            });

            return router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded p-10 w-[500px] h-[600px] bg-white flex justify-center flex-col">
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
                    <SignUploadBitrthDay
                        onClickBirthYear={onClickBirthYear}
                        onClickBirthMonth={onClickBirthMonth}
                        onClickBirthDay={onClickBirthDay}
                    />

                    <SignPhoneNumber
                        onClickPhoneNumber={onClickPhoneNumber}
                        onChangeMiddlePhoneNumber={onChangeMiddlePhoneNumber}
                        onChangeLastPhoneNumber={onChangeLastPhoneNumber}
                        middlePhoneNumber={middlePhoneNumber}
                        lastPhoneNumber={lastPhoneNumber}
                    />
                    <SignSelectSex onClickSelectSex={onClickSelectSex} />
                    <div className="flex mx-8 cursor-pointer" onClick={checkRequiredPersonalInfo}>
                        <Image
                            className="w-6 h-6 mr-1"
                            src={personalInfoCheck ? "/assets/image/checkTrue.svg" : "/assets/image/checkFalse.svg"}
                            width={0}
                            height={0}
                            alt="check"
                        />
                        <span className="mt-1 flex">
                            개인정보 수집 및 이용 <p className="ml-2 text-red-400">(필수)</p>
                        </span>
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
