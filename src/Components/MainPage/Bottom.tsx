import Link from "next/link";
import Button from "../Commen/Button";

const Bottom = () => {
    return (
        <main className="">
            <div className="flex flex-col items-center justify-center gap-2.5">
                <img className="rounded-2xl w-[1020px] h-[518px]" src="33.png" />
                <div className="flex flex-col items-start justify-start gap-2 p-6">
                    <div className="flex flex-col items-start justify-start gap-2 mr-[590px]">
                        <p className="flex items-start justify-start text-secondary text-[20px] font-spoqaBold font-semibold leading-normal">
                            포토샵을 몰라도
                        </p>
                        <p className="flex items-center justify-start text-[26px] font-spoqaBold font-bold leading-normal">
                            디자인 경험이 없어도
                            <br />
                            감각적인 포트폴리오 사이트가 만들어져요
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2.5 mt-20">
                <img className="rounded-2xl w-[630px] h-[400px]" src="22.png" />
                <div className="flex flex-col items-start justify-start p-6 mr-48 gap-2">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <p className="text-secondary text-[20px] font-spoqaBold font-semibold leading-normal flex items-center justify-start">
                            나의 포트폴리오를 공유하고
                        </p>
                        <p className="font-spoqaBold font-bold text-[26px] leading-normal flex items-center justify-start">
                            다른 동료 개발자들과의 커뮤니티를 통해
                            <br />
                            나의 포트폴리오에 피드백을 받을 수 있어요
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2.5 mt-16">
                <img className="rounded-2xl shrink-0 w-[500px] h-[342px] relative" src="11.png" />
                <div className="p-6 mr-20 flex flex-col gap-2 items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <p className="flex items-center justify-start text-secondary text-[20px] font-spoqaBold font-semibold leading-normal">
                            나의 포트폴리오를 공유하고
                        </p>
                        <p className="flex items-center justify-start font-spoqaBold font-bold leading-normal text-[26px]">
                            디자인 경험이 없어도
                            <br />
                            감각적인 포트폴리오 사이트가 만들어져요
                        </p>
                    </div>
                </div>
            </div>

            <Link href={"/community"} className="flex items-center justify-center mx-auto my-20 w-[240px] relative">
                <Button text="더 많은 피드를 커뮤니티에서 보기" color="primary" border="none" size="m" fontSize="s" />
            </Link>
        </main>
    );
};

export default Bottom;
