//1. Найти сумму и количество положительных элементов.

let array2d = [
    [16, -37, 54, -4, 72],
    [-56, 47, 4, -16, 25],
    [-63, 4, -54, 76, -4],
    [12, -35, 4, 47],
    [2]
];
function showSumPositElem2dArr(arr2d) {
    let sumPositNumbers = 0;

    for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if (element > 0) {
                sumPositNumbers += element;
            }
        }
    }
    return sumPositNumbers
}

function shownumbersPositElem2dArr(arr2d) {
    let positNumbers = 0;

    for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if (element > 0) {
                positNumbers++;
            }
        }
    }
    return positNumbers
}

console.log(`
1. Найти сумму и количество положительных элементов
[
[16,-37,54,-4,72],
[-56,47,4,-16,25],
[-63,4,-54,76,-4],
[12,-35,4,47],
[2]
];

Сума додатних елементів масиву складає ${showSumPositElem2dArr(array2d)}.
У масиві ${shownumbersPositElem2dArr(array2d)} додатних елементів.
`);

//2. Найти минимальный элемент массива и его порядковый номер.

function showMinElem2dArr(arr2d) {
    let minElementArr = arr2d[0][0];// змінна у яку перезаписуватимуться найменші значення

    for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if (minElementArr > element) {
                minElementArr = element;
            }
        }
    }
    return minElementArr
}

function showSerialNumElem2dArr(arr2d, elem) {

    genCycle: for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if (element === elem) {
                break genCycle;
            }
        }
    }
    return `[${i}][${j}]`//вибачте, що з текстом: не придумав як можна коректно вивести індекс елементу 2д масиву
}

console.log(`
2. Найти минимальный элемент массива и его порядковый номер.
[
[16,-37,54,-4,72],
[-56,47,4,-16,25],
[-63,4,-54,76,-4],
[12,-35,4,47],
[2]
];

Мінімальним елементом масиву є ${showMinElem2dArr(array2d)}.
Його порядковим номером є ${showSerialNumElem2dArr(array2d, showMinElem2dArr(array2d))}.
`);

//3. Найти максимальный элемент массива и его порядковый номер.

function showMaxElem2dArr(arr2d) {
    let maxElementArr = arr2d[0][0];// змінна у яку перезаписуватимуться найбільші значення

    for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if (maxElementArr < element) {
                maxElementArr = element;
            }
        }
    }
    return maxElementArr
}

function showSerialNumElem2dArr(arr2d, elem) {

    genCycle: for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if (element === elem) {
                break genCycle;
            }
        }
    }
    return `[${i}][${j}]`
}

console.log(`
3. Найти максимальный элемент массива и его порядковый номер.
[
[16,-37,54,-4,72],
[-56,47,4,-16,25],
[-63,4,-54,76,-4],
[12,-35,4,47],
[2]
];

Максимальним елементом масиву є ${showMaxElem2dArr(array2d)}.
Його порядковим номером є ${showSerialNumElem2dArr(array2d, showMaxElem2dArr(array2d))}.
`);

//4. Определить количество отрицательных элементов.

function showNumbersNegatElem2dArr(arr2d) {
    let negatNumbers = 0;//змінна куди записуватимуться від'ємні значення

    for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if (element < 0) {
                negatNumbers++;
            }
        }
    }
    return negatNumbers
}

console.log(`
4. Определить количество отрицательных элементов.
[
[16,-37,54,-4,72],
[-56,47,4,-16,25],
[-63,4,-54,76,-4],
[12,-35,4,47],
[2]
];

У масиві ${showNumbersNegatElem2dArr(array2d)} від'ємних елементів.
`);

//5. Найти количество нечетных положительных элементов.

function showNumbersOddPosElem2dArr(arr2d) {
    let oddPositNumbers = 0;// змінна для непарних додатних елементів

    for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if ((element > 0) && (element % 2 == 1)) {
                oddPositNumbers++;
            }
        }
    }
    return oddPositNumbers
}

console.log(`
5. Найти количество нечетных положительных элементов.
[
[16,-37,54,-4,72],
[-56,47,4,-16,25],
[-63,4,-54,76,-4],
[12,-35,4,47],
[2]
];

У масиві ${showNumbersOddPosElem2dArr(array2d)} непарних додатних елемента.
`);

//6. Найти количество четных положительных элементов.

function showNumbersEvenPosElem2dArr(arr2d) {
    let evenPositNumbers = 0;// змінна для парних додатних елементів

    for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if ((element > 0) && (element % 2 == 0)) {
                evenPositNumbers++;
            }
        }
    }
    return evenPositNumbers
}

console.log(`
6. Найти количество четных положительных элементов.
[
[16,-37,54,-4,72],
[-56,47,4,-16,25],
[-63,4,-54,76,-4],
[12,-35,4,47],
[2]
];

У масиві ${showNumbersEvenPosElem2dArr(array2d)} парних додатних елементів.
`);

//7. Найти произведение положительных элементов.

function multiplicationPosElem2dArr(arr2d, positNumbersArr2d) {//додав ще один параметр для перевірки наявності додатних елементів
    let productPositNumbers = 1;//змінна у якій зберігатиметься добуток додатних елементів

    genCycle: for (i = 0; i < arr2d.length; i++) {
        let elements = arr2d[i];
        for (j = 0; j < elements.length; j++) {
            let element = elements[j];
            if (positNumbersArr2d == 0) {//перевірка на випадок відсутності додатних елементів
                productPositNumbers = 0;
                break genCycle;
            } else if (element > 0) {
                productPositNumbers *= element;
            }
        }
    }
    return productPositNumbers
}

console.log(`
7. Найти произведение положительных элементов.
[
[16,-37,54,-4,72],
[-56,47,4,-16,25],
[-63,4,-54,76,-4],
[12,-35,4,47],
[2]
];

Добуток додатних елементів масиву складає ${multiplicationPosElem2dArr(array2d, shownumbersPositElem2dArr(array2d))}.
`);