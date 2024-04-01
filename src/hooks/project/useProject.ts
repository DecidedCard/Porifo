import { ChangeEvent, useState } from "react";
import useInput from "../useInput";

const useProject = () => {
    const [images, setImages] = useState<FileList>();

    const onChangeImagesHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setImages(e.target.files!);
    };

    return { images, onChangeImagesHandler };
};

export default useProject;
