export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
    public: {
        Tables: {
            comments: {
                Row: {
                    comment: string | null;
                    created_at: string;
                    id: number;
                    portfolio_id: number | null;
                    user_email: string | null;
                    user_name: string | null;
                };
                Insert: {
                    comment?: string | null;
                    created_at?: string;
                    id?: number;
                    portfolio_id?: number | null;
                    user_email?: string | null;
                    user_name?: string | null;
                };
                Update: {
                    comment?: string | null;
                    created_at?: string;
                    id?: number;
                    portfolio_id?: number | null;
                    user_email?: string | null;
                    user_name?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "public_comments_portfolio_id_fkey";
                        columns: ["portfolio_id"];
                        isOneToOne: false;
                        referencedRelation: "portfolioInfo";
                        referencedColumns: ["id"];
                    },
                ];
            };
            portfolioInfo: {
                Row: {
                    birthday: string | null;
                    blogLink: string | null;
                    career: string[] | null;
                    class: string | null;
                    created_at: string;
                    email: string | null;
                    englishName: string | null;
                    githubLink: string | null;
                    id: number;
                    introduce: string | null;
                    job: string | null;
                    name: string | null;
                    profileImage: string | null;
                    project: Json | null;
                    school: string | null;
                    share: boolean | null;
                    tel: string | null;
                    template: string | null;
                    userId: string | null;
                };
                Insert: {
                    birthday?: string | null;
                    blogLink?: string | null;
                    career?: string[] | null;
                    class?: string | null;
                    created_at?: string;
                    email?: string | null;
                    englishName?: string | null;
                    githubLink?: string | null;
                    id?: number;
                    introduce?: string | null;
                    job?: string | null;
                    name?: string | null;
                    profileImage?: string | null;
                    project?: Json | null;
                    school?: string | null;
                    share?: boolean | null;
                    tel?: string | null;
                    template?: string | null;
                    userId?: string | null;
                };
                Update: {
                    birthday?: string | null;
                    blogLink?: string | null;
                    career?: string[] | null;
                    class?: string | null;
                    created_at?: string;
                    email?: string | null;
                    englishName?: string | null;
                    githubLink?: string | null;
                    id?: number;
                    introduce?: string | null;
                    job?: string | null;
                    name?: string | null;
                    profileImage?: string | null;
                    project?: Json | null;
                    school?: string | null;
                    share?: boolean | null;
                    tel?: string | null;
                    template?: string | null;
                    userId?: string | null;
                };
                Relationships: [];
            };
            users: {
                Row: {
                    age: string | null;
                    created_at: string;
                    email: string;
                    id: number;
                    password: string | null;
                    phoneNumber: string | null;
                    sex: string | null;
                };
                Insert: {
                    age?: string | null;
                    created_at?: string;
                    email?: string;
                    id?: number;
                    password?: string | null;
                    phoneNumber?: string | null;
                    sex?: string | null;
                };
                Update: {
                    age?: string | null;
                    created_at?: string;
                    email?: string;
                    id?: number;
                    password?: string | null;
                    phoneNumber?: string | null;
                    sex?: string | null;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
    PublicTableNameOrOptions extends
        | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
              Database[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
          Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
          Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
          Insert: infer I;
      }
        ? I
        : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
          Update: infer U;
      }
        ? U
        : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
