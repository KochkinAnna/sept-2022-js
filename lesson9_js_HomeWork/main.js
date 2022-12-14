// - є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// console.log(simpsons);
//
// for (const simpson of simpsons) {
//     let simpDiv = document.createElement('div');
//     simpDiv.classList.add('member');
//     simpDiv.innerHTML = `${simpson.name} ${simpson.surname} ${simpson.age} ${simpson.info}`;
//     let simpImg = document.createElement('img');
//     simpImg.src = simpson.photo
//     document.body.append(simpDiv, simpImg);
// }


// Цикл в циклі
// - Є масив
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// //
// for (const coursesArrayElement of coursesArray) {
//     let titleDiv = document.createElement('div');
//     titleDiv.innerText = '${title};
//     let DurationDiv = document.createElement('div');
//     let monthDurationDiv = document.createElement('div');
//     monthDurationDiv.innerText = '${monthDuration};
//     let hourDurationDiv = document.createElement('div');
//     hourDurationDiv.innerText = '${hourDuration};
//     DurationDiv.append(monthDurationDiv, hourDurationDiv);
//     let modulDiv = document.createElement('div');
//     let modulUl = document.createElement('ul');
//     modulDiv.append(modulUl);
//     for (const modul of coursesArrayElement.modules) {
//         let modulLi = document.createElement('li');
//         modulLi.innerText = `${modul}`;
//         modulUl.append(modulLi)
//     }
//     document.body.append(titleDiv, DurationDiv, modulDiv);
// }
//

// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let array = document.createElement('div');
// array.innerText = 'Hello'
// array.classList.add('wrap', 'collapse', 'alpha', 'beta');
// array.style.background = 'blue';
// array.style.color = 'black';
// array.style.fontsize = '40px';
// document.body.append(array);

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// //
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// let ul = document.getElementsByClassName('menu')[0];
// for (const ulElement of arr) {
//     let li = document.createElement('li');
//     li.innerText = `${ulElement}`
//     ul.append(li);
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divElement = document.createElement('div')
//     divElement.innerText = `${coursesAndDurationArrayElement.title}, ${coursesAndDurationArrayElement.monthDuration}`;
//     document.body.append(divElement);
// }


// - Є масив

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.innerText = `${coursesAndDurationArrayElement.title}`;
//     h1.classList.add('item');
//     let par = document.createElement('p');
//     par.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
//     par.classList.add('description');
//     divElement.append(h1, par);
//     document.body.append(divElement);
// }

//
//
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let div = document.createElement('div');
// div.innerText = 'hello honey';
// div.setAttribute('id', 'text');
// let button = document.createElement('button');
// button.innerText = 'click on me';
// document.body.append(div, button);
// button.onclick = () => {
//     div.style.display = 'none';
// }

//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'click on me'
//
// document.body.append(input, button);
//
// button.onclick = () =>{
//     input.oninput;
//     if (input.value < 18) {
//         alert('no no no')
//     } else if (input.value >= 18){
//         alert('go')
//     }
// }
//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'click on me';

document.body.append(input1, input2, input3, button);

button.onclick = () => {
    let tr = input1.value;
    let td = input1.value;
    let text = input1.value;

    const table = (raws, columns, texts) => {
        let table = document.createElement('table');
        table.style.border = `2px solid black`;
        document.body.append(table);

        for (let i = 0; i < raws; i++) {
            let raw = document.createElement('tr');
            table.append(raw);

            for (let i = 0; i < columns; i++) {
                let column = document.createElement('td');
                column.innerText = `${texts}`
                table.append(column);
                column.style.border = `2px solid blue`;
                raw.append(column);
            }
        }
    }
    table(tr,td,text);
}