"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Commen/Button";
import { supabase } from "@/util/supabase/clientSupabase";

import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";
import { userData } from "@/util/supabase/supabase_user";
const Header = () => {
    const router = useRouter();

    const { user, setUser } = useUserStore();
    const signOutFunc = async () => {
        const { error } = await supabase.auth.signOut();
        try {
            setUser(null);
            if (!true) {
                console.log(error);
            }
        } catch (error) {
            throw new Error();
        }
        router.replace("/");
    };

    useEffect(() => {
        const userLoginFunc = async () => {
            try {
                const userLoginData = await userData();
                setUser(userLoginData);
            } catch (error) {}
        };
        userLoginFunc();
    }, []);

    return (
        <main className="sticky top-0 z-50">
            <div className="bg-hihigray bg-opacity-50 flex flex-row items-center justify-center h-[68px] backdrop-blur-3xl">
                {/* Left Section: Logo */}
                <Link className="absolute left-[100px]" href={"/"}>
                    <img className="w-[84.42px] h-7 overflow-visible" src="../porifo.svg" alt="Logo" />
                </Link>

                {/* Center Section: Navigation Links */}
                <div className="flex flex-row gap-[100px] items-center justify-center shrink-0 relative font-spoqaLight">
                    <Link className="text-black text-center text-[16px] font-semibold relative" href={"/"}>
                        서비스 소개
                    </Link>
                    <Link className="text-black text-center text-[16px] font-semibold relative" href={"/community"}>
                        피드/커뮤니티
                    </Link>
                </div>

                {/* Right Section: Authentication Buttons */}
                <div className="absolute right-[100px] flex flex-row gap-2 items-center">
                    {user ? (
                        <div onClick={signOutFunc}>
                            <Link href="/">
                                <Button text="로그아웃" size="s" color="primary" border="none" fontSize="xs" />
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Link href="/signin">
                                    <Button text="로그인" size="s" color="primarynone" fontSize="xs" />
                                </Link>
                            </div>

                            <div className="">
                                <Link href="/signup_method">
                                    <Button text="회원가입" size="s" color="primary" border="none" fontSize="xs" />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Header;
