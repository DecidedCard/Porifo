import { useState } from "react";

const useMyPage = () => {
    const [nav, setNav] = useState("basicInfo");

    const onClickBasicInfoHandler = () => {
        setNav("basicInfo");
    };

    const onClickIntroduceHandler = () => {
        setNav("introduce");
    };

    const onClickProjectHandler = () => {
        setNav("project");
    };

    const onClickUrlHandler = () => {
        setNav("url");
    };

    console.log(nav);

    return { nav, onClickBasicInfoHandler, onClickIntroduceHandler, onClickProjectHandler, onClickUrlHandler };
};

export default useMyPage;
