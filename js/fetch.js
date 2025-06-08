// Отримати список користувачів з GitHub API Опис:
// Використайте публічне API GitHub для отримання списку користувачів.
// Зробіть GET-запит за адресою https://api.github.com/users та
// перегляньте отримані дані щодо користувачів.
const ghPages = document.querySelector(".githubUsers");

const makeMaket = (users) => {
 return users.map((user) => {
    return `<li class="userLi"> 
    <h1 class="userTitle">${user.login}</h1>
    <p class="userId">${user.id}</p>
    <p class="userNodeId">${user.node_id}</p>
    <img class="userImg" src="${user.avatar_url}" alt="${user.login}" />
    </li>`;
  }).join("");
};

fetch("https://api.github.com/users")
  .then((response) => response.json())
    .then((data) => {
      console.log(data)
    ghPages.innerHTML = makeMaket(data);
  });
