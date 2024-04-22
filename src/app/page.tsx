"use client";

import Cover from "@/Components/MainPage/Cover";
import MiddleLeft from "@/Components/MainPage/MiddleLeft";
import MiddleRight from "@/Components/MainPage/MiddleRight";
import MiddleBottom from "@/Components/MainPage/MiddleBottom";
import MiddleImage from "@/Components/MainPage/MiddleImage";
import Recommendation from "@/Components/MainPage/Recommendation";
import Bottom from "@/Components/MainPage/Bottom";
import Head from "next/head";

export default function Home() {
    return (
        <main>
            <div className="bg-white">
                <Cover />
                <div className="flex justify-center sm:w-full">
                    <div className="flex mx-auto mt-32">
                        <div className="sticky top-32 self-start">
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
            </div>
        </main>
    );
}
