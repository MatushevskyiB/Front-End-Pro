/* 
Методы массивов.
Создать массив пользователей.*/

let users = [
    {
        name: "Ronald",
        age: 40,
        kindOfActivity: "businessman",
        gender: "male"
    },
    {
        name: "Ginevra",
        age: 39,
        kindOfActivity: "reporter",
        gender: "female"
    },
    {
        name: "James Sirius",
        age: 16,
        kindOfActivity: "schoolboy",
        gender: "male"
    },
    {
        name: "Neville",
        age: 40,
        kindOfActivity: "teacher",
        gender: "male"
    },
    {
        name: "Lily Luna",
        age: 13,
        kindOfActivity: "schoolgirl",
        gender: "female"
    },
];

console.table(users);

//1) Из массива пользователей получить массив их имен и массив возрастов.

const usersNames = users.map(user => user.name);

const usersAges = users.map(user => user.age);

console.log(`
1) Из массива пользователей получить массив их имен и массив возрастов.

Масив імен`);
console.log(usersNames);

console.log("Масив років");
console.log(usersAges);

//2) На основе первоначального создать новый массив пользователей которым есть 18 лет.

const usersAdults = users.filter(user => user.age > 18);

console.log(`
2) На основе первоначального создать новый массив пользователей которым есть 18 лет.
Масив повнолітніх`);
console.table(usersAdults);

//3) Найти пользователя с конкретным именем и возрастом и его индекс в массиве.

const userNeville = users.filter(function (user, index) {
    if (user.name === "Neville" && user.age === 40) {//виконую перевірку
        return user + (user.index = index)//додаю у масив значення індексу користувача із основного масиву
    }
})
//на жаль, цей спосіб змінює і основний масив, але іншого шляху як вивести і користувача і його індекс я так і не знайшов 

console.log(`
3) Найти пользователя с конкретным именем и возрастом и его индекс в массиве.
Користувач Neville 40 років`); 
console.table(userNeville);

users.forEach(user => delete user.index);//видаляю зайве значення з основного масиву

/*4 Также написать свои функции map, filter, которые первым аргументом принимают массив а вторым функцию колбек. По примеру forEach из лекции. Своими словами описать как эти функции работают и как будет происходить выполнение кода */

//4.1 map

function doLikeMap (arr, callback) {//задаю в параметрах масив і функцію
    let newArr = [];//метод map на виході дає новий масив тому його потрібно створити
    for (let i = 0; i < arr.length; i++) {//лічильник для перебору масиву
        const element = arr[i];
        newArr.push(callback(element, i));//додаю у новий масив елементи котрі обробляються функцією callback
    }
    return newArr//повертаю новий масив з елементами
}

/* оскільки мені потрібно опрацювати об'єкти в середині масиву та вивести значення kindOfActivity, мені
доведеться якось звертатись до цих об'єктів тому я вводжу параметр user у функцію showKindOfActivity. Далі коли я вводжу цю функцію у параметри функії doLikeMap у значення user передасться значення змінної element. Таким чином новий масив наповнюється саме тими значеннями які мені потрібні*/

showKindOfActivity = function (user) {
    return user.kindOfActivity
}

console.log (`
4.1 Результат саморобної функції map:
маисв з родом занять користувачів`)
console.log(doLikeMap (users, showKindOfActivity))
/* - у консоль викликається функція  doLikeMap у неї передається масив users та функція колбек showKindOfActivity;
- запускається цикл який кожну ітерацію додає у масив newArr значення котре задовільняє умови функції showKindOfActivity (значення з ключем kindOfActivity);
- на виході отримуємо новий масив newArr.*/

//4.2 filter

function doLikeFilter (arr, callback) {//передаю масив і функцію
    let filteredArr = [];//метод filteredArr також на виході дає новий масив тому його потрібно створити
    for (let i = 0; i < arr.length; i++) {//лічильник
        const element = arr[i];
        if (callback (element, i)) {//вставляю функцію (та передаю їй значення element) яка і задаватиме умови фільтрування
            filteredArr.push (element);//додавання у новий масив елементів котрі задовільняють умови callback
        }
    }
    return filteredArr
}

let showMales = function (user) {
    return user.gender === "male"//задаю умову для фільтрування
}

console.log (`
4.2 Результат саморобної функції filter:
усі чоловіки серед користувачів`)
console.table (doLikeFilter (users, showMales));
/* - у консоль викликається функція  doLikeFilter у неї передається масив users та функція колбек showMales;
- запускається цикл який кожну ітерацію копіює у масив filteredArr об'єкт котрий задовільняє умови функції showMales (об'єкти значення ключа gender у яких - male);
- на виході отримуємо новий масив об'єктів filteredArr.*/