"use client";

import { Flip, ToastContainer } from "react-toastify";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Loading from "../Loading";

import useLiked from "@/hooks/community/useLiked";

import { onClickCopyClipBoardHandler } from "@/util/urlCopy";

import useDetailStore from "@/store/detailStore";

const Modal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
    const { checkLike, id, pending, handleLikeBtn } = useLiked();
    const { isOpenModal } = useDetailStore();

    const router = useRouter();

    //모달 close
    if (!isOpenModal) return null;
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const targetElement = e.target as HTMLDivElement;
        if (targetElement.id === "wrapper") {
            onClose();
            window.location.hash = "";
        }
    };

    if (pending) {
        return (
            <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-80 z-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[900px] h-[900px] bg-hihigray rounded-2xl">
                    <Loading />
                </div>
            </div>
        );
    }

    //댓글 버튼
    const handleCommentBtn = () => {
        router.push("/community#comment");
    };

    const handleBackBtn = () => {
        onClose();
        window.location.hash = "";
    };

    return (
        <div
            className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen z-20 bg-realblack bg-opacity-[0.8] backdrop-blur-xl"
            id="wrapper"
            onClick={handleClose}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl h-[800px]">
                {/* 뒤로가기 버튼 */}
                <button
                    className="rounded-[999px] w-12 h-12 z-10 p-2 flex flex-row gap-2 items-center justify-center shrink-0 absolute ease-in-out duration-300 hover:bg-gray2 hover:bg-opacity-20 sm:z-50"
                    onClick={handleBackBtn}
                >
                    <Image
                        src="/assets/image/communityImage/carouselPrevArrow.svg"
                        alt="아이콘"
                        width={25}
                        height={25}
                    />
                </button>
                <div className="h-[800px] overflow-hidden rounded-2xl">{children}</div>
                {/* 오른쪽 UI */}
                <div className="absolute -right-16 top-1 flex flex-col gap-[28px] sm:hidden">
                    {/* 좋아요 */}
                    <div className="flex flex-col items-center justify-center gap-2 ">
                        <button
                            className="bg-white w-[48px] h-[48px] rounded-[999px] p-2 flex items-center justify-center"
                            onClick={() => handleLikeBtn()}
                        >
                            {checkLike ? (
                                <Image
                                    src="/assets/image/communityImage/redHeart.svg"
                                    alt="아이콘"
                                    width={30}
                                    height={30}
                                />
                            ) : (
                                <Image
                                    src="/assets/image/communityImage/lightGrayHeart.svg"
                                    alt="아이콘"
                                    width={30}
                                    height={30}
                                />
                            )}
                        </button>
                        <span className="font-spoqaBold text-[12px]">좋아요</span>
                    </div>
                    {/* 댓글 */}
                    <div className="flex flex-col items-center justify-center gap-2">
                        <button
                            className="bg-white w-[48px] h-[48px] rounded-[999px] p-2 flex items-center justify-center "
                            onClick={handleCommentBtn}
                        >
                            <Image
                                src="/assets/image/communityImage/blackComment.svg"
                                alt="아이콘"
                                width={26}
                                height={26}
                            />
                        </button>
                        <span className="font-spoqaBold text-[12px]">댓글</span>
                    </div>
                    {/* 공유하기 */}
                    <div className="flex flex-col items-center justify-center gap-2">
                        <button
                            className="bg-white w-[48px] h-[48px] rounded-[999px] p-2 flex items-center justify-center"
                            onClick={() =>
                                onClickCopyClipBoardHandler(`${process.env.NEXT_PUBLIC_BASE_URL}/share/${id}`)
                            }
                        >
                            <Image src="/assets/image/communityImage/share.svg" alt="아이콘" width={25} height={25} />
                        </button>
                        <span className="font-spoqaBold text-[12px]">공유하기</span>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
        </div>
    );
};

export default Modal;
