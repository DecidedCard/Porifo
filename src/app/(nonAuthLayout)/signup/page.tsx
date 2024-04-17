"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import SignUpItem from "@/Components/Sign/SignUpItem";
import SignSelectSex from "@/Components/Sign/SignSelectSex";
import SignPasswordValidate from "@/Components/Sign/SignPasswordValidate";
import SignUploadBitrthDay from "@/Components/Sign/SignUploadBitrthDay";
import SignButton from "@/Components/Sign/SignButton";
import SignPhoneNumber from "@/Components/Sign/SignPhoneNumber";
import SignPersonalInfoCheck from "@/Components/Sign/SignPersonalInfoCheck";

import useInput from "@/hooks/useInput";
import { signPhoneNumber } from "@/util/sign/signPhoneNumberUtill";
import { supabase } from "@/util/supabase/clientSupabase";
import { emailValidate } from "@/util/sign/sign_validate";
import { signUpValidation } from "@/util/sign/signNumber_validation";
import { passwordValidate } from "@/util/sign/sign_validate";

const SignUp = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);

    const [birthYear, setBirthYear] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");

    const [inputDisabled, setInputDisabled] = useState(false);
    const [wordRegValid, setWordRegValid] = useState(false);
    const [specialRegValid, setSpecialRegValid] = useState(false);
    const [numberRegValid, setNumberRegValid] = useState(false);
    const [lengthRegValid, setLengthRegValid] = useState(false);

    const [emailRegValid, setEmailRegValid] = useState(false);

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

    useEffect(() => {
        emailValidate({ email, setEmailRegValid });
        email.length >= 1 ? setEmailError(false) : setEmailError(true);

        if (emailRegValid === true) setEmailError(true);
    }, [email, emailRegValid]);

    useEffect(() => {
        const confirmPassword = wordRegValid && specialRegValid && numberRegValid && lengthRegValid;
        passwordValidate({ password, setWordRegValid, setNumberRegValid, setSpecialRegValid, setLengthRegValid });

        confirmPassword && password.length >= 8 ? setPasswordError(true) : setPasswordError(false);
    }, [wordRegValid, specialRegValid, numberRegValid, lengthRegValid, password]);

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

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

    const signUpNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            signUpValidation({ birthDate, email, password, personalInfoAgree: personalInfoCheck });
            if (phoneNumber.length !== 11) {
                phoneNumber = "000";
            }
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/signin`,
                    data: {
                        birthDate,
                        user_name: name,
                        sex,
                        phoneNumber,
                        personalInfoAgree: personalInfoCheck,
                    },
                },
            });

            if (error) {
                throw new Error();
            }

            return router.push("/welcome");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded p-10 w-[500px] h-[900px] bg-white flex justify-center flex-col">
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

                    <SignUpItem
                        setLabel="이메일"
                        type="email"
                        helperText={emailError ? "" : "이메일 형식에 맞춰 입력해 주세요."}
                        color={emailError ? "black" : "error"}
                        placeholder="이메일을 입력해주세요"
                        pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                        onChangeHandler={onChangeEmailHandler}
                    />
                    <SignUpItem
                        setLabel="비밀번호"
                        placeholder="비밀번호를 작성해주세요"
                        color={passwordError ? "success" : "error"}
                        pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
                        "
                        onChangeHandler={onChangePassword}
                        relative="relative"
                        eye="eye.svg"
                        eyeClose="eye_close.svg"
                    />
                    <SignPasswordValidate
                        lengthRegValid={lengthRegValid}
                        numberRegValid={numberRegValid}
                        wordRegValid={wordRegValid}
                        specialRegValid={specialRegValid}
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
                        text="회원가입"
                        inputDisabled={inputDisabled}
                        setInputDisabled={setInputDisabled}
                        email={email}
                        password={password}
                        name={name}
                        birthDate={birthDate}
                        firstNumber={firstNumber}
                        middlePhoneNumber={middlePhoneNumber}
                        lastPhoneNumber={lastPhoneNumber}
                        sex={sex}
                        personalInfoCheck={personalInfoCheck}
                    />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
