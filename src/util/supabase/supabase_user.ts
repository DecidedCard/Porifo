import { supabase } from "./clientSupabase";

export const userData = async () => {
    try {
        const {
            data: { user },
            error,
        } = await supabase.auth.getUser();
        if (error) {
            console.error(error);
            throw new Error(error.message);
        }
        return user;
    } catch (error) {
        Promise.reject(error);
    }
};

export const userUpdate = async (arg: any) => {
    try {
        const { data, error } = await supabase.auth.updateUser({
            data: arg,
        });
        if (error) {
            console.error(error);
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        Promise.reject(error);
    }
};
