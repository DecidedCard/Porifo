import { supabase } from "./clientSupabase";

export const storageInsert = async (arg: string, path: string, file: File) => {
    try {
        const { data, error } = await supabase.storage.from(arg).upload(path, file);
        if (error) {
            console.error(error);
            throw new Error("이미지를 저장하지 못 했습니다.");
        }
        return data;
    } catch (error) {
        Promise.reject(error);
    }
};

export const imageUrl = (arg: string, filepath: string) => {
    const { data } = supabase.storage.from(arg).getPublicUrl(filepath);
    return data.publicUrl;
};
