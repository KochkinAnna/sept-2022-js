// LESSON 1.
// Script. Varienles types. Base data types. Strings variants and operations. Boolean.Types convertation.Other base types.

// let asd = 'okten'; - string 'asd', "asd", `asd` ---- ЗМІННА
// console.log(asd);
// asd = 'hello'; - можна перезначати
// console.log(asd);
//
// Типи даних:
// string ---'123'
// number ---123
//
// let num = 123;
// console.log(num);
// num = 100500;
// console.log(num);

// комірка, яка не спроможна змінюватись const
// const PI - великими літерами писати, яка б не була назва!!!
// const PI = 3.14 - не можна перезначати на відміну від let

// asd = num;
// console.log(asd); - 100500

// const s = 'hkjgklhkl';
// console.log(s);

// boolean:
// true
// false
// > < = <= >= == != === !==
// let b = 5 > 6;
// console.log(b); - false
// щоб робити логічні розгалуження

// let займає більше простору чим const
//
//     b = 100 < 200;
// console.log(b); - true

// let b2 = 100!==200;
// console.log(b2);

// let b3 = 5===5;
// console.log(b3);

// let bool = 5=='5'; - це не дорівнює, ліва чи права частина конвертується до правого чи лівого; == - еквівалентне
// console.log(bool); true

// let bool = 5==='5';
// console.log(bool); false

// let s1 = 'hello';
// let s2 = 'okten';
// let s3 = 'the best';
// console.log(s1 + ' ' + s2 + ' ' + s3); - regular tring АБО
// concatination:
// console.log(`${s1 ${s2} ${s3}`); - template string

// let n1 =100;
// let n2 = 200;
// let result = n1 + n2;
// console.log(result);

// console.log(5 % 2); -ділення по модулю, вичавлення остаі яка не ділима 5%2 = 1 (5 4 - лишається 1)
//

// let foo = 'asd';
// console.log(typeof foo); - визначити який тип даних
//
// let num = 100500:
// console.log(num + ''); - стане стрінгою. стрінга заражає число і робить теж стрінгою
//
// console.log(100 + 200 + '!'); - 300!
// console.log('!' + 100 + 200); - !100200 -  моменту появи стрінги все іде стрінгом

// let strNum = '125';
// console.log(+strNum); - стане числом якщо поставити +

// console.log(true +''); - отримаємо стрінг
// console.log(100 + true); - отримаємо 101 - бо тру конвертується до 1, а фолс до 0

// console.log(!!100); - конвретує число до булового значення (!!) - true
// console.log(!!0); - тільки 0 дає false
// console.log(!!'ghhjj'); - true
// console.log(!!''); - якщо пуста всередині, то буде false

// let user ={
//     id: 1,
//     name: 'sgag',
// }
// console.log(user);
// console.log(!!user); - true
//
// let arr = [1,2,3,4]; - пачка даних
// console.log(arr);
// console.log(!!arr); - true
//
// можна визначити потім:
// let arr ;
// arr = [1, 2, 3];


// console.log(!!0); - false
// console.log(!!''); - false
// console.log(!!null); - false
// console.log(!!underfined); - false
// console.log('sfggsg'/2); - NaN
// console.log(!!Nan); - false



