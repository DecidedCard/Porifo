const Middle = () => {
    return (
        <main>

            <div className="my-10 flex flex-row items-start justify-start self-stretch shrink-0 relative">

                <div className="flex flex-col items-start justify-start self-stretch shrink-0 relative" >
                    <p className="font-bold text-[22px] w-[400px] h-[214px] relative">
                        기술스택
                    </p>
                    <div className="bg-deepgray w-[304px] h-[1px] my-5"></div>
                </div>

                <div className="flex flex-col gap-2 items-start justify-start relative">
                    <p className="font-bold text-[22px] w-[400px] h-[214px] text-left relative">
                        자기소개
                    </p>
                    <div className="bg-deepgray w-[304px] h-[1px] my-5"></div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">

                    </div>
                </div>

                {/* <div className="bg-[rgba(255,255,255,0.80)] w-[40px] h-[40px] rounded-full flex flex-row shrink-0 absolute left-[808px] top-[104px]">
                </div> */}
            </div>

        </main>
    );
};

export default Middle;
