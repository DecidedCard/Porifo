import { supabase } from "./clientSupabase";

type Comment = {
    comment: string;
    user_name: string;
    user_email: string;
    profileImage: string;
    portfolio_id: number;
};

export const getComments = async ({ id }: { id: number }) => {
    let query = supabase.from("comments").select("*");
    const { data, error } = await query.order("created_at", { ascending: false }).eq("portfolio_id", `${id}`);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
};

export const addComment = async (newComment: Comment) => {
    const { comment, user_name, user_email, profileImage, portfolio_id } = newComment;
    const { data, error } = await supabase
        .from("comments")
        .insert({ comment, user_name, user_email, profileImage, portfolio_id });
    if (error) {
        console.error(error);
        return null;
    }
    return data;
};

export const deleteComment = async (id: number) => {
    console.log(id);
    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (error) {
        console.error(error);
        return null;
    }
};
