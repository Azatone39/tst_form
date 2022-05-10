'use strict';

console.log("я здесь");


const q1 = document.getElementById('question-1');
const q2 = document.getElementById('question-2');
const q3 = document.getElementById('question-3');
const q4 = document.getElementById('question-4');
const q5 = document.getElementById('question-5');
const pn = document.getElementById('input-phone');
const nc = document.getElementById('number_card');
const bcscr = document.getElementById('bcscr');

const btn2 = document.getElementById('btn2');

const q1v1 = document.getElementById('q1v1');
const q1v2 = document.getElementById('q1v2');
const q1v3 = document.getElementById('q1v3');
const q1v4 = document.getElementById('q1v4');

const q2v1 = document.getElementById('q2v1');
const q2v2 = document.getElementById('q2v2');
const q2v3 = document.getElementById('q2v3');
const q2v4 = document.getElementById('q2v4');

const q3v1 = document.getElementById('q3v1');
const q3v2 = document.getElementById('q3v2');
const q3v3 = document.getElementById('q3v3');
const q3v4 = document.getElementById('q3v4');

const q4v1 = document.getElementById('q4v1');
const q4v2 = document.getElementById('q4v2');
const q4v3 = document.getElementById('q4v3');
const q4v4 = document.getElementById('q4v4');

const q5v1 = document.getElementById('q5v1');
const q5v2 = document.getElementById('q5v2');
const q5v3 = document.getElementById('q5v3');
const q5v4 = document.getElementById('q5v4');

const next_to2 = document.getElementById('next_to2');
const next_to3 = document.getElementById('next_to3');
const next_to4 = document.getElementById('next_to4');
const next_to5 = document.getElementById('next_to5');
const next_to_numb = document.getElementById('next_to_numb');
const back_to0 = document.getElementById('back_to0');
const back_to1 = document.getElementById('back_to1');
const back_to2 = document.getElementById('back_to2');
const back_to3 = document.getElementById('back_to3');
const back_to4 = document.getElementById('back_to4');

var number = '';
var q1a = '';
var q2a = '';
var q3a = '';
var q4a = '';
var q5a = '';

console.log(q1);
console.log(q1a);



function openCard1(){
    q1.classList.remove('hide');
    bcscr.classList.remove('hide');
/*     Kotoraya s nomerom vpisat.classList.add('hide'); */
}

function Back(){
    q1.classList.add('hide');
    q2.classList.add('hide');
    q3.classList.add('hide');
    q4.classList.add('hide');
    q5.classList.add('hide');
    nc.classList.add('hide');
    bcscr.classList.add('hide');
}

/* ===================================================================================================== */
function answ1_1(){
    q1a = 'Для постоянного проживания весь год';
    console.log(q1a);
}

function answ1_2(){
    q1a = 'Дачный/загородный дом на весну-осень';
    console.log(q1a);
}

function answ1_3(){
    q1a = 'Гостевой дом';
    console.log(q1a);
}

function answ1_4(){
    q1a = 'Пока не определились';
    console.log(q1a);
}

/* ===================================================================================================== */
function answ2_1(){
    q2a = 'В течении недели (дополнительная скидка 10%)';
    console.log(q2a);
}

function answ2_2(){
    q2a = 'В ближайший месяц';
    console.log(q2a);
}

function answ2_3(){
    q2a = 'В течении 3 месяцев';
    console.log(q2a);
}

function answ2_4(){
    q2a = 'Не планирую, нужен только расчёт';
    console.log(q2a);
}

/* ===================================================================================================== */
function answ3_1(){
    q3a = '1 этаж';
    console.log(q3a);
}

function answ3_2(){
    q3a = '2 этажа';
    console.log(q3a);
}

function answ3_3(){
    q3a = '1 этаж + мансарда';
    console.log(q3a);
}

function answ3_4(){
    q3a = 'Не определились';
    console.log(q3a);
}

/* ===================================================================================================== */
function answ4_1(){
    q4a = 'До 600 тыс. руб.';
    console.log(q4a);
}

function answ4_2(){
    q4a = 'До 1,5 млн руб.';
    console.log(q4a);
}

function answ4_3(){
    q4a = 'Более 2 млн руб.';
    console.log(q4a);
}

function answ4_4(){
    q4a = 'Пока не определились';
    console.log(q4a);
}

/* ===================================================================================================== */
function answ5_1(){
    q5a = 'До 50 м2';
    console.log(q5a);
}

function answ5_2(){
    q5a = 'До 250 м2';
    console.log(q5a);
}

function answ5_3(){
    q5a = 'До 350 м2';
    console.log(q5a);
}

function answ5_4(){
    q5a = 'Более 350 м2';
    console.log(q5a);
}

/* ===================================================================================================== */

function openCard2(){
    q2.classList.remove('hide');
    console.log(q1a);
}

function openCard3(){
    q3.classList.remove('hide');
    console.log(q1a);
}

function openCard4(){
    q4.classList.remove('hide');
    console.log(q1a);
}

function openCard5(){
    q5.classList.remove('hide');
    console.log(q1a);
}

function closeCard1(){
    q1.classList.add('hide');
}

function closeCard2(){
    q2.classList.add('hide');
}

function closeCard3(){
    q3.classList.add('hide');
}

function closeCard4(){
    q4.classList.add('hide');
}

function closeCard5(){
    q5.classList.add('hide');
}

function openCardNumber(){
    nc.classList.remove('hide');
    number = pn.value 
    console.log(number);
}


btn2.addEventListener("click", openCard1);
bcscr.addEventListener("click", Back);

q1v1.addEventListener("click", answ1_1);
q1v2.addEventListener("click", answ1_2);
q1v3.addEventListener("click", answ1_3);
q1v4.addEventListener("click", answ1_4);

q2v1.addEventListener("click", answ2_1);
q2v2.addEventListener("click", answ2_2);
q2v3.addEventListener("click", answ2_3);
q2v4.addEventListener("click", answ2_4);

q3v1.addEventListener("click", answ3_1);
q3v2.addEventListener("click", answ3_2);
q3v3.addEventListener("click", answ3_3);
q3v4.addEventListener("click", answ3_4);

q4v1.addEventListener("click", answ4_1);
q4v2.addEventListener("click", answ4_2);
q4v3.addEventListener("click", answ4_3);
q4v4.addEventListener("click", answ4_4);

q5v1.addEventListener("click", answ5_1);
q5v2.addEventListener("click", answ5_2);
q5v3.addEventListener("click", answ5_3);
q5v4.addEventListener("click", answ5_4);

next_to2.addEventListener("click", openCard2);
next_to3.addEventListener("click", openCard3);
next_to4.addEventListener("click", openCard4);
next_to5.addEventListener("click", openCard5);
next_to_numb.addEventListener("click", openCardNumber);
back_to0.addEventListener("click", closeCard1);
back_to1.addEventListener("click", closeCard2);
back_to2.addEventListener("click", closeCard3);
back_to3.addEventListener("click", closeCard4);
back_to4.addEventListener("click", closeCard5);


