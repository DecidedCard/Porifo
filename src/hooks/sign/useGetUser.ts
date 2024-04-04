import useUser from "@/store/userStore";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";

const useGetUser = async () => {
    const router = useRouter();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
        alert("로그인 해주시기 바랍니다.");
        router.replace("/signin");
    }
    console.log(user);
};

export default useGetUser;
