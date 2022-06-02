export interface Question {
    id: string;
    name: string;
    category: string;
}

export interface Submission {
    questionId: string;
    status: string;
}

export const addStatus = (questions: Question[], submissions: Submission[]) =>
    questions.map((question) => {
        const status = submissions.find(
            ({ questionId }) => questionId === question.id
        )?.status;

        return {
            ...question,
            status: status || 'unattempted',
        };
    });
