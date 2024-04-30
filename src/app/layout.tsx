import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { QUERY_KEY } from "@/util/query_key";
import serverUserCheck from "@/util/serverUserCheck";
import cacheQueryClient from "@/util/cacheQueryClient";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/util/supabase/server";
import Prefetch from "./Prefetch";

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
        images: { url: "https://cyhvfqdzonehvongdtow.supabase.co/storage/v1/object/public/metadata/metaPorifo.png" },
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
                    <div className="min-h-[830px] sm:w-full">
                        <Prefetch>{children}</Prefetch>
                    </div>
                </Provider>
            </body>
        </html>
    );
}
