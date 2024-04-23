"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Commen/Button";
import { supabase } from "@/util/supabase/clientSupabase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();
    const { user } = useLoginCheck();
    const { setUser } = useUserStore();
    const signOutFunc = async () => {
        const { error } = await supabase.auth.signOut();
        try {
            if (!error) {
                console.log(error);
            }
            setUser(null);
        } catch (error) {
            throw new Error();
        }
        setUser(null);
        router.replace("/");
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <main className="sticky top-0 z-10 sm:w-full sm:z-20">
            <div className="bg-hihigray bg-opacity-50 flex flex-row items-center justify-center h-[68px] backdrop-blur-3xl">
                {/* Left Section: Logo */}
                <Link className="absolute left-[100px] sm:left-4" href={"/"}>
                    <Image className="overflow-visible sm:w-[59px] sm:h-[20px]" src="../porifo.svg" alt="Logo" width={84.42} height={28} />
                </Link>

                {/* Center Section: Navigation Links */}
                <div className="flex flex-row gap-[100px] items-center justify-center shrink-0 relative font-spoqaLight sm:hidden">
                    <Link className="text-black text-center text-[16px] font-semibold relative" href={"/"}>
                        서비스 소개
                    </Link>
                    <Link className="text-black text-center text-[16px] font-semibold relative" href={"/community"}>
                        피드/커뮤니티
                    </Link>
                </div>

                {/* Right Section: Authentication Buttons */}

                <div className="absolute right-[100px] flex flex-row gap-2 items-center sm:right-8">
                    {user ? (
                        <div className="flex flex-row gap-3">
                            <div className="relative flex flex-row gap-5 sm:gap-2">
                                <button onClick={toggleMenu}>
                                    <Image
                                        src={user.user_metadata.profileImage || "/assets/image/profile.svg"}
                                        width={28}
                                        height={28}
                                        alt="로그인 프로필"
                                        aria-hidden="true"
                                        className="w-7 h-7 rounded-lg object-cover"
                                    />
                                </button>
                                <p className="flex items-center justify-center text-[16px] text-black sm:text-sm">
                                    {user?.user_metadata.name || user.user_metadata.user_name}
                                </p>

                                {showMenu && (
                                    <div
                                        className={`absolute left-[15%] flex flex-col items-center justify-center top-full mt-4 w-[170px] h-fit bg-white rounded-[16px] p-3 transform -translate-x-1/2 ${bubbleAfter}`}
                                    >
                                        <div>
                                            <Link
                                                href="/mypage"
                                                className="flex flex-row items-center justify-center gap-3 w-[146px] h-[32px]"
                                            >
                                                <Image
                                                    src="/assets/image/headerwrite.svg"
                                                    alt="="
                                                    width={16}
                                                    height={18}
                                                />
                                                <p className="text-[12px]">이력서 작성</p>
                                            </Link>
                                        </div>
                                        <div onClick={signOutFunc}>
                                            <Link
                                                href="/"
                                                className="flex flex-row items-center justify-center gap-3 mr-[13.5px] w-[146px] h-[32px]"
                                            >
                                                <Image
                                                    src="/assets/image/headerlogout.svg"
                                                    alt="X"
                                                    width={15}
                                                    height={15}
                                                />
                                                <p className="text-[12px]">로그아웃</p>
                                            </Link>
                                        </div>
                                        <div className="hidden sm:block">
                                            <Link
                                                href="/community"
                                                className="flex flex-row items-center justify-center gap-3 w-[146px] h-[32px]"
                                            >
                                                <p className="text-[12px]">피드/커뮤니티</p>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Link href="/signin">
                                    <Button text="로그인" size="s" color="primarynone" fontSize="xs" />
                                </Link>
                            </div>

                            <div className="">
                                <Link href="/signupMethod">
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
