import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";

// 뮤테이션 함수에 들어가는 인자가 하나일 경우에는 그냥 사용할 수 있지만 여러개일 경우 아래와 같이 사용해 주셔야 됩니다.
// 인자가 두개이상일경우 아래와 같이 객체로 작성해주세요.
//  const updateComment = async ({
//     id,
//     comment,
//   }: {
//     id: string;
//     comment: PostComment;
//   }) => {
//     const { error } = await supabase
//       .from("postComment")
//       .update(comment)
//       .eq("id", id);
//     if (error) {
//       console.error(error);
//       return Promise.reject(error);
//     }
//   };

const useSetMutation = (fc: (arg: any) => Promise<unknown>, queryKey: QueryKey) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: fc,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey });
        },
    });
    return { mutate };
};

export default useSetMutation;
