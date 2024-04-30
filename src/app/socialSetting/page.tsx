"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import SignSelectSex from "@/Components/Sign/SignSelectSex";
import SignUploadBitrthDay from "@/Components/Sign/SignUploadBitrthDay";
import SignPhoneNumber from "@/Components/Sign/SignPhoneNumber";
import SignPersonalInfoCheck from "@/Components/Sign/SignPersonalInfoCheck";
import SignButton from "@/Components/Sign/SignButton";

import serverClient from "@/util/supabase/serverClient";
import { signPhoneNumber } from "@/util/sign/signPhoneNumberUtill";
import { signSettingValidation } from "@/util/sign/signNumber_validation";

const SocialSeting = () => {
    const [firstNumber, setFirstNumber] = useState("010");
    const [middlePhoneNumber, setMiddlePhoneNumber] = useState("");
    const [lastPhoneNumber, setLastPhoneNumber] = useState("");

    const [birthYear, setBirthYear] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");

    const [sex, setSex] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [personalInfoModal, setPersonalInfoModal] = useState(false);
    const [personalInfoCheck, setPersonalInfoCheck] = useState(false);

    let phoneNumber = firstNumber + middlePhoneNumber + lastPhoneNumber;
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

    const checkRequiredPersonalInfoModal = () =>
        personalInfoModal ? setPersonalInfoModal(false) : setPersonalInfoModal(true);

    const signUpNewUser = async (e: React.FormEvent) => {
        e.preventDefault();

        const supabase = serverClient();

        try {
            signSettingValidation({ birthDate, sex, personalInfoAgree: personalInfoCheck });
            if (phoneNumber.length !== 11) {
                phoneNumber = "000";
            }
            await supabase.auth.updateUser({
                data: { birthDate, phoneNumber, sex, personalInfoAgree: personalInfoCheck },
            });

            return router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded-2xl p-10 w-[500px] h-[600px] bg-white flex justify-center flex-col">
                <form onSubmit={signUpNewUser}>
                    <div className="flex justify-center">
                        <Image
                            width={0}
                            height={0}
                            className="w-[160px] h-[140px]"
                            src="/assets/image/signImage/formLogo.svg"
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

                    <div onClick={checkRequiredPersonalInfoModal} className="mt-6 mx-9 flex gap-x-[113px]">
                        <span className="flex">
                            <Image
                                className="w-6 h-6 mr-1"
                                src={personalInfoCheck ? "/assets/image/checkTrue.svg" : "/assets/image/checkFalse.svg"}
                                width={0}
                                height={0}
                                alt="check"
                            />
                            <span className="flex mt-1">
                                개인정보 수집 및 이용 <p className="ml-2 text-red-400">(필수)</p>
                            </span>
                        </span>
                        <Image
                            width={0}
                            height={0}
                            className="w-[20px] h-[20px]"
                            src="find_password_arrow.svg"
                            alt="페이지 이동 화살표"
                        />
                    </div>

                    {personalInfoModal ? (
                        <SignPersonalInfoCheck
                            setPersonalInfoModal={setPersonalInfoModal}
                            setPersonalInfoCheck={setPersonalInfoCheck}
                        />
                    ) : null}

                    <SignButton
                        text="모두 입력해 주세요"
                        inputDisabled={inputDisabled}
                        setInputDisabled={setInputDisabled}
                        birthDate={birthDate}
                        sex={sex}
                        personalInfoCheck={personalInfoCheck}
                    />
                </form>
            </div>
        </div>
    );
};

export default SocialSeting;
