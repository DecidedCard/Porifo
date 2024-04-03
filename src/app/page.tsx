import Image from "next/image";
import Cover from "@/Components/MainPage/Cover";
import MiddleLeft from "@/Components/MainPage/MiddleLeft";
import MiddleRight from "@/Components/MainPage/MiddleRight";
import MiddleBottom from "@/Components/MainPage/MiddleBottom";

export default function Home() {
    return (
        <main>
            <div>
                <Cover />
                <div className="flex justify-center">
                    <div className="flex max-w-4xl mx-auto">
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

            </div>
        </main>
    );
};