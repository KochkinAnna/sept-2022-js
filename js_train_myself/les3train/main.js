// LESSON 3 If.Switch

// confirm('kgjgbmbhhhkj')  функція  модальне вікно. коли натискаєш ок, то виводить в консоль тру, якщо відміну - фолс

// let answer = confirm('nb cnfhit pf 18?');
// console.log(answer);
// document.write('<h>eweegsgwtwe</h>');

// let answer = confirm('nb cnfhit pf 18?');
// if (answer) {
//     document.write(<h1>CORN</h1>);
// }else {
//     document.write(<h1>cartoon</h1>);
// }
//
// prompt('') - навіть якщо цифри впишемо -
// якщо перед промтом ставимо плюсик то конвертуємо то все в число
// let age = +prompt('how old are you?');
// if (age<18){
//     document.write(<h1>cartoon</h1>);
// }else if (age>=18 && age<90){
//     document.write(<h1>CORN</h1>);
// }else if (age>=90){
//  document.write(<h1>casablanca</h1>);
// }else  {
//  document.write(<h1>?????</h1>);
// }

//
// && - i

// У випадку якщо колір еквівалентний зеленому то скажемо йдемо:
// let color = prompt('enter color that you see');
// let roadStstus = confirm ('road is claer'); - true
//
// if (color === 'green') {
//     if (roadStstus) {
//         console.log('you can go');
//     }
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// }
// 2 варіант - жорстка умова && - має точно викоуватись дві умови - тру, тру

// let color = prompt('enter color that you see');
// let roadStstus = confirm ('road is claer'); - true
//
// if (color === 'green' && roadStstus) {
//         console.log('you can go');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// }
// 3 варіант - не жорстка умова || - або. якщо хтось дорівнює тру, то буде тру. Тобто якщо світлофор зелений, але дорога не иста то все одно скажу йти

// let color = prompt('enter color that you see');
// let roadStstus = confirm ('road is claer'); - true
//
// if (color === 'green' || roadStstus) {
//         console.log('you can go');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// }

// && - i, || - або
//
// let x;
// if (true) {
//     x=100;
// }
// else {
//     x = -100;
// }
// console.log(x);

// тернарний оператор:
// let y = confirm('sgsegsg?') ? 100 : -100;
// console.log(y);

// if ('') {
//     console.log('goog');
// } else {
//     console.log('bad');
// }

// let arr = [];
// if (arr.length) {
//     console.log('array not empty')
// } else {
//     console.log('empty')
// }

// switch ('green') {
//     case "green":
//         console.log('go');
//         break;
//     case "yellow":
//         console.log('wait');
//         break;
//     case "red":
//         console.log('stop');
//     default:
//         console.log('?????')
// }

// якщо множинна перевірка виористовувати світч

// switch ('green') {
//     case "green":
//     case "yellow":
//         console.log('go');
//         break;
//     case "red":
//         console.log('stop');
//     default:
//         console.log('?????')
// }

// let xxx = promt () || 'gjggkjljlk';
// console.log(xxx);
