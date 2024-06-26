import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/types/Supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient<Database>(supabaseUrl!, supabaseKey!);
