export const getTodo = async ({ pageParam }: { pageParam: number }) => {
    const req = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`);
    const data = await req.json();
    return data;
};
