import { ChangeEvent, useState } from "react";

import useCareerStore from "@/store/careerStore";
const useCareer = () => {
    const { careers, setCompany, setDepartment, setPosition, setDate, setComment, setAddCareer, setMinusCareer } =
        useCareerStore();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [attending, setAttending] = useState(false);

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
            if (!value) {
                setDate("", index);
                setAttending(false);
                setStartDate("");
                setEndDate("");
                return;
            }
            setDate(`${value} ~ ${endDate}`, index);
            setStartDate(value);
            return;
        }

        if (name === "endDate") {
            if (!value) {
                setDate("", index);
                setAttending(false);
                setStartDate("");
                setEndDate("");
                return;
            }
            setDate(`${startDate} ~ ${value}`, index);
            setEndDate(value);
            return;
        }

        if (name === "attending") {
            if (attending) {
                setDate(`${startDate} ~ `, index);
                setAttending(false);
                return;
            }
            setDate(`${startDate} ~ 재직 중`, index);
            setAttending(true);
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
        startDate,
        endDate,
        attending,
        setStartDate,
        setEndDate,
        setAttending,
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
