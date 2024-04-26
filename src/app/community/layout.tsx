"use client";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Loading from "@/Components/Loading";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";

export default function FindPasswordLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isFetching, isError } = useLoginCheck();

    if (isFetching) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
