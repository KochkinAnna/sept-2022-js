// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT OSCOOL'

// let str1 = 'hello world';
// console.log(str1.length);
// let toUpperCas1 = str1.toUpperCase();
// console.log(toUpperCase1);
// let toLowerCase1 = toUpperCase1.toLowerCase();
// console.log(toLowerCase1);
//
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
// let toLowerCase2 = toUpperCase2.toLowerCase();
// console.log(toLowerCase2);
//
//
// let str3 = 'javascript is cool';
// console.log(str3.length);
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3);
// let toLowerCase3 = toUpperCase3.toLowerCase();
// console.log(toLowerCase3);

// - Є 'брудна' стрінга let str = ' dirty string '. Почистити її від зайвих пробілів

// let str = ' dirty string ';
// let clearStr = str.trim();
// console.log(clearStr);

// - Напишіть функцію stringToarray (str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray (str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(',');
// console.log(arr);

// - Є масив чисел [10,8,-7,55,987,-1011,0,1050,0].
// За допомогою map та колбеку перетворити всі обєкти в масиві на стрінгові.

// let numbers= [10,8,-7,55,987,-1011,0,1050,0]
// numbers
//             .map(function (numb)=> ({}));
//             .forEach (value=> console.log(value));

// - Створити функцію sortNums (direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення direction
// let nums = [11,21,3];
// sortNums (nums,'ascending') // [3,11,21]
// sortNums (nums,'desscending') // [21,11,3]

//
// function ArrNumb(nums, direction) {
//     if (direction === 'ascending') {
//         console.log(nums.sort (function (a,b) {
//     if (a < b) {
//     return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     if (a === b) {
//         return 0;
//     }
// }))
//     }
//     if (direction === 'descending') {
//         console.log(nums.sort (function (a,b) {
//             if (a > b) {
//                 return -1;
//             }
//             if (a < b) {
//                 return 1;
//             }
//             if (a === b) {
//                 return 0;
//             }
//         }))
//     }
// }
// ArrNumb([11,21,3], 'descending' )

// - є масив
// let couursesAndDurationArray = [
//     {title: 'JavaScript Complex', mouthDuration:5},
//     {title: 'Java Complex', mouthDuration:6},
//     {title: 'Python Complex', mouthDuration:6},
//     {title: 'QA Complex', mouthDuration:4},
//     {title: 'FullStack', mouthDuration:7},
//     {title: 'Frontend', mouthDuration:4}
// ];
// - відсортувати його за спаданням за mouthDuration
// - відфільтрувати, залишивши тільки курси з тривалістю 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', mouthDuration:5},
//     {title: 'Java Complex', mouthDuration:6},
//     {title: 'Python Complex', mouthDuration:6},
//     {title: 'QA Complex', mouthDuration:4},
//     {title: 'FullStack', mouthDuration:7},
//     {title: 'Frontend', mouthDuration:4}
// ];
// console.log(coursesAndDurationArray.sort (function (a,b) {
//     return a.mouthDuration - b.mouthDuration;
// }));

// coursesAndDurationArray
// .sort(function (a,b)=> (a.mouthDuration - b.mouthDuration));
// .filter (value => value.mouthDuration === 5);
// .forEach (value=> console.log(value));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// cardSuit: '',// 'spade', 'diamond', 'heart','clubs' - піка, бубна, черва, хреста
// value:'', // '6'-'10', 'ace', 'jack', 'queen', 'king', 'joker'
// color: ''//'red', 'black'

// let cards = [
//     {cardSuit: 'spade',value:'6',color:'black'},
//     {cardSuit: 'diamond',value:'6',color:'red'},
//     {cardSuit: 'heart',value:'6',color:'red'},
//     {cardSuit: 'clubs',value:'6',color:'black'},
//     {cardSuit: 'spade',value:'7',color:'black'},
//     {cardSuit: 'diamond',value:'7',color:'red'},
//     {cardSuit: 'heart',value:'7',color:'red'},
//     {cardSuit: 'clubs',value:'7',color:'black'},
//     {cardSuit: 'spade',value:'8',color:'black'},
//     {cardSuit: 'diamond',value:'8',color:'red'},
//     {cardSuit: 'heart',value:'8',color:'red'},
//     {cardSuit: 'clubs',value:'8',color:'black'},
//     {cardSuit: 'spade',value:'9',color:'black'},
//     {cardSuit: 'diamond',value:'9',color:'red'},
//     {cardSuit: 'heart',value:'9',color:'red'},
//     {cardSuit: 'clubs',value:'9',color:'black'},
//     {cardSuit: 'spade',value:'10',color:'black'},
//     {cardSuit: 'diamond',value:'10',color:'red'},
//     {cardSuit: 'heart',value:'10',color:'red'},
//     {cardSuit: 'clubs',value:'10',color:'black'},
//     {cardSuit: 'spade',value:'jack',color:'black'},
//     {cardSuit: 'diamond',value:'jack',color:'red'},
//     {cardSuit: 'heart',value:'jack',color:'red'},
//     {cardSuit: 'clubs',value:'jack',color:'black'},
//     {cardSuit: 'spade',value:'queen',color:'black'},
//     {cardSuit: 'diamond',value:'queen',color:'red'},
//     {cardSuit: 'heart',value:'queen',color:'red'},
//     {cardSuit: 'clubs',value:'queen',color:'black'},
//     {cardSuit: 'spade',value:'king',color:'black'},
//     {cardSuit: 'diamond',value:'king',color:'red'},
//     {cardSuit: 'heart',value:'king',color:'red'},
//     {cardSuit: 'clubs',value:'king',color:'black'},
//     {cardSuit: 'spade',value:'ace',color:'black'},
//     {cardSuit: 'diamond',value:'ace',color:'red'},
//     {cardSuit: 'heart',value:'ace',color:'red'},
//     {cardSuit: 'clubs',value:'ace',color:'black'},
//     {cardSuit: '-',value:'joker',color:'red'},
//     {cardSuit: '-',value:'joker',color:'black'},
// ];
// console.log(cards.length);
//
//     let filter = cards.filter( (card)=> card.cardSuit === 'spade' && card.value === 'ace');
//     console.log(filter);
//
// let filter6 = cards.filter( (card)=> card.value === '6');
// console.log(filter6);
//
// let filterdiamond = cards.filter( (card)=> card.cardSuit === 'diamond');
// console.log(filterdiamond);
//
// let filterheart = cards.filter( (card)=> card.cardSuit === 'heart' && card.value >= '9');
// console.log(filterheart);

 // Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по 'мастях' в обєкт
