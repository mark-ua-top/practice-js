// const fruits = [
//   {
//     title: "Jack",
//     price: 4000,
//     photo:
//       "https://assets.clevelandclinic.org/transform/83980869-7c2c-4978-9458-91168f785166/eatJackfruit-823672534-770x533-1_jpg",
//   },
//   {
//     title: "Bread",
//     price: 2500,
//     photo:
//       "https://www.naplesgarden.org/wp-content/uploads/2024/09/Breadfruit-2-scaled.jpg",
//   },
//   {
//     title: "Durian",
//     price: 9000,
//     photo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2igIMtve7GzTKvVOJsEGkHvzrkZAXTUdrYQ&s",
//   },
//   {
//     title: "Pineapple",
//     price: 500,
//     photo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7SxOWYbcQgZG35EOPOKfLRL_GoY_F-QwFA&s",
//   },
//   {
//     title: "Dragon",
//     price: 300,
//     photo:
//       "https://images.everydayhealth.com/images/diet-nutrition/dragon-fruit-101-1440x810.jpg",
//   },
// ];
// // // перший спосіб динамічної розмітки
// // const fruitElem = fruits
// //   .map(
// //     (fruit) => `<li class="fruit-item">
// //       <h2>${fruit.title}</h2>
// //       <p>${fruit.price}</p>
// //       <img src="${fruit.photo}" alt="${fruit.title}" />
// //     </li>`
// //   )
// //   .join("");

// // console.log(fruitElem);

// // const fruitList = document.querySelector(".fruit-list");

// // // fruitList.innerHTML = fruitElem;

// // // не видаляє все в елементі
// // fruitList.insertAdjacentHTML("beforeend", fruitElem)

// // другий спосіб динамічної розмітки

// const fruitsList = document.querySelector(".fruit-list");

// fruits.forEach((fruit) => {
//   const fruitItem = document.createElement("li");
//   const fruitTitle = document.createElement("h2");
//   const fruitPrice = document.createElement("p");
//   const fruitImg = document.createElement("img");

//   fruitTitle.textContent = fruit.title;
//   fruitPrice.textContent = fruit.price;
//   fruitImg.src = fruit.photo;
//   fruitImg.alt = fruit.title;

//   fruitsList.classList.add("fruit-list");
//   fruitItem.classList.add("fruit-item");

//   fruitItem.append(fruitTitle, fruitPrice, fruitImg);
//   fruitsList.append(fruitItem);
// });
