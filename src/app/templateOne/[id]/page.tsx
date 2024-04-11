import Top from "@/Components/Template one/Top";
import Middle from "@/Components/Template one/Middle";
import URL from "@/Components/Template one/URL";

const Template1 = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    return (
        <main className="bg-blue w-[932px] flex flex-col items-center">
            <Top id={id}/>
            <Middle id={id}/>
            <URL id={id}/>
        </main>
    );
};

export default Template1;