`use strict`
function MenuWidget(conainer) {
    this.conainer = conainer;
    this.open = function () {
        conainer.querySelector(".menu").classList.add("open");
    };
}

let menu = document.querySelector(".menu");

let menuWidget = new MenuWidget(menu);
menuWidget.open();