import Image from "next/image";

const MiddleRight = () => {
    return (
        <main>
            <div className="flex flex-col gap-24 items-start justify-start sm:p-5 sm:gap-20 sm:mt-14">
                {/* 1번 */}
                <div className="flex flex-col gap-6 items-start justify-start sm:justify-center sm:items-center">
                    <Image
                        className="rounded-2xl sm:w-[448px] sm:h-[320px]"
                        src="/assets/image/mainImage1.svg"
                        alt="이미지"
                        width={630}
                        height={550}
                    />
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <div className="text-black text-H6_B relative flex items-center justify-start sm:text-[18px]">
                            짧은 시간을 투자해도 <br /> 그럴싸한 포트폴리오가 완성되더라고요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center sm:flex-row">
                            <div className="flex items-center sm:flex-row">
                                <div className="w-12 h-12 relative overflow-hidden">
                                    <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden sm:w-8 sm:h-8">
                                        <Image
                                            className="left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible sm:w-8 sm:h-8 sm:rounded-full"
                                            src="/assets/image/mainpeple1.png"
                                            alt="이미지"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="ml-1 text-black text-SH4_M flex items-center justify-start sm:text-[14px] sm:font-medium">
                                    3년차 프론트엔드 개발자
                                </div>
                            </div>

                            <div className="flex items-center justify-start text-gray_4 sm:text-[10px]">
                                React / Vue.js / Angular
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2번 */}
                <div className="flex flex-col gap-6 items-start justify-start sm:justify-center sm:items-center">
                    <Image
                        className="rounded-2xl sm:w-[448px] sm:h-[320px]"
                        src="/assets/image/mainImage2.svg"
                        alt="이미지"
                        width={630}
                        height={550}
                    />
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <div className="text-black text-H6_B relative flex items-center justify-start sm:text-[18px]">
                            취업에 포트폴리오는 필수잖아요! <br /> 저는 포리포에서 만들었어요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center sm:flex-row">
                            <div className="flex">
                                <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                                    <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden">
                                        <Image
                                            className="left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible sm:w-8 sm:h-8 sm:rounded-full"
                                            src="/assets/image/mainpeple2.png"
                                            alt="이미지"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="ml-1 text-black text-SH4_M flex items-center justify-start sm:text-[14px] sm:font-medium">
                                    주니어 벡엔드 개발자
                                </div>
                            </div>

                            <div className="flex items-center justify-start text-gray_4 sm:text-[10px]">
                                Java / Spring Boot / MySQL
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3번 */}
                <div className="flex flex-col gap-6 items-start justify-start sm:justify-center sm:items-center">
                    <Image
                        className="rounded-2xl sm:w-[448px] sm:h-[320px]"
                        src="/assets/image/mainImage3.svg"
                        alt="이미지"
                        width={630}
                        height={550}
                    />
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <div className="text-black text-H6_B relative flex items-center justify-start sm:text-[18px]">
                            개발자 전용 포트폴리오 사이트라 <br /> 포트폴리오 구성이 깔끔해요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center sm:flex-row">
                            <div className="flex">
                                <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                                    <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden sm:w-8 sm:h-8">
                                        <Image
                                            className="left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible sm:w-8 sm:h-8 sm:rounded-full"
                                            src="/assets/image/mainpeple3.png"
                                            alt="이미지"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="ml-1 text-black text-SH4_M flex items-center justify-start sm:text-[14px] sm:font-medium">
                                    2년차 풀 스택 개발자
                                </div>
                            </div>

                            <div className="flex items-center justify-start text-gray_4 sm:text-[10px]">
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
