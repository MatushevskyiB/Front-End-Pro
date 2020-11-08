/* создать функции конструкторы которые создают объекты с нужными параметрами и определяют методы которые вычисляют и привести примеры их использования */

//1) площадь круга + 2) длина окружности

function Circle (radius) {
    this.radius = radius,
    this.calculateArea = function () {
        return this.radius ** 2 * Math.PI//підрахунок площі кола
    } 
    this.calculateCircumference = function () {
        return this.radius * 2 * Math.PI//підрахунок довжини кола
    }
}

let circle = new Circle(10);
console.log (`
1) площадь круга + 2) длина окружности

Площа кола з радіусом ${circle.radius} = ${circle.calculateArea()}
`)
console.log (`Довжина кола з радіусом ${circle.radius} = ${circle.calculateCircumference()}`)

circle.radius = 100;//обрав 100 і 1000 ботак легше можна перевірити результат
console.log (`Площа кола з радіусом ${circle.radius} = ${circle.calculateArea()}`)
console.log (`Довжина кола з радіусом ${circle.radius} = ${circle.calculateCircumference()}`)

circle.radius = 1000;
console.log (`Площа кола з радіусом ${circle.radius} = ${circle.calculateArea()}`)
console.log (`Довжина кола з радіусом ${circle.radius} = ${circle.calculateCircumference()}`)

//3) среднее арифметическое двух чисел

function Numbers (number1, number2) {
    this.number1 = number1,
    this.number2 = number2,
    this.calculateAverage = function () {
        return (this.number1 + this.number2) / 2
    }
}

let someNumbers = new Numbers (2, 4);
console.log (`
3) среднее арифметическое двух чисел

Середнє арифметичне ${someNumbers.number1} і ${someNumbers.number2} = ${someNumbers.calculateAverage()}`);
someNumbers.number1 = 5;
someNumbers.number2 = 7;
console.log (`Середнє арифметичне ${someNumbers.number1} і ${someNumbers.number2} = ${someNumbers.calculateAverage()}`);

//4) среднее арифметическое массива (массив чисел)

function Array (arr) {
    this.arr = arr,
    this.calculateArraeAverage = function () {
        let elemSum = 0;
        for (let i = 0; i < (this.arr).length; i++) {//лічильник
            elemSum += this.arr [i];//сума елементів
        }
        return Math.round(elemSum / (this.arr).length)//ділення на кількість елементів та округлення результату
    }
}

let someArray = new Array ([16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, 12, -35, 4, 47]);
console.log (`
4) среднее арифметическое массива (массив чисел)

Середнє арифметичне масиву ${someArray.arr} = ${someArray.calculateArraeAverage()}`);

someArray.arr = [2, 2, 4, 4];
console.log (`Середнє арифметичне масиву ${someArray.arr} = ${someArray.calculateArraeAverage()}`);