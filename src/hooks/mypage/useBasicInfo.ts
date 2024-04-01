import useInput from "../useInput";

const useBasicInfo = () => {
    const [introduce, onChangeIntroduceHandler] = useInput();

    return { introduce, onChangeIntroduceHandler };
};

export default useBasicInfo;
