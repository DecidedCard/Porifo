import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function FindPasswordLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
