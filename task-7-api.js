let postTemplate = document.getElementById("items");
let API_URL = "https://jsonplaceholder.typicode.com/posts";
let API_URL_2 = "https://jsonplaceholder.typicode.com/comments?postId=";

async function doGetRequest(url) {

  let res = await axios.get(url);

  let data = res.data;
  //console.log(data);
  return data
}
//get all posts
doGetRequest(API_URL).then(posts => {
    //console.log(posts);
    posts.forEach((el) => {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      //write posts 
      h2.textContent = el.title.toUpperCase();
      p.textContent = el.body;
      //append titel and body of post to h2 and p
      div.appendChild(h2);
      div.appendChild(p);
      //get comments of each post
      doGetRequest(`${API_URL_2}${el.id}`).then(comments =>{
          let mylist = "";
          let h3 = document.createElement("h3");
          //loop though comments to get all comms of each post
          comments.forEach((e) => {
            mylist += e.body;
          });
          //write to list
          h3.textContent = mylist;
          //append list to h3
          div.appendChild(h3);
          //console.log(mylist);
      })
      postTemplate.appendChild(div);
    });
  });
