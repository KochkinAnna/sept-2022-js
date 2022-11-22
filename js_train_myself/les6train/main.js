// LESSON 6. Functions of ARRAY

// let str = 'hello okten';
// console.log(str[0]); - поверне літеру h. Стрінга - це масив

// let str = 'hello okten';
// console.log(str[0]);

// str.toUpperCase(); - переводить стрінгу у верхній регістр

// let str = 'hello okten';
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
// console.log(toUpperCase.toLowerCase());
//
// let xyz = str.toUpperCase();
// console.log(xyz);
// console.log(xyz.toLowerCase());

// let str = 'hello okten';
// console.log(str.startsWith('he')) - поверне тру, перевіряє чи починається стрінга з тих букв

// let str = 'hello okten';
// console.log(str.endsWith('ten')) -чи закінчується

// let str = 'hello okten';
// console.log(str.substring()) - вирізати якісь частинки зі стрінги

// let str = 'hello okten';
// let substr = str.substring(0,7); 7 не включно
// console.log(substr); - hello o виведе

// let str = 'hello okten';
// let indexofE = str.indexOf('e');
// console.log(indexofE); - виведе 1
// let indexofT = str.indexOf('t');
// console.log(indexofT); - виведе 8
// console.log(str.substring(indexofE,indexofT)); - ello ok

// let str = 'hello okten';
// console.log(str.charAt(7)); - який символ знаходиться в 7 індексі

// let phone = '(067)123-12-12';
// // щоб спростити:
// let replAll1 = phone.replaceAll('(','');
// console.log(replAll1);
// let repAll2 = replAll1.replaceAll(')','');
// console.log(repAll2);
// let repAll3 = repAll2.replaceAll('-','');
// console.log(repAll3); - побачимо 0671231212

// простіший варіант:
// let phone = '(067)123-12-12';
// let result = phone
//     .replaceAll('(','')
//     .replaceAll(')','')
//     .replaceAll('-','');
// console.log(result);

// можна ще простіше:
// let phone = '(067)123-12-12';
// console.log(phone.replaceAll(/[()-]/g, '')); - g- globaly in sting

// SPLIT
// let obj = 'name: 'vasya', age: 31';
// нам потрібно відрізати шматки і розподілити між собою

// let spl = obj.split(','); - забрати кому
// console.log(spl); - отримуємо масив нейм і ейдж без коми
// let tupleName = spl[0]; - отримуємо нейм вася ['name: 'vasya']
// let nameValue = tupleName.split (':'); - забрати дві крапки
// console.log(nameValue) - ['name', 'vasya']
// console.log(nameValue[1]) - 'vasya'
// let tupleAge = spl[1]; - отримуємо ейдж 31

// ________________________________________ Функції масивів

// Array.isArray([]); - true
// Array.isArray({}); - false
//
// let arr =[];
//     хочемо додати щось в масив:
// можна так як ми вчили:
//     arr[arr.length] = 'sgsag0';
// а можна функцією масивів:
//     console.log(arr.push('sgsags1')); -повертає нову довжину
//     console.log(arr.push('sgsags2')); -повертає нову довжину
//     console.log(arr.push('sgsags3')); -повертає нову довжину
//     console.log(arr.push('sgsags4')); -повертає нову довжину
//     console.log(arr); - отримуємо ['sgsag0','sgsag1','sgsag2','sgsag3','sgsag4']

// тепер спробуємо видалити звідти шось з кінця!:
//     console.log(arr.pop()); - видалили останній елемент, але повертає тобто логає той елемент який вона видалила
//     console.log(arr);

// тепер спробуємо видалити звідти шось з початку!:
// console.log(arr.shift());
// console.log(arr);
// тепер спробуємо додати на початок!:
// console.log(arr.unshift('dgfahahh'));
// console.log(arr);

// щоб перетворити масив на одну єдину стрінгу:
//     let joiin = arr.join(); -якщо сюди нічого не додаємо то зєднює комами
//     console.log(joiin);
//     ми можемо обрати будь який розподілювач:
//     let joiin = arr.join(';');
//     console.log(joiin);
//
//     якщо ми хочемо зєднати між собою два масиви:
// let nums = [1,2,3,4];
//     let conc = arr.concat(nums);
//     console.log(conc); - додасть в кінець наш намс

