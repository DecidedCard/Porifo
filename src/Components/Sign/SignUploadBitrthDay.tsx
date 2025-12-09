type BirthDayType = {
    onClickBirthYear: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClickBirthMonth: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClickBirthDay: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const thisYear = new Date();

const BIRTHDAY_YEAR_LIST = Array.from({ length: 30 }, (_, i) => `${thisYear.getFullYear() - 20 - i}년`);
const BIRTHDAY_MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
const BIRTHDAY_DAY_LIST = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);

const SignUploadBitrthDay = ({ onClickBirthYear, onClickBirthMonth, onClickBirthDay }: BirthDayType) => {
    return (
        <div className="mb-5 mx-auto w-fit h-fit flex flex-col">
            <label className="mb-5  flex">
                생년월일 <p className="ml-1 text-[10px] text-alert">★</p>
            </label>

            <div className="flex flex-row gap-2">
                <select
                    onChange={onClickBirthYear}
                    className="flex-1 border border-solid size-14 border-gray_3 rounded-lg w-[110px] p-2 text-P6_R"
                >
                    {BIRTHDAY_YEAR_LIST.map((year, index) => (
                        <option value={year} key={index}>
                            {year}
                        </option>
                    ))}
                </select>
                <select
                    onChange={onClickBirthMonth}
                    className="flex-1 border border-solid size-14 border-gray_3 rounded-lg w-[110px] p-2 text-P6_R text-black placeholder:text-gray_4"
                >
                    {BIRTHDAY_MONTH_LIST.map((month, index) => (
                        <option key={index}>{month}</option>
                    ))}
                </select>
                <select
                    onChange={onClickBirthDay}
                    className="flex-1 border border-solid size-14 border-gray_3 rounded-lg w-[110px] p-2 text-P6_R"
                >
                    {BIRTHDAY_DAY_LIST.map((day, index) => (
                        <option key={index}>{day}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SignUploadBitrthDay;
