//Методы массивов.

/* С помощью метода reduce необходимо перебрать массив и составить объект, у которого ключ — уникальный элемент массива, значение — сколько раз он встречается в массиве. Например, перебирая массив ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'] мы получим {ololo: 3, anna: 2, red: 1, qwe: 1] */

let someArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log("Масив:\n" + someArr); 

let result = someArr.reduce (function (accum, item) {
     if (item in accum) {//якщо елемент є серед акумульованих збільшувати властивість за ключем цього ж елементу
         accum[item]++
     }
     else {
         accum[item] = 1//у протележному випадку просто надавати значення 1
     }
     return accum
}, {})

console.log ("\nОб'єкт:")
console.log (result);

//Документ

/* Создать список товаров (массив). У товара должно быть имя его цена и количество.

Вывести этот список на страницу (имя, цена и количество должны быть выведены с новой строчки). Для каждого второго товара сделать цвет фона серым. */

let productList = [
    {name : "phone", price : "300$", amount : 50},
    {name : "headphones", price : "50$", amount : 60},
    {name : "charger", price : "10$", amount : 80},
    {name : "case", price : "5$", amount : 80},
];
console.log ("\nСписок товарів:")
console.table(productList);

productList.forEach(function(obj, index) {
    for (const kay in obj) { 
        const element = obj[kay];
        if (index % 2 === 1) {//перевірка для того щоб зафарбувати background кожному 2-ому товару
            document.querySelector(".body").insertAdjacentHTML("beforeend", `<li class="li"><span style="background-color: gray">${kay}:${element}</span></li>`)
        }
        else {
            document.querySelector(".body").insertAdjacentHTML("beforeend", `<li class="li">${kay}:${element}</li>`)
        }
    }//вставляю у кінець body список li кожним пунктом якого є ключ і властивість об'єкту з масиву productList
});