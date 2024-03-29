"use client";

import React, { useState } from "react";

const useInput = () => {
    const [value, setValue] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return [value, onChange, setValue] as const;
};

export default useInput;

// ex) const [comment, onChangeCommentHandler, setComment] = useInput();
// input value에 value가 들어가면 됩니다.
// onChange가 input onChange에 들어가면 됩니다.
