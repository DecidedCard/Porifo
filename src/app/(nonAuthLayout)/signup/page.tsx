"use client";

import { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";
import Image from "next/image";

import SignUpItem from "@/Components/Sign/SignUpItem";
import SignSelectSex from "@/Components/Sign/SignSelectSex";

import SignUploadBitrthDay from "@/Components/Sign/SignUploadBitrthDay";
import SignButton from "@/Components/Sign/SignButton";
import SignPhoneNumber from "@/Components/Sign/SignPhoneNumber";
import SignPersonalInfoCheck from "@/Components/Sign/SignPersonalInfoCheck";

import useInput from "@/hooks/useInput";
import { signPhoneNumber } from "@/util/sign/signPhoneNumberUtill";
import { supabase } from "@/util/supabase/clientSupabase";

import { signSettingValidation } from "@/util/sign/signNumber_validation";

const SignUp = () => {
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

    const onClickToast = () =>
        toast.success("메일 전송중에 있습니다!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        });

    const signUpNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            signSettingValidation({ birthDate, name, sex, personalInfoAgree: personalInfoCheck });
            if (phoneNumber.length !== 11) {
                phoneNumber = "000";
            }

            return router.push("/confirmEmail");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded-2xl p-10 w-[454px] h-[756px] bg-white flex justify-center flex-col">
                <form onSubmit={signUpNewUser}>
                    <div className="flex justify-center">
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
                        <SignUpItem
                            setLabel="이름"
                            type="text"
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
                    <div onClick={checkRequiredPersonalInfoModal} className="mt-6 mx-9 flex gap-x-[50px]">
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
                        text="회원가입"
                        inputDisabled={inputDisabled}
                        setInputDisabled={setInputDisabled}
                        name={name}
                        birthDate={birthDate}
                        firstNumber={firstNumber}
                        middlePhoneNumber={middlePhoneNumber}
                        lastPhoneNumber={lastPhoneNumber}
                        sex={sex}
                        onClick={onClickToast}
                        personalInfoCheck={personalInfoCheck}
                    />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