//    {
//        spades:[],
//        diamonds:[],
//        hearts:[],
//        clubs:[],
//    }

let cards = [
    {cardSuit: 'spade',value:'6',color:'black'},
    {cardSuit: 'diamond',value:'6',color:'red'},
    {cardSuit: 'heart',value:'6',color:'red'},
    {cardSuit: 'clubs',value:'6',color:'black'},
    {cardSuit: 'spade',value:'7',color:'black'},
    {cardSuit: 'diamond',value:'7',color:'red'},
    {cardSuit: 'heart',value:'7',color:'red'},
    {cardSuit: 'clubs',value:'7',color:'black'},
    {cardSuit: 'spade',value:'8',color:'black'},
    {cardSuit: 'diamond',value:'8',color:'red'},
    {cardSuit: 'heart',value:'8',color:'red'},
    {cardSuit: 'clubs',value:'8',color:'black'},
    {cardSuit: 'spade',value:'9',color:'black'},
    {cardSuit: 'diamond',value:'9',color:'red'},
    {cardSuit: 'heart',value:'9',color:'red'},
    {cardSuit: 'clubs',value:'9',color:'black'},
    {cardSuit: 'spade',value:'10',color:'black'},
    {cardSuit: 'diamond',value:'10',color:'red'},
    {cardSuit: 'heart',value:'10',color:'red'},
    {cardSuit: 'clubs',value:'10',color:'black'},
    {cardSuit: 'spade',value:'jack',color:'black'},
    {cardSuit: 'diamond',value:'jack',color:'red'},
    {cardSuit: 'heart',value:'jack',color:'red'},
    {cardSuit: 'clubs',value:'jack',color:'black'},
    {cardSuit: 'spade',value:'queen',color:'black'},
    {cardSuit: 'diamond',value:'queen',color:'red'},
    {cardSuit: 'heart',value:'queen',color:'red'},
    {cardSuit: 'clubs',value:'queen',color:'black'},
    {cardSuit: 'spade',value:'king',color:'black'},
    {cardSuit: 'diamond',value:'king',color:'red'},
    {cardSuit: 'heart',value:'king',color:'red'},
    {cardSuit: 'clubs',value:'king',color:'black'},
    {cardSuit: 'spade',value:'ace',color:'black'},
    {cardSuit: 'diamond',value:'ace',color:'red'},
    {cardSuit: 'heart',value:'ace',color:'red'},
    {cardSuit: 'clubs',value:'ace',color:'black'},
    {cardSuit: '-',value:'joker',color:'red'},
    {cardSuit: '-',value:'joker',color:'black'},
];

// let reduce = cards.reduce((accumulator, card) => {
//     accumulator.cardSuits.push(card.cardSuit);
//     accumulator.values.push(card.value);
//     accumulator.colors.push(card.color);
//     return accumulator;
//
// },{cardSuits: [], values:[], colors:[]});
//
// console.log(reduce);

// let reduce1 = cards.reduce((accumulator, card) => {
//     if (cards.cardSuit === 'spade'){
//     accumulator.spades.push(card.value && card.color)},
//     if (cards.cardSuit === 'diamond'){
//     accumulator.diamonds.push(card.value && card.color)}
//     if (cards.cardSuit === 'heart'){
//     accumulator.hearts.push(card.value && card.color)}
//     if (cards.cardSuit === 'club'){
//     accumulator.clubs.push(card.value && card.color)}
//     return accumulator;
//
// },{spades: [], diamonds:[], hearts:[], clubs:[]});
//
// console.log(reduce1);
