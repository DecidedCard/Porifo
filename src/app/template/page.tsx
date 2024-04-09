import Top from "@/Components/Template/Top";
import Middle from "@/Components/Template/Middle";
import Bottom from "@/Components/Template/Bottom";

const Template = () => {
    return (
        <main className="w-[932px] flex flex-col items-center bg-sl">
            <Top />
            <Middle />
            <Bottom />
        </main>
    );
};

export default Template;
