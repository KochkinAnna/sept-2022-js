// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*
function rectangle(a,b) {
    let result =a * b;
    console.log(result);
    return result;
}
rectangle(10, 20);
*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*function circle(r) {
    return Math.PI * r**2;
}
const area = circle (8);
console.log(area);*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*function cylinder(r,h) {
    return Math.PI * 2 * r * h;
}
const area = cylinder (15, 40);
console.log(area);*/

// - створити функцію яка приймає масив та виводить кожен його елемент
/*function arrayPrinter(arr) {
    for (let arrayElement of arr) {
        console.log(arrayElement);
    }
    }
arrayPrinter ([10, 'okten', 55]);*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function story(tag,text) {
//     console.log(arguments);
//         document.write(`<${tag}>${text}</${tag}>`);
// }
// story('p','hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function smtxt(arguments) {
    document.write(`<ul><li>${arguments}</li><li>${arguments}</li><li>${arguments}</li></ul>`);
}
smtxt('hello')*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function smtxt(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// smtxt('hello', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [2, 5, 'vasya', false, true];
// let item = function (box) {
//     document.write(`<ul>`)
//     for (const box1 of box) {
//         document.write(`<li>${box1}</li>`)
//     }
//     document.write(`</ul>`)
// }
// item(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name:'vasya', age: 31},
//     {id: 2, name:'petya', age: 30},
//     {id: 3, name:'kolya', age: 29},
//     {id: 4, name:'olya', age: 28},
//     {id: 5, name:'max', age: 30}]
//
// let ppls = function (array) {
//     for (let ppl of array) {
//         document.write(`<div>id: ${ppl.id}, name: ${ppl.name}, age:${ppl.age}</div>`)
//     }
// }
// ppls(users);


// - створити функцію яка повертає найменьше число з масиву
// let box = [3, 7, 9, 2, 6, 5];
//
// function number(array) {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement<min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
//
// console.log(number(box));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let box= [3,7,9,2,6,5];
// function number(array) {
//     let total = 0;
//     for (const arrayElement of array) {
//         total+=arrayElement;
//     }
//     return total;
// }
//
// console.log(number(box));

// ADDITIONAL
//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numbers(a,b,c) {
    if (a < b) {
        console.log(a);
    } else if (a < c) {
        console.log(a);
    } else if (b < c) {
            console.log(b);
        } else if (c < a) {
            console.log(c);

console.log(numbers(6, 3, 7));


// // - створити функцію яка повертає найменьше число з масиву
// /*
// // let box = [3, 7, 9, 2, 6, 5];
// //
// // let number = (array) => {
// //     let min = array[0];
// //     for (const arrayElement of array) {
// //         if (arrayElement < min) {
// //             min = arrayElement;
// //         }
// //     }
// //     return min;
// // }
// //
// // console.log(number(box));
//
//
// - створити функцію яка повертає найбільше число з масиву
//
// let box = [3, 7, 9, 2, 6, 5];
//
// let number = (array) => {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     return max;
// }
// console.log(number(box));*/