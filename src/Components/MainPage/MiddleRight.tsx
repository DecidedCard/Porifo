const MiddleRight = () => {
    return (
        <main>
            <div className="flex flex-col gap-24 items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
                    <img
                        className="rounded-2xl shrink-0 w-156 h-136 relative"
                        style={{ objectFit: "cover" }}
                        src="33.png" />
                    <div className="pr-6 pl-6 flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
                        <div className="text-black text-left font-semibold text-xl leading-snug relative flex items-center justify-start">
                            짧은 시간을 투자해도 <br /> 그럴싸한 포트폴리오가 완성되더라고요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                                <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden">
                                    <img
                                        className="w-12 h-12 absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible"
                                        src="1.png" />
                                </div>
                            </div>
                            <div className="ml-1 text-black text-left font-semibold text-lg leading-tight relative flex items-center justify-start">
                                3년차 프론트엔드 개발자
                            </div>
                            <div
                                className="text-gray-4 text-left font-body-p6m-font-family text-body-p6m-font-size leading-body-p6m-line-height font-body-p6m-font-weight relative flex items-center justify-start"
                            >
                                React / Vue.js / Angular
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
                    <img
                        className="rounded-2xl shrink-0 w-156 h-136 relative"
                        style={{ objectFit: "cover" }}
                        src="33.png" />
                    <div className="pr-6 pl-6 flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
                        <div className="text-black text-left font-semibold text-xl leading-snug relative flex items-center justify-start">
                            취업에 포트폴리오는 필수잖아요! <br /> 저는 포리포에서 만들었어요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                                <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden">
                                    <img
                                        className="w-12 h-12 absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible"
                                        src="2.png" />
                                </div>
                            </div>
                            <div className="ml-1 text-black text-left font-semibold text-lg leading-tight relative flex items-center justify-start">
                                주니어 벡엔드 개발자
                            </div>
                            <div
                                className="text-gray-4 text-left font-body-p6m-font-family text-body-p6m-font-size leading-body-p6m-line-height font-body-p6m-font-weight relative flex items-center justify-start"
                            >
                                Java / Spring Boot / MySQL
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
                    <img
                        className="rounded-2xl shrink-0 w-156 h-136 relative"
                        style={{ objectFit: "cover" }}
                        src="33.png" />
                    <div className="pr-6 pl-6 flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
                        <div className="text-black text-left font-semibold text-xl leading-snug relative flex items-center justify-start">
                            개발자 전용 포트폴리오 사이트라 <br /> 포트폴리오 구성이 깔끔해요
                        </div>
                        <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                                <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden">
                                    <img
                                        className="w-12 h-12 absolute left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible"
                                        src="3.png" />
                                </div>
                            </div>
                            <div className="ml-1 text-black text-left font-semibold text-lg leading-tight relative flex items-center justify-start">
                                2년차 풀 스택 개발자
                            </div>
                            <div
                                className="text-gray-4 text-left font-body-p6m-font-family text-body-p6m-font-size leading-body-p6m-line-height font-body-p6m-font-weight relative flex items-center justify-start"
                            >
                                Flutter / Node.js / SQL
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default MiddleRight;