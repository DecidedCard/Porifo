import SignEmailTemplate from "@/Components/Sign/SignEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["delivered@resend.dev"],
            subject: "Hello world",
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
