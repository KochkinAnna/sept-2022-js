// - Є змінна х, яка ви надаєте вільне числове значення.
//     Якщо змінна x не дорівнює нулю, введіть 'Вірно', інакше введіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3

/*let x = confirm('32');
console.log(x);
if (x){
    document.write('<h1>Вірно</h1>');
}
else {
    document.write('<h1>Не вірно</h1>');
}*/

let x = +prompt('18?')

if (x !==0) {
    document.write('<h1>Вірно</h1>');
}
else {
    document.write('<h1>Не вірно</h1>');
}

//
// - Дано змінний час, який відповідає числу від 0 до 59. Потрібно написати код, який перевірив, до якої четвертої години потрапляє число
// (в першу, другу, третю або четверту частину години).

let time = prompt('Your veriable time: from 0 to 59?')
if (time < 15) {
    console.log('the FIRST part of an hour');
} else if (time >=15 && time < 30) {
    console.log('the SECOND part of an hour');
} else if (time >=30 && time < 45) {
    console.log('the THIRD part of an hour');
} else if (time >=45 && time <= 59) {
    console.log('the FOURTH part of an hour');
} else {
    console.log('?????')
}


// - У змінний день дано якесь число від 1 до 31. Потрібно працювати, у яку половину(декаду) місяця випускається це число (у першу, другу чи третю).
//

let y = prompt('Please enter number from 1 to 31')
if (y <= 10) {
    console.log('the FIRST decade');
} else if (y >10 && y <= 20) {
    console.log('the SECOND decade');
} else if (time >20 && time <= 31) {
    console.log('the THIRD decade');
} else {
    console.log('?????')
}


// - Скласти розклад на тиждень для домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інформація, що запланована на цей день (можна замість плану на день, назва дня англійською).
//
let week = prompt('Please enter the serial number of the day of the week')
switch (week) {
    case '1':
    case '3':
        document.write('<h2>Лекція</h2>');
        break;
    case '2':
    case '4':
        document.write('<h2>Розбір ДЗ</h2>');
        break;
    case '5':
        document.write('<h2>Консультація</h2>');
        break;
    case '6':
        document.write('<h2>Англійська</h2>');
        break;
    case '7':
        document.write('<h2>Приділіть час сім"ї</h2>');
        break;
    default:
        document.write('<h2>0_0</h2>');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з цих двох.
//         Також потрібно врахувати коли введені рівні числа.

let number1 = prompt('Please enter your first number, I will show you the trick')
let number2 = prompt('Please enter your second number')
console.log(Math.max(number1,number2));
document.write(Math.max(number1,number2));

//
//     - є змінна х, яка може прийняти будь-яке значення (рядок, число, undefined, null і тд включно). Напишіть код який,
//         за допомогу оператора || буде присвоювати змінний х значення, якщо значення "за замовчуванням" змінене х являється false (хибноподібне, тобто кастується до false)
//
let  xx = prompt('') || 'за замовчуванням';
console.log(xx)

