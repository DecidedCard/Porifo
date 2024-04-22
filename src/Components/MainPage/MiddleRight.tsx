import Image from "next/image";

const MiddleRight = () => {
    return (
        <main>
            <div className="flex flex-col gap-24 items-start justify-start sm:mr-10 sm:gap-0">
                <div className="flex flex-col gap-6 items-start justify-start">
                    <Image
                        className="rounded-2xl"
                        src="/assets/image/mainImage1.svg"
                        alt="이미지"
                        width={630}
                        height={550}
                    />
                    <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 ">
                        <div className="text-black text-left font-semibold text-[26px] leading-snug relative flex items-center justify-start sm:text-[16px]">
                            짧은 시간을 투자해도 <br /> 그럴싸한 포트폴리오가 완성되더라고요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 sm:flex-col">
                            <div className="flex items-center">
                                <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                                    <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden sm:w-8 sm:h-8">
                                        <Image
                                            className="absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible"
                                            src="/assets/image/mainpeple1.png"
                                            alt="이미지"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="ml-1 text-black text-left font-semibold text-[20px] leading-tight flex items-center justify-start sm:text-[8px]">
                                    3년차 프론트엔드 개발자
                                </div>
                            </div>

                            <div className="flex items-center justify-start text-16px text-gray3 sm:text-[10px]">
                                React / Vue.js / Angular
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative sm:-mt-40">
                    <Image
                        className="rounded-2xl shrink-0 w-[630px] h-[550px]"
                        src="/assets/image/mainImage2.svg"
                        alt="이미지"
                        width={630}
                        height={550}
                    />
                    <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 sm:-mt-52">
                        <div className="text-left font-semibold text-[26px] leading-snug relative flex items-center justify-start sm:text-[16px]">
                            취업에 포트폴리오는 필수잖아요! <br /> 저는 포리포에서 만들었어요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 relative sm:flex-col">
                            <div className="flex">
                                <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                                    <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden">
                                        <Image
                                            className="w-12 h-12 absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible sm:w-8 sm:h-8"
                                            src="/assets/image/mainpeple2.png"
                                            alt="이미지"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="ml-1 font-semibold text-[20px] leading-tight flex items-center justify-start sm:text-[8px]">
                                    주니어 벡엔드 개발자
                                </div>
                            </div>

                            <div className="flex items-center justify-start text-16px text-gray3 sm:text-[10px]">
                                Java / Spring Boot / MySQL
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-start justify-start shrink-0 sm:-mt-40">
                    <Image
                        className="rounded-2xl shrink-0 w-[630px] h-[550px]"
                        src="/assets/image/mainImage3.svg"
                        alt="이미지"
                        width={630}
                        height={550}
                    />
                    <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 sm:-mt-52">
                        <div className="text-black text-left font-semibold text-[26px] leading-snug flex items-center justify-start sm:text-[16px]">
                            개발자 전용 포트폴리오 사이트라 <br /> 포트폴리오 구성이 깔끔해요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 sm:flex-col">
                            <div className="flex">
                                <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                                    <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden sm:w-8 sm:h-8">
                                        <Image
                                            className="w-12 h-12 absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible"
                                            src="/assets/image/mainpeple3.png"
                                            alt="이미지"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="ml-1 text-black text-left font-semibold text-[20px] leading-tight flex items-center justify-start sm:text-[8px]">
                                    2년차 풀 스택 개발자
                                </div>
                            </div>

                            <div className="flex items-center justify-start text-16px text-gray3 sm:text-[10px]">
                                Flutter / Node.js / SQL
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MiddleRight;
