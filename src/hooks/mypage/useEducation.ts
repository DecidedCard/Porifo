import useEducationStore from "@/store/educationStore";
import { ChangeEvent } from "react";

const useEducation = () => {
    const { education, setAddEducation, setClass, setDate, setMinusEducation, setSchool } = useEducationStore();

    console.log(education[0].date);

    const onChangeSchoolHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setSchool(e.target.value, index);
    };

    const onChangeClassHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setClass(e.target.value, index);
    };

    const onChangeDateHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;

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
    };

    const onClickAddHandler = () => {
        setAddEducation();
    };

    const onClickMinusHandler = (index: number) => {
        setMinusEducation(index);
    };

    return {
        education,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeDateHandler,
        onClickAddHandler,
        onClickMinusHandler,
    };
};

export default useEducation;
