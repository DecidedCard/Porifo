"use client";
import Link from "next/link";
import Button from "./Commen/Button";
import { supabase } from "@/util/supabase/clientSupabase";

const Header = () => {
    const signOutFunc = async () => {
        const { error } = await supabase.auth.signOut();
        try {
            if (!true) {
                console.log(error);
            }
        } catch (error) {
            throw new Error();
        }
    };

    return (
        <main className="sticky top-0 z-50">
            <div
                className="bg-hihigray bg-opacity-50 px-[100px] flex flex-row items-center justify-center h-[50px]"
                style={{ backdropFilter: "blur(28px)" }}
            >
                {/* Left Section: Logo */}
                <Link className="absolute left-[100px]" href={"/"}>
                    <img className="shrink-0 w-[80px] h-7 relative overflow-visible" src="../porifo.svg" alt="Logo" />
                </Link>

                {/* Center Section: Navigation Links */}
                <div className="flex flex-row gap-[124px] items-center justify-center shrink-0 relative font-spoqaLight">
                    <button className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
                        서비스 소개
                    </button>
                    <Link
                        className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative"
                        href={"/community"}
                    >
                        피드/커뮤니티
                    </Link>
                </div>

                {/* Right Section: Authentication Buttons */}
                <div className="absolute right-[100px] flex flex-row gap-2 items-center">
                    <div className="rounded-lg border border-primary-500 pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2 items-center justify-center shrink-0 w-[70px] h-[34px] relative">
                        <Link
                            className="text-primary text-center text-xs font-semibold relative flex items-center justify-center"
                            href="/signin"
                        >
                            로그인
                        </Link>
                    </div>
                    <div className="bg-primary rounded-lg pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 w-[70px] h-[34px] relative text-white">
                        <Link
                            className="text-center text-xs leading-normal font-semibold relative flex items-center justify-center"
                            href="/signup"
                        >
                            회원가입
                        </Link>
                    </div>
                    <div
                        onClick={signOutFunc}
                        className="bg-primary rounded-lg pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2 items-center justify-center shrink-0 w-[70px] h-[34px] relative text-white"
                    >
                        <Link
                            className="text-center font-body-p8m text-xs leading-body-p8m font-semibold relative flex items-center justify-center"
                            href="/"
                        >
                            로그아웃
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Header;
