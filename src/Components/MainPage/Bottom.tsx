import Image from "next/image";
import Link from "next/link";
import Button from "../Commen/Button";

const Bottom = () => {
    return (
        <main className="mb-44">
            <div className="flex flex-col items-start justify-start ml-[320px] gap-2.5">
                <Image className="rounded-2xl"
                    src="mainImage8.svg"
                    alt="메인 이미지"
                    width={1020}
                    height={702}
                />
                <div className="flex flex-col items-start justify-start gap-2 p-6">
                    <div className="flex flex-col items-start justify-start gap-2 mr-[590px]">
                        <p className="flex items-start justify-start text-secondary text-[20px] font-spoqaBold font-semibold leading-normal left-[320px]">
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

            <div className="flex flex-col items-start justify-start ml-[970px] gap-2.5 mt-20">
                <Image
                    className="rounded-2xl"
                    src="mainImage9.svg"
                    alt="메인 이미지"
                    width={630}
                    height={400}
                />
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

            <div className="flex flex-col items-start justify-start ml-[450px] gap-2.5 mt-16">
                <Image
                    className="rounded-2xl"
                    src="mainImage10.svg"
                    alt="메인 이미지"
                    width={500}
                    height={342}
                />
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
                <Link href={"/community"} className="flex items-start justify-start ml-5 w-[240px]">
                    <Button text="더 많은 피드를 커뮤니티에서 보기" color="primary" border="none" size="m" fontSize="s" />
                </Link>
            </div>
        </main>
    );
};

export default Bottom;
