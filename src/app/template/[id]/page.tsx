import Top from "@/Components/Template/Top";
import Middle from "@/Components/Template/Middle";
import Bottom from "@/Components/Template/Bottom";
import URL from "@/Components/Template/URL";

const Template = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    return (
        <main className="bg-blue w-[932px] flex flex-col items-center bg-sl">
            <Top id={id}/>
            <Middle />
            <Bottom />
            <URL />
        </main>
    );
};

export default Template;
