const Footer = () => {
    return (
            <div className="bg-hihigray -z-10 pt-[60px] pb-[60px] pl-[100px] flex flex-row gap-5 items-start justify-start shrink-0 h-[280px] relative">
                <img
                    className="flex flex-col gap-2 items-start justify-start shrink-0 w-[80px] h-[auto] relative overflow-visible"
                    src="../porifo.svg"
                />
                <div className="pr-[43px] pl-[43px] flex flex-row gap-2 items-start justify-start self-stretch flex-1 relative">
                    <div className="text-left font-spoqaBold font-bold leading-normal text-xl relative flex items-center justify-start">
                        푸터
                    </div>
                </div>
            </div>
    );
};

export default Footer;
