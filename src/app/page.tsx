"use client";

import Cover from "@/Components/MainPage/Cover";
import MiddleLeft from "@/Components/MainPage/MiddleLeft";
import MiddleRight from "@/Components/MainPage/MiddleRight";
import MiddleBottom from "@/Components/MainPage/MiddleBottom";
import MiddleImage from "@/Components/MainPage/MiddleImage";
import Recommendation from "@/Components/MainPage/Recommendation";
import Bottom from "@/Components/MainPage/Bottom";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";
export default function Home() {
    useLoginCheck();

    return (
        <main>
            <Header />
            <div className="bg-white sm:w-full">
                <Cover />
                <div className="flex justify-center sm:w-full">
                    <div className="flex mx-auto mt-32 sm:flex-col">
                        <div className="sticky top-32 self-start sm:static sm:top-0 sm:self-auto sm:-mt-14">
                            <MiddleLeft />
                        </div>
                        <div>
                            <MiddleRight />
                        </div>
                    </div>
                </div>

                <div className="mt-32 sm:w-full">
                    <MiddleBottom />
                </div>

                <div className="mt-32 sm:w-full">
                    <MiddleImage />
                </div>

                <div className="flex justify-center mt-32 sm:w-full">
                    <Recommendation />
                </div>

                <div className="mt-20 sm:w-full">
                    <Bottom />
                </div>
                <Footer />
            </div>
        </main>
    );
}
