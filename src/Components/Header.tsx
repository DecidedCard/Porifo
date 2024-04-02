const Header = () => {
    return (
      <main>
        <div
          className="bg-[rgba(255,255,255,0.34)] px-[100px] flex flex-row items-center justify-center h-[50px] sticky top-0"
          style={{ backdropFilter: "blur(28px)" }}
        >
          {/* Left Section: Logo */}
          <div className="absolute left-[100px]">
            <img
              className="shrink-0 w-[80px] h-7 relative overflow-visible"
              src="porifo.svg"
              alt="Logo"
            />
          </div>
  
          {/* Center Section: Navigation Links */}
          <div className="flex flex-row gap-[124px] items-center justify-center shrink-0 relative font-spoqaLight">
            <div className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
              서비스 소개
            </div>
            <div className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
              피드/커뮤니티
            </div>
            <div className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
              이력서 작성
            </div>
          </div>
  
          {/* Right Section: Authentication Buttons */}
          <div className="absolute right-[100px] flex flex-row gap-2 items-center">
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
      </main>
    );
  };
  
  export default Header;
  