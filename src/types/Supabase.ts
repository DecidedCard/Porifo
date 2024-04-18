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
                    profileImage: string | null;
                    user_email: string | null;
                    user_name: string | null;
                };
                Insert: {
                    comment?: string | null;
                    created_at?: string;
                    id?: number;
                    portfolio_id?: number | null;
                    profileImage?: string | null;
                    user_email?: string | null;
                    user_name?: string | null;
                };
                Update: {
                    comment?: string | null;
                    created_at?: string;
                    id?: number;
                    portfolio_id?: number | null;
                    profileImage?: string | null;
                    user_email?: string | null;
                    user_name?: string | null;
                };
                Relationships: [];
            };
            portfolioInfo: {
                Row: {
                    birthday: string | null;
                    blogLink: string | null;
                    career: Json | null;
                    created_at: string;
                    email: string | null;
                    englishName: string | null;
                    githubLink: string | null;
                    id: number;
                    introduce: string | null;
                    job: string | null;
                    name: string | null;
                    oneLineIntroduce: string | null;
                    profileImage: string | null;
                    project: Json | null;
                    share: boolean | null;
                    skillTag: Json;
                    tel: string | null;
                    template: string | null;
                    userId: string | null;
                    viewCnt: number | null;
                };
                Insert: {
                    birthday?: string | null;
                    blogLink?: string | null;
                    career?: Json | null;
                    created_at?: string;
                    email?: string | null;
                    englishName?: string | null;
                    githubLink?: string | null;
                    id?: number;
                    introduce?: string | null;
                    job?: string | null;
                    name?: string | null;
                    oneLineIntroduce?: string | null;
                    profileImage?: string | null;
                    project?: Json | null;
                    share?: boolean | null;
                    skillTag: Json;
                    tel?: string | null;
                    template?: string | null;
                    userId?: string | null;
                    viewCnt?: number | null;
                };
                Update: {
                    birthday?: string | null;
                    blogLink?: string | null;
                    career?: Json | null;
                    created_at?: string;
                    email?: string | null;
                    englishName?: string | null;
                    githubLink?: string | null;
                    id?: number;
                    introduce?: string | null;
                    job?: string | null;
                    name?: string | null;
                    oneLineIntroduce?: string | null;
                    profileImage?: string | null;
                    project?: Json | null;
                    share?: boolean | null;
                    skillTag?: Json;
                    tel?: string | null;
                    template?: string | null;
                    userId?: string | null;
                    viewCnt?: number | null;
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
