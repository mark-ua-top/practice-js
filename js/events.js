const buttonBack = document.querySelector('button')

buttonBack.addEventListener('click', (event) => {
    const red = Math.random() * (255 - 0) + 0
    const blue = Math.random() * (255 - 0) + 0
    const green = Math.random() * (255 - 0) + 0
    const page = document.querySelector('body')
    page.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    console.log(event.target)
})

const inutElem = document.querySelector('.input')
inutElem.addEventListener('input', (event) => {
    console.log(event.target.value)
})

const formInputElem = document.querySelector('.form_input')
formInputElem.addEventListener('change', (event) => {
    console.log(event.target.value)
})

buttonBack.addEventListener('focus', (event) => {
    const red = Math.random() * (255 - 0) + 0
    const blue = Math.random() * (255 - 0) + 0
    const green = Math.random() * (255 - 0) + 0
    buttonBack.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})

buttonBack.addEventListener('blur', (event) => {
    buttonBack.style.backgroundColor = 'grey'
})

inutElem.addEventListener('focus', (event) => {
    const red = Math.random() * (255 - 0) + 0
    const blue = Math.random() * (255 - 0) + 0
    const green = Math.random() * (255 - 0) + 0
    inutElem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})

inutElem.addEventListener('blur', (event) => {
    inutElem.style.backgroundColor = 'grey'
})

formInputElem.addEventListener('focus', (event) => {
    const red = Math.random() * (255 - 0) + 0
    const blue = Math.random() * (255 - 0) + 0
    const green = Math.random() * (255 - 0) + 0
    formInputElem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})

formInputElem.addEventListener('blur', (event) => {
    formInputElem.style.backgroundColor = 'grey'
})

const formElem = document.querySelector('form')
const userName = {
    logIn: "craftMUA",
    password: "123456"
}

formElem.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.currentTarget.elements.login.value)
    console.log(event.currentTarget.elements.password.value)

    const userData = {
        logIn: event.currentTarget.elements.login.value,
        password: event.currentTarget.elements.password.value
    }

    if (userData.logIn === userName.logIn, userData.password === userName.password) {
        alert("Ви війшли в акаунт")
    } else {
        alert("Ви ввели неправильно пароль або логін")
    }
})

//події клавіатури слухач додаємо на сторінку document або window

document.addEventListener("keydown", (event) => {
    // console.log(event.key)
    console.log(event.code)
    if (event.code === 'KeyR') {
        document.querySelector('body').style.backgroundColor = "red"
    } else if (event.code === 'KeyG') {
        document.querySelector('body').style.backgroundColor = "green"
    } else if (event.code === 'KeyB') {
        document.querySelector('body').style.backgroundColor = "blue"
    } else if (event.code === 'KeyW') {
        document.querySelector('body').style.backgroundColor = "black"
    } else if (event.code === 'KeyV') {
        document.querySelector('body').style.backgroundColor = "violet"
    }
})

// Перемістити елемент з id="box" наліво,
// якщо користувач натискає стрілку вліво,
// та направо, якщо користувач натискає стрілку вправо,
// під час події keydown.

const boxMowe = document.querySelector('#box')

document.addEventListener('keydown', (event) => {
if (event.code === 'ArrowUp') {
boxMowe.
}
})