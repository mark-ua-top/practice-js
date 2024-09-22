// математичні оператори

// const sum = 5 + 6
// console.log(sum)

// const difference = 6 - 5
// console.log(difference)

// const multiply = 7 * 8
// console.log(multiply)

// const division = 6 / 3
// console.log(division)

// ---------------------------------------------------------------------

// // математичне операція піднесення степення

// const pow = 2 ** 3
// console.log(pow)
// //  число 2 це число яке ми підносимо до степення,
// // а три це сама степпінь

// ---------------------------------------------------------------------

// // оператор остачі ділення %

// const isEvenNumber = 10 % 4
// 10 поділити на 4 = неціле число
// 9 поділити на 4 = неціле число
// 8 поділити на 4 = ціле число
// ми знайшли число яке ділиться на 4 без остачі,
// тому можем знайти остачу від ділення
// 10 - 8 = 2 тобто різниця між числами які ми ділили на 4,
// 2 це остача від ділення

// знайдемо остачу від ділення 24 / 7
// 23 / 7 не ділеться націло
// 22 / 7 не ділеться націло
// 21 / 7 ділеться націло 
// 21 / 7 = 3
// 24 - 21 = 3 - це остача від ділення

// ---------------------------------------------------------------------

// const sum = 0
// const newSum = sum + 1

// let sum = 0
// console.log(sum)
// sum = 3
// console.log(sum)
// sum = sum + 7
// console.log(sum)
// ми можемо скоротити sum = sum + 7
// sum += 7 //це те саме що sum = sum + 7
// console.log(sum)

// ---------------------------------------------------------------------

// let difference = 5
// difference -= 1
// difference -= 3

// console.log(difference)

// ---------------------------------------------------------------------

// переводимо рядковий тип даних в числовий

// console.dir(Number)
// const data = "10"
// const number = Number(data)
// console.log(number)
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(null))
// console.log(Number(undefined))
// console.log("10" + 1)
// console.log(Number("10") + 1)

// const dataNumber = Number(data)
// const multiply = dataNumber + 1

// console.log(Number("hello") + 10)
// nan not any number значить що нема будь якого числа

const styles = "15.5px"

const stylesNumber = Number.parseInt(styles)
console.log(stylesNumber)
// parseInt лише цілі числа

const stylesFloat = Number.parseFloat(styles)
console.log(stylesFloat)
// parseFloat лише цілі числа