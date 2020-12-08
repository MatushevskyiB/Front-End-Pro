"use strict"
/* Задача


Написать свои функции apply, bind.

Внутри использовать только встроенную функцию call.

Пример использования



function f() {
  console.log(this);
}
apply(f, {}, [1, 2, 3]);
Первый параметр это функция, которую необходимо вызовать, 2й - контекст, 3й это массив аргументов, с которым функция будет вызвана.

let bindedF = bind(f, {});

bindedF(); */

//Apply:
function apply(func, obj, pseudoArr) {
    let arr = Array.from(pseudoArr);
    for(let i; i < arr.length; i++) {
        let (val+i) = arr[i];
        return (val+i)
    }
    func.call(obj, )
};
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let array = Array.from(arrayLike)

function sayHallo(hallo, world) {
    return hallo + " " + world;
}

/* console.log(function() {
    for (let i = 0; i < array.length; i++) {
        return array.pop()
    }
}); */

//Перевірка:

//Bind
function bind(f, context) {
    return function() {
        return f.call(context)
    }
}

//Перевірка:
let someUser = {
    firstName: "Garry"
};
  
function swowFirstName() {
    console.log(`First name of user is ${this.firstName}`);
}

/* console.log(`
function bind`); */

let bindedF = bind(swowFirstName, someUser);
//bindedF();

//Перевірка з setTimeout:
let admin = {
firstName: "Albus",
showAdmin() {
    console.log(`Admin is ${this.firstName}`);
}
};

/* console.log(`
function bind with setTimeout`); */
let showAdminBindedF = bind(admin.showAdmin, admin);

//showAdminBindedF();

//setTimeout(showAdminBindedF, 2000);