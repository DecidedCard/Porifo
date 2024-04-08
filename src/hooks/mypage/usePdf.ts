import { usePDF } from "react-to-pdf";

import type { User } from "@/types/User";

const usePdf = ({ user }: { user: User }) => {
    const { targetRef, toPDF } = usePDF();
    const onClickDownloadPdfHandler = () => {};
};
