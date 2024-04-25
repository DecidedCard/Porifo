import HeaderNonAuth from "@/Components/HeaderNonAuth";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderNonAuth />
            {children}
        </>
    );
}
