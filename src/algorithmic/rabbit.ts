export const findTheRabbit = (arr: string[]) => {
    console.log('[arr] ', arr);
    let counter = 0;
    let currIndex = arr.length - 1;

    console.log('res', arr[currIndex]);
    currIndex -= 1;
    counter += 1;
    console.log('res', arr[currIndex]);
    currIndex -= 1;
    counter += 1;
    console.log('res', arr[currIndex]);
    currIndex = arr.length - 1;
    counter += 1;
    console.log('res', arr[currIndex]);
    let stop = false;
    while (!stop) {
        console.log('res', arr[currIndex]);
        if (arr[currIndex - 1]) {
            currIndex = -1;
            counter += 1;
        } else {
            stop = true;
        }
    }
    // console.log('[counter] ', counter);
};
/*

- - R I // last index
1 2 3 4

- - I R // current index - 1
1 2 3 4

- I R - // current index - 1
1 2 3 4

- R - I // last index //  je suis sur qu'il est au moins à un trou d'écart
1 2 3 4

R - I - // current index - 1 //soit je l'attrape soit il se decale à gauche
1 2 3 4

- IR - -
1 2 3 4

//...j'avance de un trou par un trou vers la gauche

- R - I
1 2 3 4

R - I -
1 2 3 4

- R - -
1 2 3 4

 */
