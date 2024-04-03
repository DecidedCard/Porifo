const Recommendation = () => {
    return (
        <main className="">
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
                <p className="font-spoqaBold leading-normal font-bold text-2xl relative flex items-center justify-start mb-5">
                    포리포 추천, HOT 개발자
                </p>
            </div>

            <div className="flex flex-row gap-6 items-start justify-start shrink-0 relative">
                <div
                    className="rounded-2xl border-solid border border-gray border p-8 flex flex-col gap-4 items-start justify-start shrink-0 w-[270px] h-[180px] relative">
                    <div
                        className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
                        <img
                            className="rounded-[50%] shrink-0 w-12 h-12 relative"
                            src="4.png"
                        />
                        <p className="text-left font-spoqaMedium leading-normal relative flex items-center justify-start">
                            이재상
                        </p>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                        <img
                            className="rounded-lg flex-1 h-[82px] relative"
                            src=".png"
                        />
                        <img
                            className="rounded-lg flex-1 h-[82px] relative"
                            src=".png"
                        />
                    </div>
                </div>
                <div className="rounded-2xl border-solid border border-gray p-8 flex flex-col gap-4 items-start justify-start shrink-0 w-[270px] h-[180px] relative">
                    <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
                        <img
                            className="rounded-[50%] shrink-0 w-12 h-12 relative"
                            src="5.png"
                        />
                        <p className="text-left font-spoqaMedium leading-normal relative flex items-center justify-start">
                            윤창식
                        </p>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                        <img
                            className="rounded-lg flex-1 h-[82px] relative"
                            src="rectangle-911.png"
                        />
                        <img
                            className="rounded-lg flex-1 h-[82px] relative"
                            src="rectangle-921.png"
                        />
                    </div>
                </div>
                <div className="rounded-2xl border-solid border border-gray p-8 flex flex-col gap-4 items-start justify-start shrink-0 w-[270px] h-[180px] relative">
                    <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
                        <img
                            className="rounded-[50%] shrink-0 w-12 h-12 relative"
                            src="6.png"
                        />
                        <p className="text-left font-spoqaMedium leading-normal relative flex items-center justify-start">
                            최원장
                        </p>
                    </div>
                    <div
                        className="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                        <img
                            className="rounded-lg flex-1 h-[82px] relative"
                            src=".png"
                        />
                        <img
                            className="rounded-lg flex-1 h-[82px] relative"
                            src=".png"
                        />
                    </div>
                </div>
                <div className="rounded-2xl border-solid border border-gray p-8 flex flex-col gap-4 items-start justify-start shrink-0 w-[270px] h-[180px] relative">
                    <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
                        <img
                            className="rounded-[50%] shrink-0 w-12 h-12 relative"
                            src="7.png"
                        />
                        <p className="text-left font-spoqaMedium leading-normal relative flex items-center justify-start">
                            권혁우
                        </p>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                        <img
                            className="rounded-lg flex-1 h-[82px] relative"
                            src=".png"
                        />
                        <img
                            className="rounded-lg flex-1 h-[82px] relative"
                            src=".png"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center shrink-0 relative mt-20">
                <p className="text-left font-bold text-3xl leading-normal relative flex items-center justify-center">
                    동료들이 올린 양질의 정보를
                    <br />
                    손쉽게 확인할 수 있어요
                </p>
                <p className="text-middlegray leading-normal text-left relative flex pr-14 items-center justify-center mt-5">
                    우리 옆의 동료도 이걸 쓰고 있을 수 있어요!
                </p>
            </div>


        </main>
    );
};

export default Recommendation;