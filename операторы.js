////базовые
/*
операции
+
-
*
/
& остаток от деления 
** степень

*/
let pravda = "mishin" + " " + "gnida"; 
let r = "2" + 5;      //string 25
let rr = "25" - 5;   //number 20 
let rrr = 10 * "5"  //number 50 
let mem = 20 + 8 + " " + "ударов ножом"; 

let nt = +"12"    //string to number
 
let a = "10";
let b = '12';
console.log(a + b)    //1012
console.log(+a + +b)  //22

/*инкремент и декремент 
i++  i-- 
только с переменными, можно с любой стороны, но
i = i++    выдаст старое значение  
i - ++i    выдаст новое значение
*/

let c = (1-4, 20+1)   //21


////операторы сравнения
/*
возвращает boolean
операции:
>, <, <=, >=
== равно
!=
=== строгое равно
!==
при сравнении строк одинаковой длины исп. алфавитный порядок,
маленькие буквы больше больших
*/
console.log('B' > 'A');             // true
console.log('Script' > 'Scripts')  //true


////логические
/*
операции:
|| или (выводится то что возвращает true)
&& и   (выводится то что возвращает false либо последнее true)
! не 
?? сравнение с null (возвращает первую переменную если она не null и последующую если null)
*/
let x = "", y = "alpha";
let z = x || y || "sigma"  //alpha

let g = 0, j = 5;
g > j || j++     
console.log(j)   //6

let n = 1, m = 'count';
(n > 0) && console.log(`count is ${n}`);   

console.log(!true);
console.log(!1);        //false
console.log(!'');      //true
console.log(!"mama");  //false

console.log(!true && 58 || 18 & !1); //false

// с помощью !! можно преобразовать в boolean

let name;
console.log(name ?? 'no name'); //no name