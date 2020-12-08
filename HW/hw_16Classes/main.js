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
    price = 0;
    calories = 0;

    sizeSmall() {
        this.price += 50;
        this.calories += 20;
        return this.price, this.calories;
    }
    sizeBbig() {
        this.price += 100;
        this.calories += 40;
        return this.price, this.calories;
    }
    stuffingCheze() {
        this.price += 10;
        this.calories += 20;
        return this.price, this.calories;
    }
    stuffingSalad() {
        this.price += 20;
        this.calories += 5;
        return this.price, this.calories;
    }
    stuffingPotato() {
        this.price += 15;
        this.calories += 10;
        return this.price, this.calories;
    }
    toppingSause() {
        this.price += 15;
        this.calories += 0;
        return this.price, this.calories;
    }
    toppingMayo() {
        this.price += 20;
        this.calories += 5;
        return this.price, this.calories;
    }
    calculatePrice() {
        return this.price + " тугриков";
    }
    calculateCalories() {
        return this.calories + " калорий"
    }
}

let sandwich = new Hamburger;

console.log(`Сеть фастфудов предлагает несколько видов гамбургеров:

    маленький (50 тугриков, 20 калорий)
    большой (100 тугриков, 40 калорий)

Гамбургер может быть с одним из нескольких видов начинок:

    сыром (+ 10 тугриков, + 20 калорий)
    салатом (+ 20 тугриков, + 5 калорий)
    картофелем (+ 15 тугриков, + 10 калорий)

Можно добавить добавки:

    посыпать приправой (+ 15 тугриков, 0 калорий)
    полить майонезом (+ 20 тугриков, + 5 калорий).
`);

sandwich.sizeSmall();//малий розмір
sandwich.stuffingCheze();//начинка сир
sandwich.toppingMayo();//добавка майонез
console.log("Ваш заказ");
console.log("Маленький сэндвич с сыром и майонезом: " + sandwich.calculateCalories());//інформація про калорії
console.log("Цена маленького сэндвича с сыром и майонезом: " + sandwich.calculatePrice());//інформація про ціну
sandwich.toppingSause();//добавка соус
console.log("Цена с соусом: " + sandwich.calculatePrice());//інформація про ціну