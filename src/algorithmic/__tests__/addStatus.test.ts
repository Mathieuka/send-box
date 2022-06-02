import { addStatus, Question, Submission } from '../addStatus';

const questions: Question[] = [
    { id: 'blog-post', name: 'Sign-Up Form', category: 'HTML' },
    { id: 'throttle', name: 'js', category: 'JavaScript' },
    { id: 'stopwatch', name: 'Stopwatch', category: 'DOM Manipulation' },
    { id: 'item-cart', name: 'Item Cart', category: 'HTML' },
];

const submissions: Submission[] = [
    { questionId: 'blog-post', status: 'CORRECT' },
    { questionId: 'throttle', status: 'INCORRECT' },
    { questionId: 'stopwatch', status: 'PARTIALLY_CORRECT' },
];

test('Add status to the questions', () => {
    expect(addStatus(questions, submissions)).toEqual([
        {
            id: 'blog-post',
            name: 'Sign-Up Form',
            category: 'HTML',
            status: 'CORRECT',
        },
        {
            id: 'throttle',
            name: 'js',
            category: 'JavaScript',
            status: 'INCORRECT',
        },
        {
            id: 'stopwatch',
            name: 'Stopwatch',
            category: 'DOM Manipulation',
            status: 'PARTIALLY_CORRECT',
        },
        {
            id: 'item-cart',
            name: 'Item Cart',
            category: 'HTML',
            status: 'unattempted',
        },
    ]);
});
