const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const fetchPostsButton = document.querySelector('#fetch')
let API_URL = 'https://jsonplaceholder.typicode.com/posts';
let API_URL_2 = 'https://jsonplaceholder.typicode.com/comments?postId=';
function sendHttpRequest(method,url) {
    return new Promise (resolve => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open(method, url);
        xhr.onload=()=> {
            resolve(xhr.response);
        }
        xhr.send();
    })
}
sendHttpRequest('GET', API_URL).then(posts => {
    for (const post of posts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body; 
        let mylist;
        sendHttpRequest('GET', `${API_URL_2}${post.id}`).then(comments => {
            //console.log(comments)
            for (const comment of comments){
                mylist += comment.body;
                //const postEl = document.importNode(postTemplate.content, true);
            }  
            postEl.querySelector('h3').textContent = mylist;                

        });              
        listElement.append(postEl);
    }
});





// sendHttpRequest('GET', API_URL_2).then(posts => {
//     for (const post of posts) {
//         const postEl = document.importNode(postTemplate.content, true);
//         postEl.querySelector('p1').textContent = post.body;        
//         listElement.append(postEl);
//     }
//     console.log(listElement)
// });

