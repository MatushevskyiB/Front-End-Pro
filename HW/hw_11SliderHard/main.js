"use strict"
//----------------------функція Слайдер

function makeSlider(yoursSlider, yoursSlides, buttons, pagination, modalWindow) {
    yoursSlider.insertAdjacentHTML("afterbegin", `<div class="slider__container"></div>`);//створюю контейнер для слайдів
    let slaiderContainer = yoursSlider.firstChild;//назначаю змінну для контейнера
    yoursSlides.forEach(function(el) {//переміщую слайди в контейнер
        slaiderContainer.append(el);
    });
    //створюю контейнер для кнопок
    yoursSlider.insertAdjacentHTML("beforebegin", `<div class="botton-container"></div>`)
    let buttonContainer = yoursSlider.previousSibling;
    buttonContainer.append(yoursSlider);

    //створюю кнопки "назад" і "вперед"
    if (buttons) {
        buttonContainer.insertAdjacentHTML("beforeend", `<button class="slider__button slider__button_before">&lt</button>`);
        buttonContainer.insertAdjacentHTML("beforeend", `<button class="slider__button slider__button_after">&gt</button>`);
    }
 
    let beforeButton = yoursSlider.nextSibling;//кнопка "назад"
    let afterButton = buttonContainer.lastChild;//кнопка "вперед"
    let sliderButtons = [beforeButton, afterButton];//назначаю масив з кнопок пролистування
    let translateValue = 0;//назначаю змінну для акумуляції команд з кнопок пролистування
    
    //----------------Пагінація
    buttonContainer.insertAdjacentHTML("afterend", `<div class="slider__pages"></div>`)
    let pagesContainer = buttonContainer.nextSibling;
    if (pagination) {
        //цикл який створює стільки "кнопок-сторінок" скільки є сторінок у слайдера (виходячи зі значення довжини масиву слайдів)
        for (let i = 0; i < yoursSlides.length/3; i++) {
            pagesContainer.insertAdjacentHTML("afterbegin",`<button class="slider__page"></button>`);   
        }

        //для того щоб мати змогу користуватись NodeList як масивом(потрібно буде для transform) конвертую його в масив (знайшов цей спосіб на MDN)
        let pages = Array.prototype.slice.call(pagesContainer.childNodes);
        pagesContainer.firstChild.classList.add("slider__page_focus")//додаю клас з background-color першій точці по дефолту

        pages.forEach(function(el) {
            el.addEventListener("click", function(event) {//підписуюсь на кліки по кнопкам
                let slidWidth = slaiderContainer.firstChild.offsetWidth;//ширина слайда
                pagesContainer.querySelector(".slider__page_focus").classList.remove("slider__page_focus");//видаляю клас з background-color
                event.target.classList.add("slider__page_focus")//додаю клас з background-color
                //визначаю значення на яке потрібно здвинути контейнер зі слайдами при натисканні кнопки
                translateValue = -((slidWidth * 3) * pages.indexOf(event.target));//для того щоб вставити необхідний множник беру індекс натиснутої кнопки

                slaiderContainer.style.transform = `translateX(${translateValue}px)`;//здвигаю контейнер зі слайдами
            })
        })
    }
    //----------------------Слайдер (продовження)
    sliderButtons.forEach(function(el) {
        el.addEventListener("click", function (event) {//назначаю обробку кліків по кнопкам пролистування
            let sliderContainerWidth = slaiderContainer.offsetWidth;//ширина контейнера зі слайдами
            console.log("В середині підписки на кліки по кнопкам offsetWidth для контейнера слайдів працює вірно - " + sliderContainerWidth);
            let slidWidth = slaiderContainer.firstChild.offsetWidth;//ширина слайда
            console.log("...так само і для слайдів - " + slidWidth)
            let maxTranslateValue = (slidWidth * 3) * (Math.ceil(sliderContainerWidth / (slidWidth * 3)) - 1);
            //maxTranslateValue - це ширина однієї сторінки помножена на кількість усіх доступних сторінок (виходячи з кількості слайдів) мінус одна
            
            if (event.target == beforeButton) {
                if (translateValue === 0) {//якщо досягнуто крайнього лівого елементу здвинути на крайній правий
                    translateValue = -(maxTranslateValue)
                    //видаляю та додаю клас з background-color
                    pagesContainer.querySelector(".slider__page_focus").classList.remove("slider__page_focus");
                    pagesContainer.lastChild.classList.add("slider__page_focus");
                }
                else {
                translateValue += slidWidth * 3;//якщо натиснута кнопка "назад" здвинути slider__container праворуч на ширину 1-го слайду
                pagesContainer.querySelector(".slider__page_focus").previousSibling.classList.add("slider__page_focus");
                pagesContainer.querySelector(".slider__page_focus").nextSibling.classList.remove("slider__page_focus");
                }
            }
            else {//якщо досягнуто крайнього правого елементу здвинути на крайній лівий
                if (translateValue === -(maxTranslateValue)) {
                    translateValue = 0
                    pagesContainer.querySelector(".slider__page_focus").classList.remove("slider__page_focus");
                    pagesContainer.firstChild.classList.add("slider__page_focus");
                }
                else {
                translateValue -= slidWidth * 3;//якщо натиснута кнопка "вперед" здвинути slider__container ліворуч на ширину 1-го слайду
                pagesContainer.querySelector(".slider__page_focus").nextSibling.classList.add("slider__page_focus");
                pagesContainer.querySelector(".slider__page_focus").classList.remove("slider__page_focus");
                }
            }
            slaiderContainer.style.transform = `translateX(${translateValue}px)`;//втілення дій
        })
    })

    //----------------------Модальне вікно
    if (modalWindow) {
        yoursSlides.forEach(function(el) {
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
    }
}

//----------------------Виклик функції
let darkSlider = document.querySelector(".slider_dark");
let darkSlides = document.querySelectorAll(".slider__slide_dark");

makeSlider(darkSlider, darkSlides, true, true, true);

let lightSlider = document.querySelector(".slider_light");
let lightSlides = document.querySelectorAll(".slider__slide_light");

makeSlider(lightSlider, lightSlides, true, true, true);


console.log("Поза межами підписки на кліки offsetWidth для контейнера слайдів працює невірно: " + document.querySelector(".slider__container").offsetWidth + ", а правильна = 1148");
debugger
console.log("...те ж і для слайдів: " + document.querySelector(".slider__slide").offsetWidth + ", а правильна = 164, при тому що для всіх інших елементів на сторінці offsetWidth працює адекватно");

