type OnlyNumber = {
    e: React.ChangeEvent<HTMLInputElement>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const onlyUseNumber = ({ e, setInputValue }: OnlyNumber) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    setInputValue(onlyNumber);
};
