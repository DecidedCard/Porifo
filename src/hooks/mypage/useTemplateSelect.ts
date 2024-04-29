import { useState } from "react";

import usePortfolioInfoStore from "@/store/portfolioInfoStore";

const useTemplateSelect = () => {
    const [templateSelectModal, setTemplateSelectModal] = useState(false);
    const { setTemplate } = usePortfolioInfoStore();

    const onClickTemplateModalToggleHandler = () => {
        setTemplateSelectModal(!templateSelectModal);
    };

    const onClickTemplateSelectHandler = (arg: string) => {
        setTemplate(arg);
        onClickTemplateModalToggleHandler();
    };

    return {
        templateSelectModal,
        setTemplateSelectModal,
        onClickTemplateModalToggleHandler,
        onClickTemplateSelectHandler,
    };
};

export default useTemplateSelect;
