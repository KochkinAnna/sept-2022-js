// --створити масив з:
// - з 5 числових значень
// const numbers = [2, 4, 5, 6, 3];
// - з 5 стічкових значень
// const string = ['happy', 'okten', 'school', 'world', 'lviv'];
// - з 5 значень стрічкового, числового та булевого типу
// const different = ['happy', 3, true, -100500, false];
// - та вивести його в консоль
//
// console.log(numbers);
// console.log(string);
// console.log(different);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let some = [];
// some[0] = 'hello';
// some[1] = 'okten';
// console.log(some)
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// 1. перебрати його циклом while
// let i = 0;
// while (i < arr.length) {
//     let item = arr[i]
//     console.log(item)
//     i++;
// }

//     2. перебрати його циклом for
// for (const number of arr) {
//         console.log(number)
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < arr.length) {
//     if (i % 2) {
//     console.log(arr [i])
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (const number of arr) {
//     if (number % 2) {
//     console.log(number)
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr.length) {
//     let item = arr[i]
//     if(item % 2 ===0)
//         console.log(item)
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0)
//         console.log(arrElement)
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0)
//         arr[i] = 'okten'
// }
//         console.log(arr)
// 8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let i = arr.length - 1;
// while (i >= 0) {
//     let item = arr[i]
//     console.log(item)
//     i--;
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }

// let i = arr.length - 1;
// while (i >= 0) {
//     if (i % 2) {
//     console.log(arr [i])
//     }
//     i--;
// }
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//         if (i % 2) {
//     console.log(arr [i])
//     }
// }

// let i = arr.length - 1;
// while (i >= 0) {
//     let item = arr[i]
//     if(item % 2 ===0)
//         console.log(item)
//     i--;
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0)
//         console.log(arrElement)
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0)
//         arr[i] = 'okten'
// }
//         console.log(arr)

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1,2,3,4,5,6,7,8,9,10];
// for (const number of array) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['hello', 'Okten', 'my','name','is','Anna', '.', 'How','are','You']
// for (let i = 0; i < str.length; i++) {
//     const strElement = str[i];
//     console.log(strElement)
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let diff = 'You always have to learn and this is true !'
console.log(diff);
let diffElements = diff.split(' ');
console.log(diffElements)

for (const diffElement of diffElements) {
    console.log(diffElement)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
diffElements.push(false)
console.log(diffElements)

for (const diffElement of diffElements) {
    if(typeof diffElement === "boolean"){
        console.log(diffElement)
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
diffElements.push(100)
console.log(diffElements)

for (const diffElement of diffElements) {
    if(typeof diffElement === "number"){
        console.log(diffElement)
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const diffElement of diffElements) {
    if(typeof diffElement === "string"){
        console.log(diffElement)
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор