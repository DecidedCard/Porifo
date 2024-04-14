type SignPhoneNumberType = {
    event: React.ChangeEvent<HTMLInputElement>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
};

export const signPhoneNumber = ({ event, setPhoneNumber }: SignPhoneNumberType) => {
    const { value } = event.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    setPhoneNumber(onlyNumber);
};
