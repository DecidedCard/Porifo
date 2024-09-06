import Link from "next/link";

import Button from "../Commen/Button";

import useUserStore from "@/store/userStore";

const Cover = () => {
    const { user } = useUserStore();
    return (
        <main className="relative h-[800px] w-full animate-fadein overflow-hidden sm:h-[246px] sm:w-full">
            <video
                className="w-full h-full absolute top-0 left-0 object-cover"
                autoPlay // 페이지가 로드 될 때 재생
                muted // 비디오 음소거
                loop // 비디오가 재생이 끝나면 다시 재생
                preload="auto"
                playsInline
            >
                <source src="/assets/video/mainVideo.mp4" type="video/mp4" />
            </video>
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-30"></div>
            <div className="flex flex-col items-center justify-center mt-10 absolute top-[170px] w-full sm:-mt-36">
                <p className="text-white text-headline/H1_B sm:text-[22px] sm:-mb-5">For Your Career, PORIFO</p>
                <p className="text-white text-center text-headline/H4_B mt-5 sm:text-[14px] sm:font-normal sm:mt-0">
                    포리포에서 당신의 커리어를 넓혀보세요.
                </p>
                <div className="pt-[85px] flex flex-col gap-2 items-center justify-center sm:pt-5">
                    <div className="flex flex-col items-center justify-center w-[350px]">
                        <Link href={user ? "/mypage" : "/guest"} className="text-body/P6_M">
                            <Button text="바로 포트폴리오 작성하기" color="primary" size="extra" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cover;
