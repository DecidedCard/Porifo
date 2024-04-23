import useUserStore from "@/store/userStore";
import useCardIdStore from "@/store/detailStore";
import { QUERY_KEY } from "@/util/query_key";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addLike, getLikes } from "@/util/supabase/detail_supabase_DB";

const useLiked = () => {
    const queryClient = useQueryClient();
    const { user } = useUserStore(); //로그인여부 확인
    const { cardId: id } = useCardIdStore(); // 현재 모달 DB ID

    const nowUser = user?.user_metadata.email; //로그인 유저의 email

    const { data: likes, isPending: pending } = useQuery({
        queryKey: [QUERY_KEY.portfolioLikes],
        queryFn: () => getLikes({ id: "id", value: id }),
    });

    //좋아요 추가
    const addLikeMutate = useMutation({
        mutationFn: addLike,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY.portfolioLikes] });
        },
    });

    //좋아요 눌렀는지 확인
    const checkLike = likes?.find((item) => item === user?.user_metadata.email);
    //좋아요 버튼 클릭
    const handleLikeBtn = () => {
        if (!user) {
            return alert("로그인이 필요한 서비스 입니다."); //비회원일시
        }
        if (checkLike) {
            //좋아요를 이미 눌렀을 경우
            //현재 likes배열에서 내 이메일을 제거
            const deleteUserEmail = likes!.filter((item) => item !== nowUser);
            const likeUser = {
                id,
                user_email: deleteUserEmail,
            };
            addLikeMutate.mutate(likeUser);
            return;
        }
        const nowUserEmail = [...likes!, user!.user_metadata.email]; //현재 유저 email
        const likeUser = {
            id,
            user_email: nowUserEmail,
        };
        addLikeMutate.mutate(likeUser);
    };
    return { user, id, likes, pending, checkLike, handleLikeBtn };
};

export default useLiked;
