import { classPhotos } from '../classPhoto';

test('Each student in the back must be taller than the student front of them', () => {
    expect(classPhotos([3, 6], [4, 7])).toEqual(true);
    expect(classPhotos([7, 9, 4], [8, 3, 8])).toEqual(false);
});
