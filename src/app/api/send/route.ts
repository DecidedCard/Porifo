import SignEmailTemplate from "@/Components/Sign/SignEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: "tech@porifo.com",
            to: ["delivered@resend.dev"],
            subject: "안녕하세요 Porifo입니다.",
            react: SignEmailTemplate({ name: "원숭이" }),
        });
        if (error) {
            return Response.json({ error });
        }
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
