"use client";

import Cover from "@/Components/MainPage/Cover";
import MiddleLeft from "@/Components/MainPage/MiddleLeft";
import MiddleRight from "@/Components/MainPage/MiddleRight";
import MiddleBottom from "@/Components/MainPage/MiddleBottom";
import MiddleImage from "@/Components/MainPage/MiddleImage";
import Recommendation from "@/Components/MainPage/Recommendation";
import Bottom from "@/Components/MainPage/Bottom";

import useInput from "@/hooks/useInput";

export default function Home() {
    useInput();

    return (
        <main>
            <div>
                <Cover />
                <div className="flex justify-center">
                    <div className="flex mx-auto mt-32">
                        <div className="sticky top-32 self-start">
                            <MiddleLeft />
                        </div>
                        <div>
                            <MiddleRight />
                        </div>
                    </div>
                </div>

                <div className="mt-32">
                    <MiddleBottom />
                </div>

                <div className="mt-32">
                    <MiddleImage />
                </div>

                <div className="flex justify-center mt-32">
                    <Recommendation />
                </div>

                <div className="mt-20">
                    <Bottom />
                </div>
            </div>
        </main>
    );
}
