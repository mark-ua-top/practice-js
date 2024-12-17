// операція rest допомогає зібрати елементи у масив
// Array.from перетворює псевдомасив на масив оскільки на псевдомасиві не всі методи працюють
// function sumNum() {
//   const number = Array.from(arguments);
//   let res = 0;
//   for (let i = 0; i < number.length; i++) {
//     res += number[i];
//   }
//   return res
// }
const sumNum = (...numbers) => {
// const number = Array.from(arguments)
// псевдо масив arguments непрацює у стрілках тому ми можем використати операцію ...rest
let res = 0
for(let i = 0; i < numbers.length; i++){
res += numbers[i]
}
return res
}

console.log(sumNum(8, 2));
console.log(sumNum(9, 4, 2));
