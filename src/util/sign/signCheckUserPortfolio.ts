import { userData } from "@/util/supabase/supabase_user";

type RedirectType = { setRedirecTo: React.Dispatch<React.SetStateAction<string>> };

const signCheckUserPortfolio = async ({ setRedirecTo }: RedirectType) => {
    const user = await userData();

    let redirectTo: string;

    if (user === null || user === undefined) {
        redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/signin`;
        setRedirecTo(redirectTo);
        return;
    }
};

export default signCheckUserPortfolio;
