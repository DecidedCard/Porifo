import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";

const useGetUser = async () => {
    const {
        data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
};

export default useGetUser;
