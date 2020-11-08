/* Объекты 
Создать массив объектов. В каждом объекте должна содержаться информация о человеке: имя, 
пол, год рождения. Объектов должно быть 5-10.  
Для каждой операции нужно создать функцию, которая будет производить вычисления и возвращать результат 
в место вызова. */

const usersInfo = [
    { name: "George", gender: "male", birthYear: 1961 },
    { name: "Brad", gender: "male", birthYear: 1963 },
    { name: "Matt", gender: "male", birthYear: 1970 },
    { name: "Catherine", gender: "female", birthYear: 1969 },
    { name: "Julia", gender: "female", birthYear: 1976 },
    { name: "Don", gender: "male", birthYear: 1964 },
    { name: "Casey", gender: "male", birthYear: 1975 },
    { name: "Elliott", gender: "male", birthYear: 1938 },
    { name: "Andy", gender: "male", birthYear: 1956 },
    { name: "Ellen", gender: "female", birthYear: 1954 }
]
console.log(usersInfo)

//1. Посчитать средний возраст. Округлить до целого числа. 

function showMiddleEge(objectsArr) {
    let summYears = 0
    for (let i = 0; i < objectsArr.length; i++) {
        const object = objectsArr[i];
        summYears += (2020 - object.birthYear);//сума років користувачів
    }
    return Math.round(summYears / objectsArr.length);//округлення середнього значення
}

console.log(`
1. Посчитать средний возраст. Округлить до целого числа.

Середній вік - ${showMiddleEge(usersInfo)}
`)

//2. Определить представителей какого пола больше

function makeGenderComparison(objectsArr) {
    let femalesSumm = 0;
    let maleSumm = 0;

    for (let i = 0; i < objectsArr.length; i++) {
        const object = objectsArr[i];
        if (object.gender === "female") {
            femalesSumm++
        }
        else {
            maleSumm++
        }
    }
    if (femalesSumm > maleSumm) {
        return "жіночої"//вибач я, на жаль, не придумав як це відобразити не срічкою
    }
    else {
        return "чоловічої"
    }
}

console.log (`
2. Определить представителей какого пола больше

Найбільше представників ${makeGenderComparison (usersInfo)} статі
`)

//3. На основе массива скопировать массив пользователей в другой массив сотрудников и добавить им поле зарплата salary.

function giveSalary(objectsArr, assignedSalary) {
    let usersSalary = []
    for (let i = 0; i < objectsArr.length; i++) {
        const object = objectsArr[i];
        usersSalary.push(Object.assign({}, object));//додаю у новий масив клоновані об'єкти старого
        const cloneObject = usersSalary[i];
        cloneObject.salary = assignedSalary;//додаю поле salary із вказаною зарплатнею
    }
    return usersSalary
}

console.log(`3. На основе массива скопировать массив пользователей в другой массив сотрудников и добавить им поле зарплата salary.`)
console.log(giveSalary(usersInfo, 8000000))
/* Чомусь коли я намагався вивести відповідь таким чином, у консолі з'являлась повна маячня:

console.log(`3. На основе массива скопировать массив пользователей в другой массив сотрудников и добавить им поле зарплата salary.
${giveSalary(usersInfo, 8000000)}`) 

Із-за чого це?*/