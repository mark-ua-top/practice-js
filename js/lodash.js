const arrayTest = [34, 431, 15, 9, 2, 92, 4];

console.dir(_.drop(arrayTest, 3));

console.dir(_.chunk(arrayTest, 3));

const objName = {
  name: "Mark",
};

const objYr = {
  year: 12,
};

function Foo() {
  this.name = "Kiril";
}

const newPl = _.assign(new Foo(), objYr);

console.log(newPl);

const boxMouseOver = document.querySelector(".hello-site");

let mouseCount = 0;

// boxMouseOver.addEventListener(
//   "mousemove",
//   _.throttle((event) => {
//     mouseCount += 1;
//     console.log(mouseCount);
//   }, 500)
// );

boxMouseOver.addEventListener(
  "mousemove",
  _.debounce((event) => {
    mouseCount += 1;
    console.log(mouseCount);
  }, 500)
);


//Створіть блок на сторінці, який реагує на рух миші.
// Кожен раз, коли користувач рухає мишкою,
// змінюються координати точки на графіку відповідно до руху миші.
// Використайте метод throttle з бібліотеки lodash для того,
// щоб координати оновлювалися не занадто часто та не затримували користувача.
// Встановіть час затримки в мілісекундах, наприклад 50 мс,
// і передайте функцію, яка буде виконуватися при русі миші.
const boxMove = document.querySelector("#graph");

boxMove.addEventListener(
  "mousemove",
  _.throttle((event) => {
      console.log(event);
      boxMove.style.left = event.clientX + "px"
      boxMove.style.top = event.clientY + "px";
  }, 50)
);