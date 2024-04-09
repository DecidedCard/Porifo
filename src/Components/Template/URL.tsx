import { RiLinkM } from "react-icons/ri";

const URL = () => {
    return (
        <main className="flex my-10">
            <div className="flex flex-row items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                    <div className="font-bold text-[22px] relative">
                        URL
                    </div>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                        
                        <div className="flex flex-row items-center justify-start shrink-0 relative">

                            <div className="flex items-center justify-start text-[14px] text-neutral-500">
                                <RiLinkM className="mr-2"/> http://spartacodingclub.kr
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    );
};

export default URL;