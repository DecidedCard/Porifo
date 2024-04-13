"use client";
import React from "react";

const CommentInput = () => {
    // 현재 로그인한 유저의 아바타를 가지고 와야함
    //추가 할때 user_name,comment,user_email,profileImage
    return (
        <div className="flex w-[100%] pt-10">
            <img className="rounded-[50px] w-10 h-10 object-cover mr-3" src="rectangle0.png" />
            <div className="flex flex-col gap-2 items-end justify-start flex-1 relative">
                <div className="bg-gray-white rounded-lg border-solid border-grayshape-5 border pt-2 pr-3 pb-2 pl-3 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 h-[78px] relative">
                    <div className="text-graytext-black text-left font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-start">
                        진짜 놀라워요!
                    </div>
                </div>
                <div className="bg-primary-1 rounded pt-0.5 pr-3 pb-0.5 pl-3 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                    <div className="border-solid border-2 border-sky-500 text-graytext-white text-center font-body-p9m-font-family text-body-p9m-font-size leading-body-p9m-line-height font-body-p9m-font-weight relative flex items-center justify-center">
                        댓글 게시
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentInput;
