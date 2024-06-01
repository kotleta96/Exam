//объявление переменных
let yandex; 
yandex = 'nothing';  //при use strict только с let и до использования в коде

me = 1000;
console.log(me);
var me; //можно объявлять после использования, не зависит от use strict 


//объявление нескольких переменных 
let x = 1, y = 2, mishin = 'govno';

let z = 1;
    K = 0;
    MISHIN = 'GNIDA';

//передача значения 
let a = 3, b = 100
a = b;
console.log(a); 

// область видимости переменной
function block() {
    let c = 100 
    console.log(c)
}
block(); 
console.log(c) //переменная не видна

function block() {
    let yandex = 'world' //world
    console.log(yandex) 
}
block(); 
console.log(yandex) // nothing 


if (true) {
    var n = 20 //переменная видна за пределами блока 
} 

// цикл 
for (let i = 0; i < 3; i++) {
    //другая переменная i
    console.log(i) //выводится i из цикла 
}


//константы
const LENIN = 'zhiv';
 
//перемена значения в конст объекте
const person = {
    name: a, 
    age: 1 ,
    mood: 'good'
}
console.log(person);
person.age = 2; 
console.log(person); 


//типы данных 
//динамическая типизация 
 

////Undefined 
let wow;
console.log(typeof wow);    //выводит тип

////Null 
let lol = document.qwerty('.block');
console.log(typeof lol);  //тип object

////Boolean
//всё ясно, true or false 

/////Number (целые, с палвающей точкой) 
//NaN - вычислительная ошибка 

////BigInt 
const biginty = 123456789n; //обязательно n

////String 
/*     ' ' = " "
     `  ` - можно встраивать в строку выражения: */ 
let l = 12
let lenghtinfo = `lenght: ${l}`;
console.log(lenghtinfo); 

////Object (структуры и пр)

////Symbol 
let id = symbol("id");

////Function (тот же object)


//преобразование типов 
let heigh = "198";       //string
heigh = Number(heigh);  //number

let answer = true;       //boolean
answer = string(answer) //string

let devide = '25' / '5'; //number

let num = 52
num = Boolean(nim); //boolean, true (0 - falsem string with 0 or empty spaces - true



