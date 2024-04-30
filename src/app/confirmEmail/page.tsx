"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/Components/Commen/Button";
import SignInputItem from "@/Components/Sign/SignInputItem";
import SignButton from "@/Components/Sign/SignButton";
import SignSelectSex from "@/Components/Sign/SignSelectSex";
import SignPhoneNumber from "@/Components/Sign/SignPhoneNumber";
import SignUploadBitrthDay from "@/Components/Sign/SignUploadBitrthDay";
import SignPersonalInfoCheck from "@/Components/Sign/SignPersonalInfoCheck";

import useInput from "@/hooks/useInput";
import { Flip, ToastContainer } from "react-toastify";

import { successNotify } from "@/util/toast";
import { nameValidate } from "@/util/sign/sign_validate";
import { signPhoneNumber } from "@/util/sign/signPhoneNumberUtill";
import { signSettingValidation } from "@/util/sign/signNumber_validation";
import serverClient from "@/util/supabase/serverClient";

const ConfirmEmail = () => {
    const [birthYear, setBirthYear] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");

    const [inputDisabled, setInputDisabled] = useState(false);

    const [name, onChangeNameHandler] = useInput();

    const [personalInfoModal, setPersonalInfoModal] = useState(false);
    const [personalInfoCheck, setPersonalInfoCheck] = useState(false);

    const [firstNumber, setFirstNumber] = useState("010");
    const [middlePhoneNumber, setMiddlePhoneNumber] = useState("");
    const [lastPhoneNumber, setLastPhoneNumber] = useState("");
    const [sex, setSex] = useState("");

    const router = useRouter();
    const birthDate = birthYear + birthMonth + birthDay;

    let phoneNumber = firstNumber + middlePhoneNumber + lastPhoneNumber;

    const onClickSelectSex = (sex: string) => setSex(sex);

    const onClickPhoneNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setFirstNumber(e.target.value);

    const onClickBirthYear = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthYear(e.target.value);

    const onClickBirthMonth = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthMonth(e.target.value);

    const onClickBirthDay = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthDay(e.target.value);

    const onChangeMiddlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) =>
        signPhoneNumber({ event, setPhoneNumber: setMiddlePhoneNumber });

    const onChangeLastPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) =>
        signPhoneNumber({ event, setPhoneNumber: setLastPhoneNumber });

    const checkRequiredPersonalInfoModal = () =>
        personalInfoModal ? setPersonalInfoModal(false) : setPersonalInfoModal(true);

    const signUpNewUser = async () => {
        try {
            const supabase = serverClient();

            const nameBoolean = nameValidate({ name });

            if (!nameBoolean) {
                return;
            }

            signSettingValidation({ birthDate, name, sex, personalInfoAgree: personalInfoCheck });

            await supabase.auth.updateUser({
                data: { birthDate, phoneNumber, sex, personalInfoAgree: personalInfoCheck, name },
            });

            if (phoneNumber.length !== 11) {
                phoneNumber = "000";
            }
            successNotify({ title: "회원가입이 완료되었습니다!" });

            return router.push("/welcome");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative sm:py-0">
            <div className="rounded-2xl w-[454px] h-[756px] bg-white flex justify-center flex-col sm:w-full sm:h-screen">
                <div className="flex justify-center sm:hidden">
                    <Image
                        className="w-[160px] h-auto"
                        width={0}
                        height={0}
                        src="formLogo.svg"
                        priority
                        alt="회원가입의 form 로고"
                    />
                </div>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Flip}
                />

                <div className="-mt-3">
                    <SignInputItem
                        setLabel="이름"
                        pattern="/[ㄱ-ㅣ가-힣]/"
                        type="text"
                        maxLength={10}
                        placeholder="이름을 입력해주세요"
                        onChangeHandler={onChangeNameHandler}
                    />
                </div>
                <SignUploadBitrthDay
                    onClickBirthYear={onClickBirthYear}
                    onClickBirthMonth={onClickBirthMonth}
                    onClickBirthDay={onClickBirthDay}
                />
                <SignSelectSex onClickSelectSex={onClickSelectSex} />

                <SignPhoneNumber
                    onClickPhoneNumber={onClickPhoneNumber}
                    onChangeMiddlePhoneNumber={onChangeMiddlePhoneNumber}
                    onChangeLastPhoneNumber={onChangeLastPhoneNumber}
                    middlePhoneNumber={middlePhoneNumber}
                    lastPhoneNumber={lastPhoneNumber}
                />
                <div
                    onClick={checkRequiredPersonalInfoModal}
                    className="mt-6 mx-5 justify-between pr-7 flex gap-x-[50px]"
                >
                    <span className="flex pl-7">
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
                    text="회원가입"
                    inputDisabled={inputDisabled}
                    setInputDisabled={setInputDisabled}
                    name={name}
                    birthDate={birthDate}
                    firstNumber={firstNumber}
                    middlePhoneNumber={middlePhoneNumber}
                    lastPhoneNumber={lastPhoneNumber}
                    sex={sex}
                    onClick={signUpNewUser}
                    personalInfoCheck={personalInfoCheck}
                />
            </div>
        </div>
    );
};

export default ConfirmEmail;
