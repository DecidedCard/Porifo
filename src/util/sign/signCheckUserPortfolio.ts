import { userData } from "@/util/supabase/supabase_user";
import { supabase } from "@/util/supabase/clientSupabase";

const signCheckUserPortfolio = async ({
    setRedirecTo,
}: {
    setRedirecTo: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const user = await userData();
    const { data: userId } = await supabase.from("portfolioInfo").select("userId");

    const havePortfolio = userId?.find((item) => (item.userId === user?.id ? true : false));

    let redirectTo: string;

    user?.user_metadata.birthDate !== undefined &&
    user?.user_metadata.phoneNumber !== undefined &&
    user?.user_metadata.sex !== undefined
        ? havePortfolio
            ? (redirectTo = `${process.env.NEXT_PUBLIC_COMMUITY_PATH}`)
            : (redirectTo = `${process.env.NEXT_PUBLIC_MYPAGE_PATH}`)
        : (redirectTo = `${process.env.NEXT_PUBLIC_SOCIAL_SETTING_PATH}`);
    setRedirecTo(redirectTo);
};

export default signCheckUserPortfolio;
