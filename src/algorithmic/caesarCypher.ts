export function caesarCipherEncryptor(string: string, key: number) {
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    string.split('').forEach((char) => {
        const currentIdx = alphabet.findIndex(
            (alphaLetter) => char === alphaLetter
        );

        result +=
            alphabet[
                currentIdx + key - Math.floor((currentIdx + key) / 26) * 26
            ];
    });

    return result;
}