// якщо ми хочемо видаляти щось з середини:
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ];
//
// let splice = users.splice(0,2);
// console.log(splice); - поверне вирізані васю і петю
// console.log(users); - тепер починається з колі
//
// можна замість них поставити стрінгу в один елемент:
// let splice = users.splice(0,2, '!!!');
// console.log(splice);
// console.log(users); -буде !!!, коля,...

// let arr = [11, 22, 33, 44, 55];
// let numbers = arr.reverse();
// console.log(numbers); - поверне [55, 44, 33, 22, 11]
//
// щоб перевірити чи містить масив щось:
// arr.includes(11); - поверне тру

// let str = ' asd ';
// можна видалити пробіли з початку і кінця
// console.log(str.length); - 5 символів
// let s = str.trim();
// console.log(s); - певертається стрінга яка містить 3 символи

// ____________________Функції, які приймать інші функції
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ];

// можна проітерувати щоб вивести
// for (let user of users) {
//     console.log(user)
// }
// а можна!!!! :

// function whatIWhantToDoWithThisObj(user) {
//     console.log(user);
// }
// users.forEach(whatIWhantToDoWithThisObj) - ганяє в циклі функцію
//
// щоб скоротити що можна зробити:
//
//     users.forEach (function (user) {
//     console.log(user)
// })
// як ще скоротити:
//     users.forEach ( (user)=> console.log(user));

// Функція яка дозволяє щось фільтруватиЖ
// можна так як ми робили:
//     let arr = [];
//     for (let user of users) {
//         if (user.age > 30) {
//             arr.push(user);
//         }
//     }
//
//      а можна!!! :

// let filter = users.filter(function (user){
//     return user.age > 30;
// });
// console.log(filter);
//
// де function (user) - функція, яка знаходиться в функції - callback
//
// Можна скоротити:
//
//     let filter = users.filter( (user)=> user.age > 30);
//     console.log(filter);
//
//     якщо фільтр потрібен на декілька значень:
//     let filter = users.filter( (user)=> user.age > 30 && user.status);
//     console.log(filter);

// перевести обєкти з однієї моделі даних на іншу:
// якщо наприклад ми хочемо щоб складалось тільки з нейму і ейдж:
// let map = users.map(function (user){
// let newUser = {name:user.name, age:user.age};
//     return newUser;
// })
// console.log(map);
//
// можна написати простіше:
//     let map = users.map(function (user)=> ({name:user.name, age:user.age}));
// console.log(map);
// а якщо я хочу щобюзери мали додатково id
// let map = users.map(function (user, index)=> ({id:index +1,name:user.name, age:user.age}));
// console.log(map);
//
// коли нам потрібно змінити тип даних наприклад, а також фільтранути і кожен вивести:
//         users
//             .map(function (user, index)=> ({id:index +1,name:user.name, age:user.age}));
//             .filter (value => value.id % 2 === 0);
//             .forEach (value=> console.log(value));

// коли потрібо відсортувати наш масив:
// (ця функція приймає два обєкти і між собою їх порівнює)
// сортуємо по віку:
// console.log(users.sort (function (a,b) {
//     return a.age - b.age;
// }));

// // сортуємо по довжині нейму:
// console.log(users.sort (function (a,b) {
//     return a.name.length - b.name.length;
// }));

// // сортуємо за вагою обєкта по алфавіту:
// console.log(users.sort (function (a,b) {
//     if (a.name < b.name) {
//     return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// }));

// концепція:
// console.log('abc'>'abc'); - false
// console.log('abd'>'abc'); - true
// ASCI коди наступних літер важчі ніж попередні, тому так сортує

// ЗМЕНШУВАЧ - зменшили кількість обєктів. Редьюс - це перетворювач
//
// accumulator- той обєкт який в кінці , його значення ми вивели в кінці {}
// ми можемо брати юзера, витягати з нього окремі частинки і пхати в кінець в акумулятор
// наприклад якщо нам треба зыбрати даны з усых ы вивести в кынець
//
// let reduce = users.reduce((accumulator, user) => {
//     accumulator.names.push(user.name);
//     accumulator.ages.push(user.age);
//     accumulator.statuses.push(user.status);
//     return accumulator;
//
// },{names: [], ages:[], statuses:[]});
//
// console.log(reduce);




