import Link from "next/link";
import Button from "../Commen/Button";

const Bottom = () => {
    return (
        <main className="">
            <div className="flex flex-col items-center justify-center gap-2.5 shrink-0 relative">
                <img className="rounded-2xl shrink-0 w-[700px] h-[388px] relative" src="33.png" />
                <div className="flex flex-col items-start justify-start gap-2 p-6 shrink-0 relative">
                    <div className="flex flex-col items-start justify-start gap-2  mr-80 shrink-0 relative">
                        <p className="flex items-center justify-start text-secondary text-left font-spoqaBold font-semibold leading-normal relative">
                            포토샵을 몰라도
                        </p>
                        <p className="flex items-center justify-start text-left font-spoqaBold font-bold leading-normal text-xl relative">
                            디자인 경험이 없어도
                            <br />
                            감각적인 포트폴리오 사이트가 만들어져요
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2.5 mt-20 shrink-0 relative">
                <img className="rounded-2xl shrink-0 w-[600px] h-[320px] relative" src="22.png" />
                <div className="flex flex-col items-start justify-start p-6 mr-52 gap-2 shrink-0 relative">
                    <div className="flex flex-col items-start justify-start gap-2 shrink-0 relative">
                        <p className="text-secondary text-left font-spoqaBold font-semibold leading-normal relative flex items-center justify-start">
                            나의 포트폴리오를 공유하고
                        </p>
                        <p className="text-left font-spoqaBold font-bold leading-normal text-xl relative flex items-center justify-start">
                            다른 동료 개발자들과의 커뮤니티를 통해
                            <br />
                            나의 포트폴리오에 피드백을 받을 수 있어요
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2.5 mt-20 shrink-0 relative">
                <img className="rounded-2xl shrink-0 w-[500px] h-[300px] relative" src="11.png" />
                <div className="p-6 mr-20 flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div className="flex flex-col items-start justify-start gap-2 shrink-0 relative">
                        <p className="flex items-center justify-start text-secondary text-left font-spoqaBold font-semibold leading-normal relative">
                            나의 포트폴리오를 공유하고
                        </p>
                        <p className="flex items-center justify-start text-left font-spoqaBold font-bold leading-normal text-xl relative">
                            디자인 경험이 없어도
                            <br />
                            감각적인 포트폴리오 사이트가 만들어져요
                        </p>
                    </div>
                </div>
            </div>

            <Link href={"/community"} className="flex items-center justify-center my-20">
                <Button text="더 많은 피드를 커뮤니티에서 보기" color="primary" border="none" size="m" fontSize="s" />
            </Link>
        </main>
    );
};

export default Bottom;
