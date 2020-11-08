"use strict"

class Animal {
    constructor(nickName) {
        this.nickName = nickName
    }
    sayHallo () {
        console.log("Hallo!");
    }
}

class Snakes extends Animal  {
    constructor () {
        super(...arguments)
    }
    sayHallo () {
        super.sayHallo()
        console.log("Hi!");
    }
}

class Mammal extends Animal {
    constructor() {
        super(...arguments)
    }
}

class Cat extends Mammal {
    constructor(age) {
        this.age = age;
    };
    meow() {
        console.log("Meow!");
    };
    sayHallo () {
        super.sayHallo()
        console.log("Whats app, bro");
    }
};

class Dog extends Mammal {
    constructor(age) {
        this.age = age;
    };
};

class FluffyDog extends Dog {
    constructor() {
        super(...arguments)///всюди хто наслідує
    }
    showLove() {
        console.log("Love");
    };
};

 new FluffyDog().showLove();
 //new Dog(4).age();