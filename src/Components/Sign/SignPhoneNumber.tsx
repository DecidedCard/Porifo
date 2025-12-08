import Input from "@/Components/Commen/Input";

type PhoneNumber = {
    onClickPhoneNumber: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeMiddlePhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeLastPhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    middlePhoneNumber: string;
    lastPhoneNumber: string;
};

const clickNumber = ["010", "011"];

const SignPhoneNumber = ({
    onClickPhoneNumber,
    onChangeMiddlePhoneNumber,
    onChangeLastPhoneNumber,
    middlePhoneNumber,
    lastPhoneNumber,
}: PhoneNumber) => {
    return (
        <div className="mx-auto w-fit h-fit flex flex-col">
            <label className="mb-5">핸드폰 번호</label>
            <div className="flex flex-row gap-2">
                <select
                    id="number"
                    className="flex-1 border border-solid size-14 border-gray_3 rounded-lg w-[110px] p-2 text-P6_R"
                    onChange={onClickPhoneNumber}
                >
                    {clickNumber.map((item: string, idx: number) => {
                        return (
                            <option key={idx} className="text-black mt-2 text-P6_R">
                                {item}
                            </option>
                        );
                    })}
                </select>
                <div className="w-[110px]">
                    <Input
                        type="text"
                        pattern="[0-9]{4}"
                        maxLength={4}
                        size="big"
                        value={middlePhoneNumber}
                        onChange={onChangeMiddlePhoneNumber}
                    />
                </div>
                <div className="w-[110px]">
                    <Input
                        type="text"
                        pattern="[0-9]{4}"
                        size="big"
                        maxLength={4}
                        value={lastPhoneNumber}
                        onChange={onChangeLastPhoneNumber}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignPhoneNumber;
