"use client";

import React, { useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import useInput from "@/hooks/useInput";

const SignUp = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();
    // const [name, onChangeNameHandler] = useInput();
    const [age, onChangeAgeHandler] = useInput();
    const [phoneNumber, onChangeNumberHandler] = useInput();
    const [sex, setSex] = useState("");

    const onClickeMale = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setSex("남자");
        console.log(sex);
    };

    const onClickeFeMale = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setSex("여자");
        console.log(sex);
    };

    const signUpNewUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: "http://localhost:3000/signin",
                    data: {
                        age,
                        phoneNumber,
                        sex,
                    },
                },
            });

            if (email.trim() !== "" && password !== "" && age.trim() !== "") {
                console.log(data);

                alert("값이 입력 되었습니다.");
            } else {
                alert("값이 정확히 압력되지 않았습니다.");
                return;
            }

            alert(error);

            if (error) {
                throw new Error();
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form onSubmit={signUpNewUser}>
                <div>
                    <label>이메일: </label>
                    <input placeholder="이메일을 작성해주세요" onChange={onChangeEmailHandler} />
                </div>
                <div>
                    <label>비밀번호: </label>
                    <input placeholder="비밀번호를 작성해주세요" onChange={onChangePasswordHandler} />
                </div>
                {/* <div>
                    이름:&nbsp;
                    <input placeholder="이름을 작성해주세요" onChange={onChangeNameHandler} />
                </div> */}
                <div>
                    <label>나이: </label>
                    <input placeholder="나이를 입력해주세요" onChange={onChangeAgeHandler} />
                </div>
                <div>
                    <label>성별: </label>
                    <button onClick={onClickeMale}>남자</button>
                    <button onClick={onClickeFeMale}>여자</button>
                </div>
                <div>
                    <label>핸드폰 번호: </label>
                    <input onChange={onChangeNumberHandler} placeholder="핸드폰 번호를 작성해주세요" />
                </div>

                <button>확인</button>
            </form>
        </div>
    );
};

export default SignUp;
