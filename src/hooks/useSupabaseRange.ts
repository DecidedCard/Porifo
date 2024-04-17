import useJobFilterStore from "@/store/jobFilterStore";
import usePageStore from "@/store/pageStore";

const useSupabaseRange = () => {
    const { page, setPage } = usePageStore();
    const { filter, setFilter } = useJobFilterStore();

    //supabase range value
    // const getFromAndTo = () => {
    const ITEM_PER_PAGE = 5;

    let from = page * ITEM_PER_PAGE; //0
    let to = from + ITEM_PER_PAGE; //6

    // };
    return { page, from, to, setPage, filter, setFilter };
};
export default useSupabaseRange;
