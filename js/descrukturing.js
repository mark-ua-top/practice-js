// // деструкторизація це спосіб скоротити звернення до клучів в обєкті

// const user = {
//   name: "Mark",
//   password: 87654321,
//   friends: ["Tima", "Dima"],
//   addres: {
//     country: "Ukraine",
//     city: "Kruglyk",
//   },
// };

// // const userCountry = user.addres.country;
// // const password = user.password;
// // const name = user.name;
// // const friends = user.friends;

// const {name: userName, password, friends ="empty", addres:{country, city}} = user
// const {country, city} = user.addres

// console.log(userName, password, friends)
// console.log(country, city)