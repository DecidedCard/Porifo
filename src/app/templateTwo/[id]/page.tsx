import Top from "@/Components/Template two/Top";
import Middle from "@/Components/Template two/Middle";
import Bottom from "@/Components/Template two/Bottom";
import URL from "@/Components/Template two/URL";

const Template2 = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    return (
        <main className="bg-blue w-[932px] flex flex-col items-center">
            <Top id={id}/>
            <Middle id={id}/>
            <Bottom />
            <URL id={id}/>
        </main>
    );
};

export default Template2;