// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*
function rectangle(a,b) {
    let result =a * b;
    console.log(result);
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
/*function story(tag,text) {
    console.log(arguments);
        // document.write(`<${tag}></tag>${text}</${tag}>`);
}
story('p','hello');*/


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function smtxt(arguments) {
    document.write(`<ul>`);
    document.write(`<li>${arguments}</li><li>${arguments}</li><li>${arguments}</li>`);
    document.write(`</ul>`);
}
smtxt('hello')*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arr(num, string, boolean) {
//
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13