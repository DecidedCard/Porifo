import Image from "next/image";
import Cover from "@/Components/MainPage/Cover";
import MiddleLeft from "@/Components/MainPage/MiddleLeft";
import MiddleRight from "@/Components/MainPage/MiddleRight";

export default function Home() {
    return (
        <main>
            <Cover />
            <div className="flex flex-wrap justify-center">
                <MiddleLeft />
                <MiddleRight />
            </div>
        </main>
    );
};