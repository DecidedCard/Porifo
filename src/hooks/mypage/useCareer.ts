import useCareerStore from "@/store/careerStore";
import { ChangeEvent } from "react";

const useCareer = () => {
    const { careers, setCompany, setDepartment, setPosition, setDate, setComment, setAddCareers } = useCareerStore();

    const onChangeCompanyHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setCompany(e.target.value, index);
    };

    const onChangeDepartmentHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setDepartment(e.target.value, index);
    };

    const onChangePositionHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setPosition(e.target.value, index);
    };

    const onChangeDateHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        if (name === "startDate") {
            const startDate = name === "startDate" && value;
            setDate(`${startDate} ~ ${careers[index].date.slice(10)}`, index);
            return;
        }
        const endDate = name === "endDate" && value;
        setDate(`${careers[index].date.slice(0, 7)} ~ ${endDate}`, index);
        e.target.value, index;
    };

    const onChangeCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
        setComment(e.target.value, index);
    };

    const onClickAddHandler = () => {
        setAddCareers();
    };

    return {
        careers,
        onChangeCompanyHandler,
        onChangeDepartmentHandler,
        onChangePositionHandler,
        onChangeDateHandler,
        onChangeCommentHandler,
        onClickAddHandler,
    };
};

export default useCareer;
