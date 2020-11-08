"use strict"

/* Задача
создать 3 объкта (objA, objB, objC) Придумать как минимум 1 свойство и 1 метод каждому объекту.
Прототипом objC дожен быть objB, а прототипом objB должен быть objA. */

//1. Реализовать цепочку протитопов с помощью Object.create.

let fridge = {//холодильник
    color: "golden",
    name: "LG",
    productInfo () {
        return this.color + ' ' + this.name;
    }
};

let fridgeBox = Object.create(fridge);
/* записати fridgeBox і container40Ft таким же чином як і fridge не вийшло бо значення proto тоді перезаписується (це, в принципі, зрозуміло), 
а якщо Object.create записати після то тоді стирається наповнення об'єктів (цьому пояснення я так і не знайшов)*/
fridgeBox.thickness= 5;
fridgeBox.styrofoam = true;
fridgeBox.fridgeBoxRelible = function() {
    if(this.styrofoam && this.thickness > 4) {
        return `fridgeBox is relible`
    }
    else {
        return "fridgeBox is`nt relible"
    }
}

let container40Ft = Object.create(fridgeBox);
container40Ft.width = 2.43;
container40Ft.height = 2.59;
container40Ft.length = 12.19;
container40Ft.containerVolume = function() {
    return this.width * this.height * this.length + "m3";
}

console.log("1. У коробці яка лежить в контейнері знаходиться холодильник " + container40Ft.productInfo());
console.dir(container40Ft);


//2. Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf)
let tv = {
    color: "black",
    name: "Samsung",
    productInfo () {
        return this.color + ' ' + this.name;
    }
};

let tvBox = {
    thickness: 4,
    styrofoam: true,
    tvBoxRelible () {
        if(this.styrofoam && this.thickness > 4) {
        return `fridgeBox is relible`
        }
        else {
            return "fridgeBox is`nt relible"
        }
    }
};
tvBox.__proto__ = tv;

let container20Ft = {
    width: 2.44,
    height: 2.6,
    length: 6.06,
    containerVolume() {
        return this.width * this.height * this.length + "m3";
    }
};
container20Ft.__proto__ = tvBox;

console.log(`
2. У коробці яка лежить в контейнері знаходиться телевізор ${container20Ft.productInfo()}`);
console.dir(container20Ft)

// 3. Реализовать цепочку протитопов с помощью функций конструкторов.

function Cpu(cpuModel, clockFrequency, cores) {//процесор
    this.cpuModel = cpuModel,
    this.clockFrequency = clockFrequency,
    this.cores = cores,
    this.coreClockFrequency = function() { 
        return this.clockFrequency / this.cores
    }
};

let qualcommSnapdragon = new Cpu("SDM675", 2, 8);

function Smartphone(phoneName, phoneModel, phoneColor) {//смартфон
    this.phoneName = phoneName,
    this.phoneModel = phoneModel,
    this.phoneColor = phoneColor,
    this.fullName = function() { 
        return this.phoneName + this.phoneModel
    }
};
Smartphone.prototype = qualcommSnapdragon;//спадкування

let xiaomi = new Smartphone("Redmi", "Note 7", "blue");

function SmartphoneFirmware(firmwareVersion, firmwareTupe, firmwareYear) {//прошивка
    this.firmwareVersion = firmwareVersion,
    this.firmwareTupe = firmwareTupe,
    this.firmwareYear = firmwareYear,
    this.quickInfo = function() { 
        return this.firmwareVersion + this.firmwareTupe
    }
};
SmartphoneFirmware.prototype = xiaomi;//спадкування

let miui = new SmartphoneFirmware("11.0.1", "global", 2020);

console.log(`3. Тактова частота одного ядра процесора смартфона з цією прошивкою = ${miui.coreClockFrequency()}`);
console.dir(miui);