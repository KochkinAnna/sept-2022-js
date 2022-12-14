// console.log(document);
// console.log(document.head.innerHTML);
// console.log(document.body.innerHTML);
// let bodychildren = document.body.children;
// console.log(bodychildren);

//id
// let = ulIdList1 = document.getElementById('list-1');
// console.log(ulIdList1);
// console.log(ulIdList1.children);

//class
// let ulMenus = document.getElementsByClassName('menu');
// console.log(ulMenus);

//TAG
// let elementsBytagName = document.getElementsByTagName('ul');
// console.log(elementsBytagName);

//1
// let element = document.querySelector('.menu');
// console.log(element);

//nodeList - повертається пачка - масив!!!!
// let menus = document.querySelectorAll('.menu');
// console.log(menus);

// let ids = document.querySelectorAll('#list-1');
// console.log(ids);

// let liList = document.getElementsByTagName('li');
// console.log(liList);
// for (const li of liList) {
//     console.log(li);
// }
//
// let liListElement = liList[0];
// console.log(liListElement.innerHTML);
// liListElement.innerHTML = 'hello okten';
// liListElement.style.background = 'silver';
// liListElement.classList.add('xxx');
// liListElement.classList.add('yyy');
// liListElement.classList.remove('xxx');

// let liList = document.getElementsByTagName('li');
// console.log(liList);
// for (const li of liList) {
//     li.innerHTML = '<b>hello</b>'
//    let text = li.innerHTML:
//     // text = text + '<b>' + '</b>';
//    text = `<b>${text}</b>`
//    li.innerHTML = text;
// }

// let forms = document.forms;
// console.log(forms);
//
// console.log(document.forms.f1);
// let f2 = document.forms.f2;
// console.log(f2);
//
// console.log(f2.name.value);
// console.log(f2.surname.value);
// console.log(typeof f2.vik.value);
//
// let children = f2.children;
//
// for (const child of children) {
//    let attribute = child.getAttribute('name');
//    if (attribute!=null && attribute!='') {
//       console.log(attribute);
//    }
// }

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
//
// ];
//
// let htmlDivElement = document.createElement('div');
// htmlDivElement.innerText = 'dsdhsjddrdhh';
// document.body.append(htmlDivElement);
