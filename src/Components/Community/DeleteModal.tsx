"use client";
import useDelete from "@/hooks/community/useDelete";
import useDetailStore from "@/store/detailStore";

const DeleteModal = ({ children }: any) => {
    const { isDeleteModalOpen, setIsDeleteModalOpen, commentId } = useDetailStore();
    const { handleCommentDelete } = useDelete();

    const handleDeleteBtn = () => {
        handleCommentDelete(commentId);
        setIsDeleteModalOpen(false);
    };
    return (
        <>
            {!isDeleteModalOpen ? (
                <>{children}</>
            ) : (
                <div className="fixed inset-0 z-20 bg-gray3 flex items-center justify-center s:mr-[60px] s:mb-32">
                    <div className="w-[440px] p-8 rounded-2xl bg-white flex flex-col items-center gap-4 sm:w-[85%]  ">
                        <div className="w-[376px] h-[76px] flex flex-col items-center justify-center gap-2 font-spoqaMedium text-[20px]">
                            <span>댓글을 삭제할까요?</span>
                            <span>삭제 후에는 복구할 수 없어요.</span>
                        </div>
                        <div className="flex gap-2 pt-4 justify-center w-[376px] h-[64px] ">
                            <button
                                className="bg-gray2 pt-1 pr-3 pb-1 pl-3 w-[184px] h-[48px] rounded-xl font-spoqaMedium text-[16px] text-white sm:w-[40%]"
                                onClick={() => setIsDeleteModalOpen(false)}
                            >
                                취소
                            </button>
                            <button
                                className="bg-black pt-1 pr-3 pb-1 pl-3 w-[184px] h-[48px] rounded-xl font-spoqaMedium text-[16px] text-white  sm:w-[40%]"
                                onClick={handleDeleteBtn}
                            >
                                삭제
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteModal;
