import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/app/Provider";
import HeaderNonAuth from "@/Components/HeaderNonAuth";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Porifo",
    description: "Easy to make portfolio",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-hihigray`}>
                <HeaderNonAuth />
                <Provider>{children}</Provider>
                <Footer />
            </body>
        </html>
    );
}
