import React from "react";

import Footer from "@/Components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
};

export default layout;
