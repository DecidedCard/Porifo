import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Porifo",
    description: "Easy to make portfolio",
    keywords: ["포트폴리오", "이력서", "포리포", "porifo", "porifo.com"],
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        siteName: "Porifo",
        title: "Porifo",
        description: "바로 작성할 수 있는 포트폴리오",
        url: "https://www.porifo.com/",
        locale: "ko_KR",
        type: "website",
        images: { url: "/metadataPorifo.png" },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-hihigray`}>
                <Provider>
                    <Header />
                    {children}
                </Provider>
                <Footer />
            </body>
        </html>
    );
}
