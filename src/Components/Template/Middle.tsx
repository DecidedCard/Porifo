const Middle = () => {
    return (
        <main>
            
            <div className="my-10 flex flex-row items-start justify-start self-stretch shrink-0 relative">
                
                <div className="flex flex-col items-start justify-start self-stretch shrink-0 relative" >
                    <p className="font-bold text-[22px] w-[320px] relative">
                        소개
                    </p>
                </div>

                <div className="flex flex-col gap-2 items-start justify-start relative">
                    <p className="font-bold text-[22px] text-left relative">
                        포트폴리오
                    </p>
                    <div className="flex flex-row gap-2 items-center justify-center self-stretch shrink-0 relative">
                        <img
                            className="rounded-2xl flex h-40 relative"
                            src="Middle1.png"
                        />
                        <img
                            className="rounded-2xl flex h-40 relative"
                            src="Middle2.png"
                        />
                    </div>
                </div>

                {/* <div className="bg-[rgba(255,255,255,0.80)] w-[40px] h-[40px] rounded-full flex flex-row shrink-0 absolute left-[808px] top-[104px]">
                </div> */}
            </div>

        </main>
    );
};

export default Middle;
