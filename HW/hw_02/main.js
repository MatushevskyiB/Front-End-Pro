"use strict"

let ageImportantPerson = Number (prompt ("Введіть, будь ласка, Ваш вік", 18));
let changeAgeImportantPerson = (ageImportantPerson % 10);

//Працює до 210-го року, включно ))

if (isNaN(ageImportantPerson)) {
    alert ("Введіть, будь ласка, значення числом");
} else if ((changeAgeImportantPerson >= 2 && changeAgeImportantPerson <= 4) &&
    !(ageImportantPerson >= 12 && ageImportantPerson <= 14) && !(ageImportantPerson >= 112 &&
        ageImportantPerson <= 114)) {
        alert (`${ageImportantPerson} роки`);
} else if (changeAgeImportantPerson === 1 && ageImportantPerson != 11 && ageImportantPerson != 111) {
    alert (`${ageImportantPerson} рік`)
} else {
    alert (`${ageImportantPerson} років`);
}