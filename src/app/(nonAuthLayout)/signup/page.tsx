"use client";

import { useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import SignUpItem from "@/Components/Sign/SignUpItem";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import { signUpValidation } from "@/util/sign/sign_validation";
import Input from "@/Components/Commen/Input";
import Button from "@/Components/Commen/Button";
import Image from "next/image";
const clickSex = ["남자", "여자"];
import { passwordValidate } from "@/util/sign/password_validate";
import SignValidate from "@/Components/Sign/SignValidate";
const clickNumber = ["010", "011"];

const SignUp = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, setPassword] = useState("");

    const [wordRegValid, setWordRegValid] = useState(false);
    const [specialRegValid, setSpecialRegValid] = useState(false);
    const [numberRegValid, setNumberRegValid] = useState(false);
    const [lengthRegValid, setLengthRegValid] = useState(false);

    const [name, onChangeNameHandler] = useInput();
    const [age, onChangeAgeHandler] = useInput();
    const [firstNumber, setFirstNumber] = useState("010");
    const [middlePhoneNumber, onChangeMiddleNumberHandler] = useInput();
    const [lastPhoneNumber, onChangeLastNumberHandler] = useInput();
    const [sex, setSex] = useState("");

    const router = useRouter();

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);

        passwordValidate({ password, setWordRegValid, setNumberRegValid, setSpecialRegValid, setLengthRegValid });
    };

    const onClickFindSex = (sex: string) => setSex(sex);
    const onClickPhoneNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setFirstNumber(e.target.value);

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
            return router.push("/signin");
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
                        placeholder="이메일을 입력해주세요"
                        pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                        onChangeHandler={onChangeEmailHandler}
                    />
                    <SignUpItem
                        setLabel="비밀번호"
                        placeholder="비밀번호를 작성해주세요"
                        pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
                        "
                        onChangeHandler={onChangePassword}
                        relative="relative"
                        eye="eye.svg"
                        eyeClose="eye_close.svg"
                    />
                    <SignValidate
                        lengthRegValid={lengthRegValid}
                        numberRegValid={numberRegValid}
                        wordRegValid={wordRegValid}
                        specialRegValid={specialRegValid}
                    />
                    <SignUpItem
                        setLabel="이름"
                        type="text"
                        placeholder="이름을 입력해주세요"
                        onChangeHandler={onChangeNameHandler}
                    />
                    <SignUpItem
                        setLabel="나이"
                        type="text"
                        pattern="[0-9]{2}"
                        placeholder="나이를 입력해주세요"
                        onChangeHandler={onChangeAgeHandler}
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
                    <div className="mx-auto w-fit h-fit flex flex-col">
                        <label className="mb-5">핸드폰 번호</label>
                        <div className="flex flex-row gap-2">
                            <select
                                id="number"
                                className="flex-1 border border-solid size-14 border-zinc-300 rounded-lg w-[110px] p-2 text-sm font-nomal"
                                onChange={onClickPhoneNumber}
                            >
                                {clickNumber.map((item, idx) => {
                                    return (
                                        <option key={idx} className="text-zinc-300 mt-2 text-sm">
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="w-[110px]">
                                <Input
                                    type="text"
                                    pattern="[0-9]{4}"
                                    maxLength={4}
                                    size="big"
                                    onChange={onChangeMiddleNumberHandler}
                                />
                            </div>
                            <div className="w-[110px]">
                                <Input
                                    type="text"
                                    pattern="[0-9]{4}"
                                    size="big"
                                    maxLength={4}
                                    onChange={onChangeLastNumberHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] mt-8 mb-6 mx-auto">
                        <Button text="가입하기" border="none" color="primary" size="m" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
