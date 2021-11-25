// console.log('Function');

// function sum(a, b) {
//   console.log(a);
//   return a + b;
// }

// const total = sum(3, 4);
// const total = sum(10, 7);
// console.log(total);

// const total = sum(1); // 1 + undefined
// console.log(total);

// const total = sum(1, 2, 3, 4, 5);

// function calcCircleArea(r) {
//   // PI * r * r
//   var pi = 3.14;
//   let area = pi * r ** 2;
//   return area;
// }

// console.log(area);
// console.log(pi);
// console.log(r)

// calcCircleArea(10)

// function sayHi() {
//   let nickname = 'Joey'
//   console.log('Hi ' + nickname);
//   nickname = 'Rebecca';
// }

// let nickname = 'John';
// sayHi();
// console.log(nickname);

// function sayHi(nickname) {
//   // let nickname = 'Sid';
//   console.log('Hi ' + nickname);
//   nickname = 'Rebecca;';
// }

// let nickname = 'John';
// sayHi('Jimmy');

// console.log(person);

// function sendMessage(from = 'Anonymous', to = 'Unknown') {
//   console.log(`From: ${from} to: ${to}`);
// }

// sendMessage('Ann', 'Maria');
// sendMessage('Nicole');
// sendMessage();

// function checkPermission(role) {
//   if (role === 'ADMIN') {
//     return 'Granted';
//     // console.log('Yes Admin');
//   } else {
//     return 'Forbidden';
//   }
// }

// function checkPermission(role) {
//   if (role === 'ADMIN') {
//     return 'Granted'
//   }
//   return 'Forbidden';
// }

// checkPermission('ADMIN');

// function sayHi(nickname) {
//   console.log('Hi ' + nickname)
//   return;
// }

// const message = sayHi('John');

function checkAge(age) {
  if (age < 18) {
    return;
  }
  return 'some content';
}
