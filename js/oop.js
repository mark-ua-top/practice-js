// // прототипне наслідування це коли ми створюємо обєкт(екземпляр) на базі іншого обєкта(прототипа)
// // та екземпляр унаслідує всі властивості і методи від прототипа
// console.dir(Array);
// const user = {
//   site: "YouTube",
//   status: "profesional",
//   showInfo() {
//     return `Даний користувач зареєстрований на сайті: ${this.site} і має статус: ${this.status}`;
//   },
// };
// const userMark = Object.create(user);
// console.log(userMark.site);
// console.log(userMark.showInfo()); // подивимось showInfo в userMark який доступний з user(prototype)
// userMark.logIn = "Mark";
// userMark.password = 87654321;

// console.log(userMark);
// // for (const key in userMark){
// // if (userMark.hasOwnProperty(key)){
// //     console.log(key)
// // }
// // }
// // console.log(user.isPrototypeOf(userMark))

// function конструктори це модель або шаблон за якою створюємо екземрляр
// const Car = function (carModel, carPrice, carColor) {
//   this.model = carModel;
//   this.cost = carPrice;
//   this.color = carColor;
// };
// const carBMW = new Car("BMW M4 competion", "85000$", "grey")
// console.log(carBMW)

// const carLamborghini = new Car("Lamborghini Aentador SVJ Roadster", "880000€", "aquamarine")
// console.log(carLamborghini)

// Передамо аргументи у вигляді об'єкта параметрів
// const Car = function (info) {
//   this.model = info.modelCar;
//   this.cost = info.priceCar;
//   this.color = info.colorCar;
// };
// const Car = function ({ modelCar, priceCar, colorCar }) {
//   // const {modelCar, priceCar, colorCar} = info
//   this.model = modelCar;
//   this.cost = priceCar;
//   this.color = colorCar;
//   this.showInfo = function(text){
//     return `${this.model} коштує ${this.cost} і має колір ${this.color}`
//   }
// };
// const infoBmw = {
//   modelCar: "BMW M4 competion",
//   priceCar: "85000$",
//   colorCar: "grey",
// };

// const carBMW = new Car(infoBmw);
// console.log(carBMW.showInfo());

// const carLamborghini = new Car({
//   modelCar: "Lamborghini Aentador SVJ Roadster",
//   priceCar: "880000€",
//   colorCar: "aquamarine",
// });
// console.log(carLamborghini.showInfo());

// напишемо гру битву орків з Українсями
class Hero {
  constructor(infoOrk) {
    this.name = infoOrk.heroName;
    this.point = infoOrk.heroPoints;
    this.power = infoOrk.heroPower;
  }

  showInfo() {
    return `Герой ${this.name} має стільки балів ${this.point} та стільки сили ${this.power}`;
  }
}
class Ork extends Hero {
  constructor(infoOrk) {
    super(infoOrk); // Цей метод затягує данні
    // з конструктора класу Hero
    this.skin = infoOrk.heroSkin;
    this.iq = infoOrk.heroIq;
  }
  orkAttacks() {
    return `Вас атакує Орк з iq ${this.iq}`
  }
}

const RuOrk1 = new Ork({
    heroName: "Denis Soldat",
    heroPoints: 30,
    heroPower: 5,
    heroSkin: "MultiCam",
    heroIq: 1
})

class UaSoldat extends Hero {
    constructor(infoElf){
        super(infoElf)
        this.earsLength = infoElf.heroEarsLength,
        this.age = infoElf.heroAge,
        this.name = infoElf.heroName
    }
    
    elfPowers() {
        return `${this.name} стільки років ${this.age}`
    }
}

const uaHero1 = new UaSoldat({
    heroName: "Dmytro Sergant",
    heroPoints: 100,
    heroPower: 27,
    heroEarsLength: "15cm" ,
    heroAge: 33
})

console.log(RuOrk1.orkAttacks())
console.log(uaHero1.elfPowers())

