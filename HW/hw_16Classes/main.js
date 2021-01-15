"use strict"
/* Задача

Сеть фастфудов предлагает несколько видов гамбургеров:

    маленький (50 тугриков, 20 калорий)
    большой (100 тугриков, 40 калорий)

Гамбургер может быть с одним из нескольких видов начинок:

    сыром (+ 10 тугриков, + 20 калорий)
    салатом (+ 20 тугриков, + 5 калорий)
    картофелем (+ 15 тугриков, + 10 калорий)

Можно добавить добавки:

    посыпать приправой (+ 15 тугриков, 0 калорий)
    полить майонезом (+ 20 тугриков, + 5 калорий).

Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

Пример работы кода:

// маленький гамбургер с начинкой из сыра

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза

hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий

console.log(“Calories: “ + hamburger.calculateCalories());

// сколько стоит

console.log("Price: “ + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?

console.log("Price with sauce: “ + hamburger.calculatePrice());
 */

class Hamburger {
    sizeSmall = {//усі опції записав об'єктами
        price: 50,
        calories: 20,
    }
    sizeBig = {
        price: 100,
        calories: 40,
    }
    stuffingCheesev = {
        price: 10,
        calories: 20,
    }
    stuffingSalad = {
        price: 20,
        calories: 5,
    }
    stuffingPotato = {
        price: 15,
        calories: 10,
    }
    toppingSause = {
        price: 15,
        calories: 0,
    }
    toppingMayo = {
        price: 20,
        calories: 5,
    }
    clientHamburger = [];//масив для обраних опцій
    add(item){//метод для додавання обраних опцій до масиву
        this.clientHamburger.push(item)
        return this.clientHamburger
    }
    calculatePrice() {
        let price = 0;
        this.clientHamburger.forEach(function(elem) {//сумую ціни кожної обраної опції
            price += Number(elem.price);
        })
        return price + " тугриків";
    }
    calculateCalories() {
        let calories = 0; 
        this.clientHamburger.forEach(function(elem) {//сумую калорії кожної обраної опції
            calories += Number(elem.calories);
        })
        return calories + " калорій";
    }
}

let hamburger = new Hamburger;//використовую клас, створюю об'єкт 
hamburger.add(hamburger.sizeBig);//додаю різні опції
hamburger.add(hamburger.stuffingCheesev);
hamburger.add(hamburger.stuffingSalad);
hamburger.add(hamburger.toppingMayo);
console.table(hamburger.clientHamburger);//виводжу клієнтське замовлення
console.log(hamburger.calculatePrice());//підраховую ціну
console.log(hamburger.calculateCalories());//підраховую калорії
