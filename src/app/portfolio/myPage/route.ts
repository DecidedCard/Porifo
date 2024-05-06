import serverClient from "@/util/supabase/serverClient";

const supabase = serverClient();

export async function POST(request: Request) {
    const { id, value } = await request.json();

    const { data, error } = await supabase.from("portfolioInfo").select("*").eq(id, value);

    if (error) {
        return new Response(JSON.stringify({ message: error.message, hint: error.hint }), {
            status: parseInt(error.code),
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ data }), { status: 200, headers: { "Content-Type": "application/json" } });
}
