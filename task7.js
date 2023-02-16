const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const fetchPostsButton = document.querySelector('#fetch')
let API_URL = 'https://jsonplaceholder.typicode.com/posts';
let API_URL_2 = 'https://jsonplaceholder.typicode.com/comments?postId=';
async function doGetRequest(url) {

    let res = await axios.get(url);
  
    let data = res.data;
    return data
  }
// sendHttpRequest('GET', API_URL).then(posts => {
//     for (const post of posts) {
//         const postEl = document.importNode(postTemplate.content, true);
//         postEl.querySelector('h2').textContent = post.title.toUpperCase();
//         postEl.querySelector('p').textContent = post.body; 
        
//         sendHttpRequest('GET', `${API_URL_2}${post.id}`).then(comments => {
//             let mylist = "";
//             //console.log(comments)
//             for (const comment of comments){
//                 mylist += comment.body;
//                 //const postEl = document.importNode(postTemplate.content, true);
//             }  
//             postEl.querySelector('h3').textContent = mylist;

//         });              
//         listElement.append(postEl);
//     }
// });

doGetRequest(API_URL).then(posts => {
    for (const post of posts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body; 
        let mylist = '';
        doGetRequest(`${API_URL_2}${post.id}`).then(comments => {
            for (const comment of comments){
                mylist += comment.body;
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

