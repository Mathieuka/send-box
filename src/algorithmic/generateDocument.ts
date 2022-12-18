export const generateDocument = (characters: string, document: string) => {
    let chars = characters;
    let matchingChars = 0;

    for (let i = 0; i < document.length; i += 1) {
        const index = [...chars].findIndex((char) => char === document[i]);

        if (index >= 0) {
            chars = chars.replace(chars[index], '');
            matchingChars += 1;
        }
    }

    return matchingChars === document.length;
};
