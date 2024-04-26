export const share = (title: string, text: string, url: string) => {
    navigator.share({
        title,
        text,
        url,
    });
};
