'use strict';

let brandDark = document.querySelector('.brandDark');
let burger = document.querySelector('.burger');
let menuClose = document.querySelector('.menuClose');

burger.addEventListener('click', function () {
    brandDark.classList.toggle('hidden');
});

menuClose.addEventListener('click', function () {
    brandDark.classList.toggle('hidden');
});