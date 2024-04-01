"use client";

import useProject from "@/hooks/project/useProject";
import { useEffect } from "react";

const Project = () => {
    const { images, introduce, onChangeImagesHandler, onChangeIntroduceHandler } = useProject();

    useEffect(() => {
        console.log(introduce);
    }, [introduce]);

    return (
        <>
            <div>
                <div>
                    <label htmlFor="file">
                        <div>파일 업로드하기</div>
                    </label>
                    <input type="file" id="file" onChange={onChangeImagesHandler} className="hidden" multiple />
                </div>
                <div>
                    <label>소개: </label>
                    <input type="text" value={introduce} onChange={onChangeIntroduceHandler} maxLength={100} />
                </div>
            </div>
        </>
    );
};

export default Project;
