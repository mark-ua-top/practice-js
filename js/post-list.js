// Отримати список постів з JSONPlaceholder API
// Опис: Використайте публічне API JSONPlaceholder для отримання списку постів.
// Зробіть GET - запит за адресою https://jsonplaceholder.typicode.com/posts таперегляньте отримані дані.
const ghPages = document.querySelector(".githubUsers");
const seePost = document.querySelector(".seePost");

const makeMaket = (users) => {
  return users
    .map((user) => {
      return `<li class="userLi"> 
    <h1 class="userTitle">${user.title}</h1>
    <p class="userId">${user.body}</p>
    </li>`;
    })
    .join("");
};

let currentPage = 0;

seePost.addEventListener("click", (event) => {
  currentPage += 5;
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${currentPage}`)
    .then((response) => response.json())
    .then((data) => {
      ghPages.innerHTML = makeMaket(data);
    });
});

fetch(
  "https://newsapi.org/v2/everything?q=Kyiv&apiKey=ea7ac545c116453e9cf2dc121aae296d"
)
  .then((response) => response.json())
    .then((data) => {
      
    console.log(data)
  });