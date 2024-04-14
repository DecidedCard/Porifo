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

import useInput from "@/hooks/useInput";

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

    const [firstNumber, setFirstNumber] = useState("010");
    const [middlePhoneNumber, setMiddlePhoneNumber] = useState("");
    const [lastPhoneNumber, setLastPhoneNumber] = useState("");
    const [sex, setSex] = useState("");

    const router = useRouter();
    const birthDate = birthYear + birthMonth + birthDay;
    const phoneNumber = firstNumber + middlePhoneNumber + lastPhoneNumber;

    useEffect(() => {
        emailValidate({ email, setEmailRegValid });
        email.length >= 1 ? setEmailError(false) : setEmailError(true);
        password.length >= 1 ? setPasswordError(false) : setPasswordError(true);
        if (emailRegValid === true) setEmailError(true);
        if (password.length >= 8) setPasswordError(true);
    }, [email, password, emailRegValid]);

    useEffect(() => {
        passwordValidate({ password, setWordRegValid, setNumberRegValid, setSpecialRegValid, setLengthRegValid });
    }, [password]);

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onClickSelectSex = (sex: string) => setSex(sex);

    const onClickPhoneNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setFirstNumber(e.target.value);

    const onClickBirthYear = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthYear(e.target.value);

    const onClickBirthMonth = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthMonth(e.target.value);

    const onClickBirthDay = (e: React.ChangeEvent<HTMLSelectElement>) => setBirthDay(e.target.value);

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

    const signUpNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            signUpValidation({ phoneNumber, birthDate, email, password });
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: "http://localhost:3000/signin",
                    data: {
                        birthDate,
                        user_name: name,
                        phoneNumber,
                        sex,
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
            <div className="rounded p-10 w-[500px] h-[860px] bg-white flex justify-center flex-col">
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
                        color={passwordError ? "black" : "error"}
                        pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
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
                    />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
