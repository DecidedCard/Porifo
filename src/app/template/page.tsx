import Top from "@/Components/Template/Top";
import Middle from "@/Components/Template/Middle";
import Bottom from "@/Components/Template/Bottom";
import URL from "@/Components/Template/URL";

const Template = () => {
    return (
        <main className="bg-blue w-[932px] flex flex-col items-center bg-sl">
            <Top />
            <Middle />
            <Bottom />
            <URL />
        </main>
    );
};

export default Template;
