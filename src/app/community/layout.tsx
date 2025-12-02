"use client";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";

export default function CommunityLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useLoginCheck();

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
