// /     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let post = url.searchParams.get('post');
let parse = JSON.parse(post);

fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}`)
    .then((response) => response.json())
    .then(value => {
        let infoPost = document.createElement('div');
        infoPost.classList.add('div', 'width', 'pad-l', 'marg-t');
        let h2 = document.createElement('h2');
        h2.innerText = `${value.id}. ${value.title}`;
        let h3 = document.createElement('h3');
        h3.innerText = `${value.body}`;
        infoPost.append(h2, h3);
        document.body.append(infoPost);
        fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments`)
            .then((response) => response.json())
            .then(value => {
                let allcom = document.createElement('div');
                allcom.classList.add('allcom');
                for (const valueElement of value) {
                    let commentsDiv = document.createElement('div');
                    commentsDiv.classList.add('comments', 'marg-t');
                    let titleComments = document.createElement('div');
                    titleComments.innerText = `Comment ${valueElement.id}. ${valueElement.name}: `;
                    titleComments.classList.add('title');
                    document.body.appendChild(titleComments);
                    let h4 = document.createElement('h4');
                    h4.innerText = `${valueElement.body}. ${valueElement.email}`;
                    commentsDiv.append(titleComments, h4);
                    allcom.appendChild(commentsDiv)
                    document.body.appendChild(allcom);
                }
            });
    });


