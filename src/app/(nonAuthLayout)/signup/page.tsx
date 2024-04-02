"use clinet";
import React, { useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import useInput from "@/hooks/useInput";

const SignUp = () => {
    const [email, onChangeEmailHandler, setEmail] = useInput();
    const [password, onChangePasswordHandler, setPassword] = useInput();
    const [sex, setSex] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);

    const date = new Date();
    const createUSer = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: "John",
                    age: 27,
                },
            },
        });
    };

    return <div>회원가입 창</div>;
};

export default SignUp;
