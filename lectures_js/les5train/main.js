// LESSON 5 Function

// function per(a,b) {  -сигнатура
//    let result = (a + b) * 2;
//     return result;
// }
// per(10, 20);
// per(100, 202);

// function per(a,b) {
//     return (a + b) * 2;
// }
// let x = per(10, 20);
// console.log(x);

// function calc (a,b, action) {
//     let result = NaN;
//
//     if (action === "+") {
//         result = a + b;
//     } else if (action === '-') {
//         result = a - b;
//     }
//     return result;
// }
// let data = calc(10,20,'*');
// console.log(data);

// function arrayPrinter(arr) {
//     for (const item of arr) {
//         console.log(item)
//     }
//     }
// }
//
// arrayPrinter([11,22,33]);

// let users = [
// //     {name: 'vasya', age: 31, status: false},
// //     {name: 'petya', age: 30, status: true},
// //     {name: 'kolya', age: 29, status: true},
// //     {name: 'olya', age: 28, status: false},
// //     {name: 'max', age: 30, status: true},
// //     {name: 'anya', age: 31, status: false},
// //     {name: 'oleg', age: 28, status: false},
// //     {name: 'andrey', age: 29, status: true},
// //     {name: 'masha', age: 30, status: true},
// //     {name: 'olya', age: 31, status: false},
// //     {name: 'max', age: 31, status: true},

// // ];

// arrayPrinter(users);

// function asd() {
//     console.log(arguments);
// }
// asd(123, 234, 'dfggr');
//
// function calc() {
//     if (arguments.length === 2) {
//         return arguments[0]  + arguments[1];
//     } else if (arguments.length === 3) {
//         return arguments[0] - arguments[1] - arguments[2];}
//     return 0;
// }
//
// calc (10,20); - 30
// calc (10,20,30); - -40

// function asd(y, ...xxx) { - pестаргумент - все що перечислили виводить в масив, тільки якщо це останній аргумент
//     console.log(...xxx[0])
// }
// asd (1, 3,5,6,'jdkjdyky',true,[],{});

// function addHTML(tag, text) {
//     document.write(`<${tag}>${text}</${tag}>`);
// }
// addHTML('h1', 'hello');
// addHTML('h3', 'okten');
// addHTML('div', 'okten');

// експрешн:
// let asd = function () {
//     console.log(arguments);
// };
// asd ();

// let arr = [];
// function addtoARR(data) {
//     arr[arr.length] = data;
// }
// addtoARR(10);
// addtoARR(100);
// console.log(arr);
// буде [10,100]

// стрілочна функція:
// let calculator = function (a,b) {
//     return a+b;
// }
//
// let calculator = (a,b) => {
//     return a+b;
// }
//
// let calculator = (a,b) => a+b;


// Отже, декларейшн, експрешн, стрілочна

// let calculator = (a,b) => a+b; - тільки якщо одна дія

// let calculator = (a,b) => {
// let result = a+b;
// console.log(result);
// return result; }

// функції в об'єкті
//     this - це той обєкт з яким ви зараз працюєте

// let xxx = {
//     imya:'vasya',
//     greeting: function () {
//         console.log(`hello my name is ${this.imya}`);
//         console.log(this);
//     },
//     imya:{
//         name: 'anna',
//         pryvit: function ()  {
//             console.log(this); - your object
//             return `hi my name is ${this.imya}`;
//         },
//         hi: () => {
//            console.log(this); - window
//            return `hi my name is ${this.imya}`;
//         }
//     }
// }
// xxx.greeting();
// console.log(xxx.wife.hi());