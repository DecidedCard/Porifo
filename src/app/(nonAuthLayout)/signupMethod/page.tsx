import Image from "next/image";

import SocialSign from "@/Components/Sign/SocialSign";
import SignRouterButton from "@/Components/Sign/SignRouterButton";

import { userData } from "@/util/supabase/supabase_user";

const SignUp_Method = async () => {
    const user = await userData();

    let redirectTo: string;

    user?.user_metadata.birthDate !== undefined &&
    user?.user_metadata.phoneNumber !== undefined &&
    user?.user_metadata.sex !== undefined
        ? (redirectTo = `${process.env.NEXT_PUBLIC_MYPAGE_PATH}`)
        : (redirectTo = `${process.env.NEXT_PUBLIC_SOCIAL_SETTING_PATH}`);

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded w-[500px] h-[400px] bg-white flex justify-center flex-col">
                    <div className="flex justify-center ">
                        <Image
                            className="w-[160px] h-[140px]"
                            width={0}
                            height={0}
                            src="formLogo.svg"
                            alt="form 로고 사진"
                        />
                    </div>
                    <SocialSign redirectTo={redirectTo} />

                    <div className="pr-2 pl-2 flex flex-row gap-2 mx-auto items-center justify-start self-stretch shrink-0 relative">
                        <div className="bg-gray2 w-[150px] h-[1px]"></div>

                        <div className="text-graytext-5 text-left relative flex items-center justify-start">또는</div>

                        <div className="bg-gray2 w-[150px] h-[1px]"></div>
                    </div>

                    <SignRouterButton />
                </div>
            </div>
        </main>
    );
};

export default SignUp_Method;
