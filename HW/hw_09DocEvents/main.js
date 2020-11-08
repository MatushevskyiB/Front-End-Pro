/* написать функцию generateList(array)
принимает массив из чисел и массивов чисел, например [1,2, [1.1,1.2,1.3] ,3]
нужно сгенерировать список из элементов, а если в массиве встречается массив то делать вложенный список */

let simpleArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let complexArr = [16,4, [-4,12,-35,4,47] ,-16,25,-37, [46,4,-51, [-37,54,-4,72,-56,47] ,27,-63] ,4,-54,76];
document.body.insertAdjacentHTML("beforeend", `<p class="complex-arr">Array [16,4, <strong>[-4,12,-35,4,47]</strong> ,-16,25,-37, <strong>[46,4,-51,</strong> [-37,54,-4,72,-56,47] <strong>,27,-63]</strong> ,4,-54,76]</p>`);

function generateList(somArr) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    somArr.forEach(function (el) {
        let li = document.createElement('li');
        if (!Array.isArray(el)) {
            console.log("not Array");
            li.innerHTML = el;
            ul.append(li);
        }
        else {
            console.log("it is Array");
            li.append(generateList(el));
            ul.append(li);
        }
    })
    return ul
}

const compList = generateList(complexArr);
document.body.append(compList);