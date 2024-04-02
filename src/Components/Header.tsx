const Header = () => {
    return (
        <main>
            <div
                className="bg-[rgba(255,255,255,0.34)] px-[190px] flex flex-row items-center justify-between h-[68px] sticky top-0"
                style={{ backdropFilter: "blur(28px)" }}>
                <img
                    className="shrink-0 w-[84.42px] h-7 relative overflow-visible"
                    src="porifo.svg"
                    alt="Logo"
                />
                <div className="flex flex-row gap-[124px] items-center justify-start shrink-0 relative">
                    <div className="flex flex-row gap-[100px] items-center justify-start shrink-0 relative">
                        <div className="flex flex-row gap-2 items-center justify-center shrink-0 w-[108px] relative">
                            <div className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
                                서비스 소개
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center shrink-0 w-[108px] relative">
                            <div className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
                                피드/커뮤니티
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center shrink-0 w-[108px] relative">
                            <div className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
                                이력서 작성
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-[140px] items-center justify-start shrink-0 relative">
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <div className="rounded-lg border border-primary-500 pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2 items-center justify-center shrink-0 w-[70px] h-[34px] relative">
                            <div className="text-primary-500 text-center font-body-p8m text-xs leading-body-p8m font-semibold relative flex items-center justify-center">
                                로그인
                            </div>
                        </div>
                        <div className="bg-primary-500 rounded-lg pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2 items-center justify-center shrink-0 w-[70px] h-[34px] relative text-white">
                            <div className="text-center font-body-p8m text-xs leading-body-p8m font-semibold relative flex items-center justify-center">
                                회원가입
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Header;
