import { ChangeEvent, useState } from "react";
import useInput from "../useInput";

const useProject = () => {
    const [images, setImages] = useState<FileList>();
    const [introduce, onChangeIntroduceHandler] = useInput();

    const onChangeImagesHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setImages(e.target.files!);
    };

    return { images, introduce, onChangeImagesHandler, onChangeIntroduceHandler };
};

export default useProject;
