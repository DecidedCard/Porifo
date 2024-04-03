import React from "react";

import type { Options } from "react-to-pdf";

const PdfButton = ({ toPDF }: { toPDF: (options?: Options | undefined) => void }) => {
    return <button onClick={() => toPDF()}>PDF 다운로드</button>;
};

export default PdfButton;
