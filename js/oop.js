// прототипне наслідування це коли ми створюємо обєкт(екземпляр) на базі іншого обєкта(прототипа) 
// та екземпляр унаслідує всі властивості і методи від прототипа
// console.dir(Object)
const user = {
    site: "YouTube", status: "profesional",
    showInfo () {
    return `Даний користувач зареєстрований на сайті: ${this.site} і має статус: ${this.status}`
    }
}
const userMark = Object.create(user)
console.log(userMark.site)
console.log(userMark.showInfo()) // подивились showInfo в userMark який доступний з user(prototype)
userMark.logIn = "Mark"
userMark.password = 87654321

console.log(userMark)