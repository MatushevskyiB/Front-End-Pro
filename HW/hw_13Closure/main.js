"use strict"
/*1. Написать функцию makeAdder, которая должна работать следующим образом:

    let adder = makeAdder();
    adder() // 0
    adder (2) //2
    adder (10) // 12
 */

function makeAdder() {
    let accum = 0;
    return function(y) {
        if (y === undefined) {
            return accum
        }
        else {
            return accum += y;
        }
    };
};

let adder = makeAdder();

console.log("adder() = " + adder());
console.log("adder(2) = " + adder (2));
console.log("adder(10) = " + adder (10));

/* 2) Написать функцию createCounter, которая будет работать следующим образом.

let counter = createCounter(10);
counter.gerCurrent() // 10;
couner.increment() // 11
counter.gerCurrent() // 11;
counter.decrement() // 10;
counter.decrement() // 9;
counter.gerCurrent() // 9;
counter.setValue(90) // 90
counter.gerCurrent() // 90;
counter.reset() // 10; // reset to initial value that was passed to createCounter function
counter.gerCurrent() // 10;
 */
function createCounter(initialValue) {
    let internalValue = initialValue;
    function changeBy(val) {
        internalValue += val;
    };
    return {
        gerCurrent: function() {
            return internalValue;
        },
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        setValue: function(newValue) {
            internalValue = newValue;
        },
        reset: function() {
            internalValue = initialValue;
            return internalValue;
        }

    };   
};

let counter = createCounter(10);

console.log("gerCurrent = " + counter.gerCurrent());

counter.increment();
console.log("After increment gerCurrent = " + counter.gerCurrent());

counter.decrement()
counter.decrement()
console.log("After 2 decrement gerCurrent = " + counter.gerCurrent());

counter.setValue(90)
console.log("After setValue(90) gerCurrent = " + counter.gerCurrent());

counter.reset()
console.log("After reset gerCurrent = " + counter.gerCurrent());