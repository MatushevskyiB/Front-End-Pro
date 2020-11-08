"use strict"
//----------------------Слайдер

let slides = document.querySelectorAll(".slider__slide");//масив наявних слайдів

document.querySelector(".slider").insertAdjacentHTML("afterbegin", `<div class="slider__container"></div>`);//створюю контейнер для слайдів
slides.forEach(function(el) {//переміщую слайди в контейнер
    document.querySelector(".slider__container").append(el);
})

let buttonBefore = document.querySelector(".botton-container").insertAdjacentHTML("beforeend", `<button class="slider__button slider__button_before">&lt</button>`);
let buttonAfter = document.querySelector(".botton-container").insertAdjacentHTML("beforeend", `<button class="slider__button slider__button_after">&gt</button>`);
let sliderButtons = document.querySelectorAll(".slider__button");//назначаю масив з кнопок пролистування
let translateValue = 0;//назначаю змінну для акумуляції команд з кнопок пролистування

//-----------Пагінація

document.querySelector(".body").insertAdjacentHTML("beforeend", `<div class="slider__pages"></div>`)
let pagesContainer = document.querySelector(".slider__pages")
//цикл який створює стільки "кнопок-сторінок" скільки є сторінок у слайдера (виходячи зі значення довжини масиву слайдів)
for (let i = 0; i < slides.length/3; i++) {
    document.querySelector(".slider__pages").insertAdjacentHTML("afterbegin",`<button class="slider__page"></button>`);   
}

//для того щоб мати змогу користуватись NodeList як масивом(потрібно буде для transform) конвертую його в масив (знайшов цей спосіб на MDN)
let pages = Array.prototype.slice.call(document.querySelectorAll(".slider__page"));
pagesContainer.firstChild.classList.add("slider__page_focus")

pages.forEach(function(el) {
    el.addEventListener("click", function(event) {//підписуюсь на кліки по кнопкам
        let slidWidth = document.querySelector(".slider__slide").offsetWidth;//ширина слайда
        document.querySelector(".slider__page_focus").classList.remove("slider__page_focus");//видаляю клас з background-color
        event.target.classList.add("slider__page_focus")//додаю клас з background-color
        //визначаю значення на яке потрібно здвинути контейнер зі слайдами при натисканні кнопки
        translateValue = -((slidWidth * 3) * pages.indexOf(event.target));//для того щоб вставити необхідний множник беру індекс натиснутої кнопки

        document.querySelector(".slider__container").style.transform = `translateX(${translateValue}px)`;//здвигаю контейнер зі слайдами
    })
})

//----------------------Слайдер

sliderButtons.forEach(function(el) {
    el.addEventListener("click", function (event) {//назначаю обробку кліків по кнопкам пролистування
        let sliderContainerWidth = document.querySelector(".slider__container").offsetWidth;//ширина контейнера зі слайдами
        let slidWidth = document.querySelector(".slider__slide").offsetWidth;//ширина слайда
        let maxTranslateValue = (slidWidth * 3) * (Math.ceil(sliderContainerWidth / (slidWidth * 3)) - 1);
        //maxTranslateValue - це ширина однієї сторінки помножена на кількість усіх доступних сторінок (виходячи з кількості слайдів) мінус одна
        
        if (event.target.classList.contains("slider__button_before")) {
            if (translateValue === 0) {//якщо досягнуто крайнього лівого елементу здвинути на крайній правий
                translateValue = -(maxTranslateValue)
                //видаляю та додаю клас з background-color
                document.querySelector(".slider__page_focus").classList.remove("slider__page_focus");
                pagesContainer.lastChild.classList.add("slider__page_focus");
            }
            else {
            translateValue += slidWidth * 3;//якщо натиснута кнопка "назад" здвинути slider__container праворуч на ширину 1-го слайду
            document.querySelector(".slider__page_focus").previousSibling.classList.add("slider__page_focus");
            document.querySelector(".slider__page_focus").nextSibling.classList.remove("slider__page_focus");
            }
        }
        else {//якщо досягнуто крайнього правого елементу здвинути на крайній лівий
            if (translateValue === -(maxTranslateValue)) {
                translateValue = 0
                document.querySelector(".slider__page_focus").classList.remove("slider__page_focus");
                pagesContainer.firstChild.classList.add("slider__page_focus");
            }
            else {
            translateValue -= slidWidth * 3;//якщо натиснута кнопка "вперед" здвинути slider__container ліворуч на ширину 1-го слайду
            document.querySelector(".slider__page_focus").nextSibling.classList.add("slider__page_focus");
            document.querySelector(".slider__page_focus").classList.remove("slider__page_focus");
            }
        }
        document.querySelector(".slider__container").style.transform = `translateX(${translateValue}px)`;//втілення дій
    })
})


//----------------------Модальне вікно

slides.forEach(function(el) {
    el.addEventListener("click", function(event) {//підписуюсь на клік по слайду
        document.querySelector(".body").style.position = "relative";//для абсолютного позиціонування модалки прописую relative для body
        //створюю модальне вікно
        document.querySelector(".body").insertAdjacentHTML("afterbegin", `<div class="modal-window">${event.target.outerHTML}</div>`);
        document.querySelector(".modal-window").addEventListener("click", function(modalEvent) {//вимкнення модалки
            if (modalEvent.target === document.querySelector(".modal-window")) {//перевіряю чи був клік саме по модалці, а не по зоображенню
                document.querySelector(".modal-window").remove();
            }
        });
    })
});