import { ChangeEvent, useEffect, useState } from "react";

import useEducationStore from "@/store/educationStore";

const useEducation = () => {
    const { education, setSchool, setClass, setDate, setAddEducation, setMinusEducation } = useEducationStore();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [attending, setAttending] = useState(false);

    const onChangeSchoolHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setSchool(e.target.value, index);
    };

    const onChangeClassHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setClass(e.target.value, index);
    };

    const onChangeDateHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;

        if (name === "startDate") {
            if (!value) {
                setDate("", index);
                setAttending(false);
                return;
            }
            setDate(`${value} ~ ${education[index].date.slice(10)}`, index);
            setStartDate(value);
            return;
        }

        if (name === "endDate") {
            if (!value) {
                setDate("", index);
                setAttending(false);
                return;
            }
            setDate(`${education[index].date.slice(0, 7)} ~ ${value}`, index);
            setAttending(false);
            setEndDate(value);
            return;
        }

        if (name === "attending") {
            if (attending) {
                setDate(`${education[index].date.slice(0, 7)} ~ `, index);
                setAttending(false);
                return;
            }
            setDate(`${education[index].date.slice(0, 7)} ~ 재학 중`, index);
            setAttending(true);
            return;
        }
    };

    const onClickAddHandler = () => {
        setAddEducation();
    };

    const onClickMinusHandler = (arg: number) => {
        setMinusEducation(arg);
    };

    return {
        education,
        startDate,
        endDate,
        attending,
        setStartDate,
        setEndDate,
        setAttending,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeDateHandler,
        onClickAddHandler,
        onClickMinusHandler,
    };
};

export default useEducation;
