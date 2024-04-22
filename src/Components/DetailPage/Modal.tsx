"use client";

import Image from "next/image";

const Modal = ({ isVisible, onClose, children }: any) => {
    if (!isVisible) return null;
    const handleClose = (e: any) => {
        if (e.target.id === "wrapper") {
            onClose();
        }
    };
    //좋아요 버튼
    const handleLikeBtn = () => {};

    //댓글 버튼
    const handleCommentBtn = () => {};

    //공유하기 버튼
    const handleShareBtn = () => {};

    return (
        <div
            className="fixed inset-0 z-20 bg-realblack bg-opacity-25 backdrop-blur-xl flex items-center justify-center"
            id="wrapper"
            onClick={handleClose}
        >
            <button
                className="bg-[rgba(255,255,255,0.80)] rounded-[999px] w-[48px] h-[48px] p-2 flex flex-row gap-2 items-center justify-center shrink-0 absolute left-[22%] top-[25px] ease-in-out duration-300 hover:bg-nonegray hover:bg-opacity-20"
                style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                onClick={onClose}
            >
                <Image src="icon-set9.svg" alt="아이콘" width={25} height={25} />
            </button>
            {/* 오른쪽 */}
            <div className="absolute right-[22%] top-[25px] flex flex-col gap-[28px] ">
                {/* 좋아요 */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <button
                        className="bg-[rgba(255,255,255,0.80)] w-[48px] h-[48px] rounded-[999px] p-2 flex flex-row gap-2 items-center justify-center ease-in-out duration-300 hover:bg-nonegray hover:bg-opacity-20"
                        style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                        onClick={handleLikeBtn}
                    >
                        <Image className="block hover:hidden" src="grayHeart.svg" alt="아이콘" width={30} height={30} />
                    </button>
                    <span className="text-white font-spoqaBold text-[12px]">좋아요</span>
                </div>
                {/* 댓글 */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <button
                        className="bg-[rgba(255,255,255,0.80)] w-[48px] h-[48px] rounded-[999px] p-2 flex flex-row gap-2 items-center justify-center ease-in-out duration-300 hover:bg-nonegray hover:bg-opacity-20"
                        style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                        onClick={handleCommentBtn}
                    >
                        <Image src="blackComment.svg" alt="아이콘" width={26} height={26} />
                    </button>
                    <span className="text-white font-spoqaBold text-[12px]">댓글</span>
                </div>
                {/* 공유하기 */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <button
                        className="bg-[rgba(255,255,255,0.80)] w-[48px] h-[48px] rounded-[999px] p-2 flex flex-row gap-2 items-center justify-center ease-in-out duration-300 hover:bg-nonegray hover:bg-opacity-20"
                        style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                        onClick={handleShareBtn}
                    >
                        <Image src="share.svg" alt="아이콘" width={25} height={25} />
                    </button>
                    <span className="text-white font-spoqaBold text-[12px]">공유하기</span>
                </div>
            </div>
            <div className="p-2 ">{children}</div>
        </div>
    );
};

export default Modal;
