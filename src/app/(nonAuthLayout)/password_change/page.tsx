"use client";

import React from "react";

const Password_Change = () => {
    const changePassword = () => {};

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded p-10 w-[500px] h-[750px] bg-white flex justify-center flex-col">
                    <form onSubmit={changePassword}></form>
                </div>
            </div>
        </main>
    );
};

export default Password_Change;
