import { supabase } from "./clientSupabase";

export const getComments = async ({ id }: { id: number }) => {
    let query = supabase.from("comments").select("*");
    const { data, error } = await query.order("created_at", { ascending: false }).eq("portfolio_id", `${id}`);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
};
