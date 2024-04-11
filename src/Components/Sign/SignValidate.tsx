import React, { useState, useEffect } from "react";

type PropsType = {
    wordRegValid: boolean;
    numberRegValid: boolean;
    specialRegValid: boolean;
    lengthRegValid: boolean;
};

const SignValidate = ({ lengthRegValid, numberRegValid, wordRegValid, specialRegValid }: PropsType) => {
    const [regValidate, setRegValidate] = useState(false);

    useEffect(() => {
        setRegValidate(lengthRegValid && numberRegValid && wordRegValid && specialRegValid);
    }, []);

    return (
        <div className=" flex justify-start ml-9 mb-1 -mt-5">
            {regValidate ? (
                <>
                    <p className="text-success text-center text-[11px]">✓ 8자리 이상</p>
                    <p className="text-success text-center text-[11px] ml-2">✓ 숫자</p>
                    <p className="text-success text-center text-[11px] ml-2">✓ 영문</p>
                    <p className="text-success text-center text-[11px] ml-2">✓ 특수 문자</p>
                </>
            ) : (
                <>
                    {lengthRegValid ? (
                        <p className="text-success text-center text-[11px]">✓ 8자리 이상</p>
                    ) : (
                        <p className="text-gray2 text-center text-[11px]">✓ 8자리 이상</p>
                    )}
                    {numberRegValid ? (
                        <p className="text-success text-center text-[11px] ml-2">✓ 숫자</p>
                    ) : (
                        <p className="text-gray2 text-center text-[11px] ml-2">✓ 숫자</p>
                    )}
                    {wordRegValid ? (
                        <p className="text-success text-center text-[11px] ml-2">✓ 영문</p>
                    ) : (
                        <p className="text-gray2 text-center text-[11px] ml-2">✓ 영문</p>
                    )}
                    {specialRegValid ? (
                        <p className="text-success text-center text-[11px] ml-2">✓ 특수 문자</p>
                    ) : (
                        <p className="text-gray2 text-center text-[11px] ml-2">✓ 특수 문자</p>
                    )}
                </>
            )}
        </div>
    );
};

export default SignValidate;
