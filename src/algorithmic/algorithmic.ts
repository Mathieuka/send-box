export const addLetters = (...letters: string[]) => {
    if (!letters.length) return 'z';
    if (letters.length === 1) return letters[0];

    function indexLetterInAlphabet(letter: string): number {
        return 26 - (122 - letter.charCodeAt(0));
    }
    let indexLetter = 0;
    letters.forEach((letter) => {
        indexLetter += indexLetterInAlphabet(letter);
        if (indexLetter > 26) {
            indexLetter -= 26;
        }
    });

    function alphabetLetterUnicodeToString(indexLetter: number): string {
        return String.fromCharCode(122 - 26 + indexLetter);
    }
    return alphabetLetterUnicodeToString(indexLetter);
};
