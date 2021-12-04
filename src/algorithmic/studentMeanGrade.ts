export interface Student {
    name: string;
    grades: number[];
}

export interface StudentWithMean {
    name: string;
    mean: number;
}

const computeMean = (grades: number[]) =>
    grades.reduce((cur, acc) => cur + acc, 0) / grades.length;

export const computeStudentsMeanGrade = (students: Student[]) =>
    students.map(({ name, grades }) => ({
        name,
        mean: computeMean(grades),
    }));

export const sortStudentsByMeanGradDesc = (students: StudentWithMean[]) =>
    [...students].sort((studA, studB) => studB.mean - studA.mean);
