import useBasicInfo from "@/store/portBasicInfoStore";
import { ChangeEvent, useEffect, useState } from "react";
import useInput from "../useInput";

const useUserInfo = () => {
    const { basicInfo, setName, setProfile, setBirthday, setTel, setSchool, setClass, setJob } = useBasicInfo();
    const [image, setImage] = useState<File>();
    const [preview, setPreview] = useState("");

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onChangeProfileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.files![0]);
        const blob = new Blob([e.target.files![0]]);
        const url = URL.createObjectURL(blob);
        setPreview(url);
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
        preview,
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
