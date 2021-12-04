import {
    Student,
    computeStudentsMeanGrade,
    sortStudentsByMeanGradDesc,
} from '../studentMeanGrade';

const students: Student[] = [
    {
        name: 'Paul',
        grades: [10, 15.5, 8, 12],
    },
    {
        name: 'Sophie',
        grades: [18, 16, 9.5],
    },
    {
        name: 'Julie',
        grades: [5.75, 10, 11.5, 8, 14],
    },
];

describe('Should compute and sort student mean grade in desc order', () => {
    test('Compute student mean grade', () => {
        expect(computeStudentsMeanGrade(students)).toEqual([
            {
                mean: 11.375,
                name: 'Paul',
            },
            {
                mean: 14.5,
                name: 'Sophie',
            },
            {
                mean: 9.85,
                name: 'Julie',
            },
        ]);
    });

    test('Sort student by mean grade in Desc', () => {
        expect(
            sortStudentsByMeanGradDesc([
                {
                    mean: 11.375,
                    name: 'Paul',
                },
                {
                    mean: 14.5,
                    name: 'Sophie',
                },
                {
                    mean: 9.85,
                    name: 'Julie',
                },
            ])
        ).toEqual([
            {
                mean: 14.5,
                name: 'Sophie',
            },
            {
                mean: 11.375,
                name: 'Paul',
            },
            {
                mean: 9.85,
                name: 'Julie',
            },
        ]);
    });
});
