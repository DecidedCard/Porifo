import Link from "next/link";

const Header = () => {
    return (
      <main>
        <div
          className="bg-hihigray px-[100px] flex flex-row items-center justify-center h-[50px] sticky top-0"
          style={{ backdropFilter: "blur(28px)" }}
        >
          {/* Left Section: Logo */}
          <button className="absolute left-[100px]">
            <img
              className="shrink-0 w-[80px] h-7 relative overflow-visible"
              src="porifo.svg"
              alt="Logo"
            />
          </button>
  
          {/* Center Section: Navigation Links */}
          <div className="flex flex-row gap-[124px] items-center justify-center shrink-0 relative font-spoqaLight">
            <button className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
              서비스 소개
            </button>
            <button className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
              피드/커뮤니티
            </button>
            <button className="text-black text-center font-subhead-sh5 text-sm leading-subhead-sh5 font-semibold relative">
              이력서 작성
            </button>
          </div>
  
          {/* Right Section: Authentication Buttons */}
          <div className="absolute right-[100px] flex flex-row gap-2 items-center">
            <div className="rounded-lg border border-primary-500 pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2 items-center justify-center shrink-0 w-[70px] h-[34px] relative">
              <Link 
              className="text-primary text-center font-body-p8m text-xs leading-body-p8m font-semibold relative flex items-center justify-center"
              href="/signin"
              >
                로그인
              </Link>
            </div>
            <div className="bg-primary rounded-lg pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2 items-center justify-center shrink-0 w-[70px] h-[34px] relative text-white">
              <Link 
              className="text-center font-body-p8m text-xs leading-body-p8m font-semibold relative flex items-center justify-center"
              href="/signup">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Header;
  