import { ChangeEvent, useState } from "react";

import useEducationStore from "@/store/educationStore";

const useEducation = () => {
    const { education, setSchool, setClass, setDate, setAddEducation, setMinusEducation } = useEducationStore();
    const [attending, setAttending] = useState(false);

    const onChangeSchoolHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setSchool(e.target.value, index);
    };

    const onChangeClassHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        console.log("작동중...");
        setClass(e.target.value, index);
    };

    const onChangeDateHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;

        if (education[index].date.length < 7) {
            setAttending(false);
        }

        if (name === "startDate") {
            const startDate = name === "startDate" && value;
            setDate(`${startDate} ~ ${education[index].date.slice(10)}`, index);
            return;
        }

        if (name === "endDate") {
            const endDate = name === "endDate" && value;
            setDate(`${education[index].date.slice(0, 7)} ~ ${endDate}`, index);
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
        attending,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeDateHandler,
        onClickAddHandler,
        onClickMinusHandler,
    };
};

export default useEducation;
