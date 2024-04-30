"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Commen/Button";
import Image from "next/image";
import useMouseClickClose from "@/hooks/useMouseClickClose";

const HeaderNonAuth = () => {
    const [activeMenu, setActiveMenu] = useState<string>("about");

    const [showMenu, setShowMenu] = useState(false);

    const { modalRef } = useMouseClickClose(showMenu, setShowMenu);

    const handleMenuBtn = (value: string) => setActiveMenu(value);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
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
                    <div className="sm:hidden flex flex-row">
                        <div>
                            <Link href="/signin">
                                <Button text="로그인" size="s" color="primarynone" fontSize="xs sm:s" />
                            </Link>
                        </div>

                        <div>
                            <Link href="/signupMethod">
                                <Button text="회원가입" size="s" color="primary" border="none" fontSize="xs sm:s" />
                            </Link>
                        </div>
                    </div>

                    <div className="hidden sm:flex" ref={modalRef}>
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
                                            <Button text="로그인" size="s" color="primarynone" fontSize="m" />
                                        </Link>
                                    </div>

                                    <div>
                                        <Link href="/signupMethod">
                                            <Button text="회원가입" size="s" color="primary" border="none" fontSize="m" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </main>
    );
};

export default HeaderNonAuth;

const bubbleSm =
    "after:content-[''] after:absolute after:top-0 after:left-[50%] after:w-0 after:h-0 after:border-[10px] after:border-solid after:border-transparent after:border-b-hihigray after:border-t-0 after:ml-[12px] after:mt-[-8px]";