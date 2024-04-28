import { Database } from "@/types/Supabase";
import { createBrowserClient } from "@supabase/ssr";

const serverClient = () => {
    const supabase = createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    );
    return supabase;
};

export default serverClient;
