"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import SignUpItem from "@/Components/Sign/SignUpItem";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import { emailValidate } from "@/util/sign/sign_validate";
import { signUpValidation } from "@/util/sign/signNumber_validation";
import Input from "@/Components/Commen/Input";
import { passwordValidate } from "@/util/sign/sign_validate";
import SignPasswordValidate from "@/Components/Sign/SignPasswordValidate";
import SignButton from "@/Components/Sign/SignButton";
import Image from "next/image";
const clickSex = ["남자", "여자"];
const clickNumber = ["010", "011"];
import SignPhoneNumber from "@/Components/Sign/SignPhoneNumber";

const SignUp = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);

    const [inputDisabled, setInputDisabled] = useState(false);
    const [wordRegValid, setWordRegValid] = useState(false);
    const [specialRegValid, setSpecialRegValid] = useState(false);
    const [numberRegValid, setNumberRegValid] = useState(false);
    const [lengthRegValid, setLengthRegValid] = useState(false);

    const [emailRegValid, setEmailRegValid] = useState(false);

    const [name, onChangeNameHandler] = useInput();

    const [age, setage] = useState("");
    const [firstNumber, setFirstNumber] = useState("010");
    const [middlePhoneNumber, setMiddlePhoneNumber] = useState("");
    const [lastPhoneNumber, setLastPhoneNumber] = useState("");
    const [sex, setSex] = useState("");

    const router = useRouter();
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

    const onClickFindSex = (sex: string) => setSex(sex);
    const onClickPhoneNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setFirstNumber(e.target.value);

    const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, "");
        setage(onlyNumber);
    };

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

    const signUpNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            signUpValidation({ phoneNumber, age, email, password });
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: "http://localhost:3000/signin",
                    data: {
                        age,
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
                    <SignUpItem
                        setLabel="나이"
                        type="text"
                        value={age}
                        pattern="[0-9]{2}"
                        maxLength={2}
                        placeholder="나이를 입력해주세요"
                        onChangeHandler={onChangeAge}
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
                        age={age}
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
