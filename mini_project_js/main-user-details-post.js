// /     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let post = url.searchParams.get('post');
console.log(post);
let parse = JSON.parse(post);
console.log(parse);

fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}`)
    .then((response) => response.json())
    .then(value => {
        let infoPost = document.createElement('div');
        infoPost.classList.add('div');
        let h2 = document.createElement('h2');
        h2.innerText = `${value.id}. ${value.title}`;
        let h3 = document.createElement('h3');
        h3.innerText = `${value.body}`;
        infoPost.append(h2, h3);
        document.body.append(infoPost);
    });


fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments`)
    .then((response) => response.json())
    .then(value => {
        for (const valueElement of value) {
            let commentsDiv = document.createElement('div');
            let h4 = document.createElement('h4');
            h4.innerText = `${valueElement.id}. ${valueElement.name}: `
            let h5 = document.createElement('h5');
            h5.innerText = `${valueElement.body}. ${valueElement.email}`
            commentsDiv.append(h4, h5);
            document.body.appendChild(commentsDiv)
        }
    })