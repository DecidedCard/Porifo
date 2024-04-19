import { userData } from "@/util/supabase/supabase_user";
import { supabase } from "@/util/supabase/clientSupabase";

type RedirectType = { setRedirecTo: React.Dispatch<React.SetStateAction<string>> };

const signCheckUserPortfolio = async ({ setRedirecTo }: RedirectType) => {
    const user = await userData();
    const { data: userId } = await supabase.from("portfolioInfo").select("userId");

    const havePortfolio = userId?.find((item) => (item.userId === user?.id ? true : false));

    let redirectTo: string;

    if (user === null || user === undefined) {
        redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/signin`;
        setRedirecTo(redirectTo);
        return;
    }

    // user?.user_metadata.birthDate !== undefined && user?.user_metadata.sex !== undefined
    //     ? havePortfolio
    //         ? (redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/community`)
    //         : (redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/mypage`)
    //     : (redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/socialSetting`);
    // setRedirecTo(redirectTo);
};

export default signCheckUserPortfolio;
