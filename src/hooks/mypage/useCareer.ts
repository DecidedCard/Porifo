import useCareerStore from "@/store/careerStore";
import { ChangeEvent } from "react";

const useCareer = () => {
    const { careers, setCompany, setDepartment, setPosition, setDate, setComment, setAddCareer, setMinusCareer } =
        useCareerStore();

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

        if (name === "endDate") {
            const endDate = name === "endDate" && value;
            setDate(`${careers[index].date.slice(0, 7)} ~ ${endDate}`, index);
            return;
        }
    };

    const onChangeCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
        setComment(e.target.value, index);
    };

    const onClickAddHandler = () => {
        setAddCareer();
    };

    const onClickMinusHandler = (arg: number) => {
        setMinusCareer(arg);
    };

    return {
        careers,
        onChangeCompanyHandler,
        onChangeDepartmentHandler,
        onChangePositionHandler,
        onChangeDateHandler,
        onChangeCommentHandler,
        onClickAddHandler,
        onClickMinusHandler,
    };
};

export default useCareer;
