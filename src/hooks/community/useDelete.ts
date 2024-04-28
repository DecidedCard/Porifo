import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "@/util/supabase/supabase_comments";
import { QUERY_KEY } from "@/util/query_key";

const useDelete = () => {
    const queryClient = useQueryClient();

    const deleteMutate = useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY.portfolidComments] });
        },
    });
    const handleCommentDelete = (id: number) => {
        deleteMutate.mutate(id);
    };
    return { handleCommentDelete };
};

export default useDelete;
