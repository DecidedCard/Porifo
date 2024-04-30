"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "./Commen/Button";
import useUserStore from "@/store/userStore";
import useMouseClickClose from "@/hooks/useMouseClickClose";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string>("about");
    const [pathNameCheck, setPathNameCheck] = useState(true);

    const { user, setUser } = useUserStore();

    const { modalRef } = useMouseClickClose(showMenu, setShowMenu);

    useEffect(() => {
        const pathName = window.location.pathname;
        if (pathName === "/community") {
            setActiveMenu("community");
        }
        if (pathName.includes("/create") || pathName.includes("/share")) {
            setPathNameCheck(false);
        }
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuBtn = (value: string) => {
        setActiveMenu(value);
    };

    return (
        <main className="sticky top-0 z-10 sm:w-full sm:z-20">
            <div className="bg-hihigray bg-opacity-50 flex flex-row items-center justify-center h-[68px] backdrop-blur-3xl">
                {/* Left Section: Logo */}
                <Link className="absolute left-[100px] sm:left-4" href={"/"}>
                    <Image
                        className="overflow-visible sm:w-[70px] sm:h-[30px]"
                        src="../porifo.svg"
                        alt="Logo"
                        width={84.42}
                        height={28}
                    />
                </Link>

                {/* Center Section: Navigation Links */}
                {pathNameCheck && (
                    <>
                        <div className="flex flex-row gap-[100px] items-center justify-center shrink-0 relative font-spoqaLight sm:hidden">
                            <Link
                                className={`text-black text-center text-[16px] h-6 font-semibold relative
                        ${activeMenu === "about" ? "border-b-[1px] border-solid border-black" : ""}`}
                                href={"/"}
                                onClick={() => handleMenuBtn("about")}
                            >
                                서비스 소개
                            </Link>
                            <Link
                                className={`text-black text-center text-[16px] h-6 font-semibold relative
                        ${activeMenu === "community" ? "border-b-[1px] border-solid border-black" : ""}`}
                                href={"/community"}
                                onClick={() => handleMenuBtn("community")}
                            >
                                피드/커뮤니티
                            </Link>
                        </div>
                        {/* Right Section: Authentication Buttons */}

                        <div className="absolute right-[100px] flex flex-row gap-2 items-center sm:right-5">
                            {user ? (
                                <div ref={modalRef} className="flex flex-row gap-3">
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

                                                <div className="hidden sm:block">
                                                    <Link
                                                        href="/community"
                                                        className="flex flex-row items-center justify-center gap-3 w-[146px] h-[32px] sm:ml-[12px]"
                                                    >
                                                        <Image
                                                            src="/assets/image/comunity.svg"
                                                            alt="내 피드"
                                                            width={18}
                                                            height={18}
                                                        />
                                                        <p className="text-[12px]">피드/커뮤니티</p>
                                                    </Link>
                                                </div>
                                                <form
                                                    action="/auth/signout"
                                                    method="post"
                                                    className="flex flex-row items-center justify-center gap-3 mr-[13.5px] w-[146px] h-[32px]"
                                                >
                                                    <Image
                                                        src="/assets/image/headerlogout.svg"
                                                        alt="X"
                                                        width={15}
                                                        height={15}
                                                    />

                                                    <button className="text-[12px]" type="submit">
                                                        로그아웃
                                                    </button>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="sm:hidden flex flex-row">
                                        <div>
                                            <Link href="/signin">
                                                <Button text="로그인" size="s" color="primarynone" fontSize="xs sm:s" />
                                            </Link>
                                        </div>

                                        <div>
                                            <Link href="/signupMethod">
                                                <Button
                                                    text="회원가입"
                                                    size="s"
                                                    color="primary"
                                                    border="none"
                                                    fontSize="xs sm:s"
                                                />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="sm:flex hidden" ref={modalRef}>
                                        <button>
                                            <Image
                                                src="assets/image/menu.svg"
                                                alt="menu"
                                                width={24}
                                                height={24}
                                                onClick={toggleMenu}
                                            />
                                        </button>
                                        {showMenu && (
                                            <div>
                                                <div
                                                    className={`absolute left-[15%] flex flex-col items-center justify-center top-full mt-4 w-[100px] h-fit bg-white rounded-[16px] p-2 transform -translate-x-16 ${bubbleSm}`}
                                                >
                                                    <div>
                                                        <Link href="/signin">
                                                            <Button
                                                                text="로그인"
                                                                size="s"
                                                                color="primarynone"
                                                                fontSize="m"
                                                            />
                                                        </Link>
                                                    </div>

                                                    <div>
                                                        <Link href="/signupMethod">
                                                            <Button
                                                                text="회원가입"
                                                                size="s"
                                                                color="primary"
                                                                border="none"
                                                                fontSize="m"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </main>
    );
};

export default Header;

const bubbleAfter =
    "after:content-[''] after:absolute after:top-0 after:left-[50%] after:w-0 after:h-0 after:border-[10px] after:border-solid after:border-transparent after:border-b-hihigray after:border-t-0 after:ml-[-10px] after:mt-[-10px]";
const bubbleSm =
    "after:content-[''] after:absolute after:top-0 after:left-[50%] after:w-0 after:h-0 after:border-[10px] after:border-solid after:border-transparent after:border-b-hihigray after:border-t-0 after:ml-[12px] after:mt-[-8px]";
