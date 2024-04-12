import usePortfolioInfoStore from "@/store/portfolioInfoStore";
import { useState } from "react";

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

    return { templateSelectModal, onClickTemplateModalToggleHandler, onClickTemplateSelectHandler };
};

export default useTemplateSelect;
