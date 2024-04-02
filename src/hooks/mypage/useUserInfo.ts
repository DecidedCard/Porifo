import useBasicInfo from "@/store/portBasicInfoStore";
import { ChangeEvent } from "react";

const useUserInfo = () => {
    const { basicInfo, setName, setProfile, setBirthday, setTel, setSchool, setClass, setJob } = useBasicInfo();

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const onChangeProfileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setProfile(e.target.value);
    };
    const onChangeBirthdayHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value);
    };
    const onChangeTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value);
    };
    const onChangeSchoolHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSchool(e.target.value);
    };
    const onChangeClassHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setClass(e.target.value);
    };
    const onChangeJobHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setJob(e.target.value);
    };

    return {
        onChangeNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeJobHandler,
    };
};

export default useUserInfo;
