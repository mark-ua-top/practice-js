console.dir(Date);
const currentDate = new Date();
console.log(currentDate);

const year = currentDate.getFullYear();

console.log(year);

const month = currentDate.getMonth();

console.log(month);

const dateHtml = document.querySelector(".dateHtml");
// // 1. Створити функцію, яка повертає поточну дату та час.
// const dataTime = () => {
//   const currentDate = new Date();
//   //   const options = {
//   //     weekday: "long",
//   //     year: "numeric",
//   //     month: "short",
//   //     day: "numeric",
//   //     hour: "2-digit",
//   //     minute: "2-digit",
//   //   };
//   //   const localeUk = currentDate.toLocaleString("Uk-uk", options);                                                                          
//   //   const weekday = currentDate.toLocaleString("Uk-uk", {
//   //     month: "short",
//   //     day: "numeric",
//   //     hour: "2-digit",
//   //     minute: "2-digit",
//   //   });
//   //   return weekday;
//   //   const data = currentDate.getDate();
//   //   const hours = currentDate.getHours();
//   //   const minute = currentDate.getMinutes();
//   //   const seconds = currentDate.getSeconds();
//   //     const miliSeconds = currentDate.getMilliseconds();
//   const day = currentDate.toLocaleString("Uk-uk", { day: "numeric" });
//   const hours = currentDate.toLocaleString("Uk-uk", { hour: "numeric" });
//   const minute = currentDate.toLocaleString("Uk-uk", { minute: "numeric" });
//   const seconds = currentDate.toLocaleString("Uk-uk", { second: "numeric" });
//   return `Сьогодні ${day} число, зараз ${hours}:${minute}:${seconds}`;
// };
// console.log(dataTime());

// // 2. Створити функцію, яка приймає дату та повертає рік.
// const dateToYear = () => {
//   const currentDate = new Date();
//   return currentDate.getFullYear();
// };
// console.log(dateToYear());

// // 3. Створити функцію, яка приймає дату та повертає місяць.
// const dateToMonth = () => {
//   const currentDate = new Date();
//   return currentDate.getMonth() + 1;
// };
// console.log(dateToMonth());

// // 4. Створити функцію, яка приймає дату та повертає день місяця.
// const dateToDay = () => {
//   const currentDate = new Date();
//   return currentDate.toLocaleString("Uk-uk", { day: "numeric" });
// };
// console.log(dateToDay());

// // 5. Створити функцію, яка приймає дату та повертає години.
// const dateToHour = () => {
//   const currentDate = new Date();
//   return currentDate.getHours();
// };
// console.log(dateToHour());

// // 6. Створити функцію, яка приймає дату та повертає хвилини.
// const dateToMinute = () => {
//   const currentDate = new Date();
//   return currentDate.getMinutes();
// };
// console.log(dateToMinute());

// // 7. Створити функцію, яка приймає дату та повертає секунди.
// const dateToSecond = () => {
//   const currentDate = new Date();
//   return currentDate.getSeconds();
// };
// console.log(dateToSecond());

// dateHtml.innerHTML =
//   dateToYear() +
//   " рік " +
//   dateToMonth() +
//   " місяць " +
//   dateToDay() +
//   " день " +
//   dateToHour() +
//   " година " +
//   dateToMinute() +
//   " хвилина " +
//   dateToSecond() +
//     " секунд"
    
// // 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).
// const checkWeekend = () => {
//   const currentDate = new Date();
//   const days = currentDate.getDay()
//   if (days === 6 || days === 0) {
//     alert("ВИХІДНИЙ")
//   }
// };
// checkWeekend()

// 9. Створити функцію, яка порівнює дві дати та повертає різницю в днях.
// Standard date-time string format
const unixTimeZero = Date.parse("1970-01-01T00:00:00Z");
console.log(new Date(1000000000000))
// Non-standard format resembling toUTCString()
const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

console.log(unixTimeZero);
// Expected output: 0

console.log(javaScriptRelease);
// Expected output: 818035920000

// 10. Створити функцію, яка приймає дату та кількість днів, та повертає нову дату після додавання цієї кількості днів.


const dates = Date.now()

console.log(dates)