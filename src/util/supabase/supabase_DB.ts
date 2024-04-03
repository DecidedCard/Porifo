import { supabase } from "./clientSupabase";

export const supabaseInsert = async (arg: string, item: any) => {
    try {
        const { data, error } = await supabase.from(arg).insert(item).select();
        if (error) {
            console.error(error);
            throw new Error("데이터를 저장하지 못 했습니다.");
        }
        return data;
    } catch (error) {
        Promise.reject(error);
    }
};
