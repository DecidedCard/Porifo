export type User = {
    app_metadata: { provider: string; providers: string[] };
    aud: string;
    confirmed_at: string;
    created_at: string;
    email: string;
    email_confirmed_at: string;
    id: string;
    updated_at: string;
    user_metadata: {
        age: string;
        email: string;
        birthDate: string;
        phoneNumber: string;
        sex: string;
        sub: string;
        name: string;
        profileImage: string;
        user_name: string;
    };
};
