// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString =  (str,n) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i+=n) {
//         arr.push (str.slice(i, n+i))
//     }
//     return arr;
// }
// let newStr = cutString ('наслаждение', 3);
// console.log(newStr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); //Каждый

// let delete_characters = (str, length)=> str.slice(0,length)
// let str = 'Каждый охотник желает знать'
// let newStr = delete_characters (str,7);
// console.log(newStr);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str)=> str.toUpperCase().replaceAll(' ','-');
// let str = 'HTML JavaScript PHP';
// let NewSt = insert_dash (str);
// console.log(NewSt);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу
// рядка з нижнього регістру у верхній.

// let imya = (str)=> str.title();
// let str = 'anna';
// let NewImya = imya (str);
// console.log(NewImya);

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let hero = (griffindorStudent)=> griffindorStudent.replaceAll('.',' ').replaceAll('  ',' ');
// let norm = hero ('Harry..Potter');
// console.log(norm);
//
// let hero1 = (griffindorStudent)=> griffindorStudent.replaceAll('-',' ').replaceAll('   ',' ');
// let norm1 = hero1 ('Ron---Whisley');
// console.log(norm1);
//
// let hero2 = (griffindorStudent)=> griffindorStudent.replaceAll('_',' ').replaceAll('  ',' ');
// let norm2 = hero2 ('Hermione__Granger');
// console.log(norm2);



