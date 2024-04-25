import HeaderNonAuth from "@/Components/HeaderNonAuth";
import Footer from "@/Components/Footer";

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
