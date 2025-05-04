const user = {
  login: "Mark",
  password: "1111",
};
const friends = ["Max", "Yaroslav", "Yaroslay", "Bale"];

// Створіть функцію, яка буде додавати об'єкт в localStorage.
//  Назва об'єкту має бути ключем, а сам об'єкт - значенням.
localStorage.setItem("friendInfo", JSON.stringify(friends));

const form = document.querySelector("#form");

function addToLocalStorage(userData, key) {
  // const archiveData = JSON.stringify(userData);
  // console.log(archiveData);
  // localStorage.setItem("userInfo", archiveData)
  localStorage.setItem(key, JSON.stringify(userData));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userForm = {
    name: document.getElementById("name").value,
    password: document.getElementById("password").value,
    year: document.getElementById("year").value,
  };
  addToLocalStorage(userForm, "userData");
});

addToLocalStorage(friends, "friends");
addToLocalStorage(user, "userInfo");

// Створіть функцію, яка буде отримувати об'єкт з localStorage.
// Назва об'єкту має бути ключем, а сам об'єкт - значенням.
function getFromLocalStorage(userData) {
  const dataFromLocalStorage = localStorage.getItem(userData);
  const parseData = JSON.parse(dataFromLocalStorage);
  return parseData;
}

getFromLocalStorage("friends");
console.log(getFromLocalStorage("userInfo"));
console.log(getFromLocalStorage("friends"));

// Створіть функцію, яка буде видаляти значення з localStorage за ключем.
function delItemFromLocalStorage(key) {
  localStorage.removeItem(key);
}

delItemFromLocalStorage("friends");

// Створіть функцію, яка буде видаляти всі значення з localStorage.
function delAllItemFromLocalStorage() {
  localStorage.clear();
}

// delAllItemFromLocalStorage();
