let users= [
  { name:"A", age:17 },
  { name:"B", age:20 },
]
const adultNames = users
  .filter(({ age }) => age >= 18)
  .map(({ name }) => name); //{}は必要。ないと空配列しか返ってこない。もともとの配列が{}がついているのでここでも必要。

// console.log(adultUserNames);
//  ["B"]を返す

// 問題１
const usersNameOver = users.filter(({ age }) => age >= 20).map(({ name }) => name)
// console.log(usersNameOver);

// 問題２
const usersNameDown = users.filter(({ age }) => age < 20).map(({ name }) => name)
// console.log(usersNameDown);

// 問題３
users = [
  { name: "A", age: 25, active: true },
  { name: "B", age: 30, active: false },
  { name: "C", age: 22, active: true }
];
const usersActive = users.filter(({ active })  => active).map(({name}) => name)
console.log(usersActive);

// 問題４
const usersConst = users.filter(({ age }) => age != undefined).map(({ name }) => name)
console.log(usersConst);
