"use client";

import useProject from "@/hooks/project/useProject";
import { useEffect } from "react";

const Project = () => {
    const { images, onChangeImagesHandler } = useProject();

    useEffect(() => {
        console.log(images);
    }, [images]);

    return (
        <>
            <div>
                <label htmlFor="file">
                    <div>파일 업로드하기</div>
                </label>
                <input type="file" id="file" onChange={onChangeImagesHandler} className="hidden" multiple />
            </div>
        </>
    );
};

export default Project;
