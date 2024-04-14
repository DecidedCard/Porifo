"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Commen/Button";
import { supabase } from "@/util/supabase/clientSupabase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";
import { userData } from "@/util/supabase/supabase_user";
import { metadata } from "@/app/layout";

const Header = () => {
    const [loginToggle, setLoginToggle] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
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

    const onClickLoginProfile = () => (loginToggle ? setLoginToggle(false) : setLoginToggle(true));
    useEffect(() => {
        const userLoginFunc = async () => {
            try {
                const userLoginData = await userData();
                setUser(userLoginData);
            } catch (error) { }
        };
        userLoginFunc();
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <main className="sticky top-0 z-50">
            <div className=" bg-hihigray bg-opacity-50 flex flex-row items-center justify-center h-[68px] backdrop-blur-3xl">
                {/* Left Section: Logo */}
                <Link className="absolute left-[100px]" href={"/"}>
                    <Image
                    className="overflow-visible"
                    src="../porifo.svg"
                    alt="Logo"
                    width={84.42}
                    height={28}
                    />
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
                        <div className="flex flex-row gap-3">
                            <div className="relative flex flex-row gap-5">
                                <button onClick={toggleMenu}>
                                    <Image
                                        src="profile.svg"
                                        width="28"
                                        height="28"
                                        alt="로그인 프로필"
                                        aria-hidden="true"
                                    />
                                </button>

                                {showMenu && (
                                    <div className={`absolute flex flex-col items-center justify-center top-full mt-4 w-[170px] h-[96px] bg-white rounded-[16px] p-3 transform -translate-x-1/2 left-1/2 ${bubbleAfter}`}>
                                        <div>
                                            <Link href="/mypage" className="flex flex-row items-center justify-center gap-3 w-[146px] h-[32px]">
                                                <Image
                                                    src="headerwrite.svg"
                                                    alt="="
                                                    width="16"
                                                    height="18"
                                                />
                                                <p className="text-[12px]">이력서 작성</p>
                                            </Link>
                                        </div>
                                        <div onClick={signOutFunc}>
                                            <Link href="/" className="flex flex-row items-center justify-center gap-3 mr-[13.5px] w-[146px] h-[32px]">
                                                <Image
                                                    src="headerlogout.svg"
                                                    alt="X"
                                                    width="15"
                                                    height="15"
                                                />
                                                <p className="text-[12px]">로그아웃</p>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="flex items-center justify-center text-[16px] text-black">{user?.user_metadata.user_name}</p>
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

const bubbleAfter =
    "after:content-[''] after:absolute after:top-0 after:left-[50%] after:w-0 after:h-0 after:border-[10px] after:border-solid after:border-transparent after:border-b-hihigray after:border-t-0 after:ml-[-10px] after:mt-[-10px]";
