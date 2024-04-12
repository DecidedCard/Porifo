import useCareerStore from "@/store/careerStore";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";
import useProjectsStore from "@/store/projectStore";
import { portfolioInputFormValidation } from "@/util/input_form_validation";
import { useState } from "react";

const useGuestButton = () => {
    const { basicInfo } = usePortfolioInfoStore();
    const { projects } = useProjectsStore();
    const { careers } = useCareerStore();
    const [previewModal, setPreviewModal] = useState(false);

    const portfolioPreview = { ...basicInfo, project: projects, career: careers };

    const onClickPreviewModal = () => {
        if (portfolioInputFormValidation(portfolioPreview)) {
            alert("정보를 전부다 입력해 주시기 바랍니다.");
            return;
        }
        setPreviewModal(true);
    };

    return { previewModal, portfolioPreview, setPreviewModal, onClickPreviewModal };
};

export default useGuestButton;
