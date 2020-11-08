let input = document.getElementById("input");
console.log (input);

let list = document.getElementById("list");
console.log (list);

let btn = document.getElementById("btn");
console.log(btn);

buttonPush = btn.addEventListener("click", function () {
    console.log("click")
});

inputs = input.addEventListener("input", function () {
    console.log("input")
});
console.log(inputs.target.name);