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

// function checkAge(age) {
//   if (age < 18) {
//     return;
//   }
//   return 'some content';
// }

// Lab 1.1
// function sayHelloWorld() {
//   alert('Hello World');
// }
// sayHelloWorld();

// Lab 1.2
// const user = prompt('Enter username');

// // #1
// function sayHelloUser() {
//   alert(`Hello ${user}`);
// }
// sayHelloUser();

// // #2
// function sayHelloUser(username) {
//   alert(`Hello ${username}`);
// }
// sayHelloUser(user);

// Lab 1.6
// function multiply(a, b) {
//   return a * b;
// }

// Lab 1.7
// function min(a, b) {
//   // #1
//   // if (a < b) {
//   //   return a;
//   // }
//   // return b;
//   // #2
//   return a < b ? a : b;
// }

// Lab 1.8
// function login(username, password) {
//   // #1
//   // if (username === 'admin' && password === 'P@ssw0rd') {
//   //   return true;
//   // }
//   // return false
//   // #2
//   return username === 'admin' && password === 'P@ssw0rd';
// }

// Lab 1.9
// function isPrime(target) {
//   for (let i = 2; i < target; i++) {
//     if (target % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function showPrimeNumber(int) {
//   for (let i = 2; i <= int; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// showPrimeNumber(20);

// Lab 1.11
// function sayHi(age) {
//   if (age < 12) alert('Hi kid');
// }
// console.log(sayHi);

// Lab 1.12
// function getLongText() {
//   return;
//   ('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
// }

// Lab 1.13
// function checkAge(age) {
// if (age > 18) {
//   return true;
// } else {
//   return confirm('Did parents allow you?');
// }
// #1
// if (age > 18) {
//   return true;
// }
// return confirm('Did parents allow you?');
// #2
// return age > 18 ? true : confirm('Did parents allow you?');
// #3
// return age > 18 || confirm('Did parents allow you?');
// }

// Lab 1.14
// function max(a, b, c, d) {
//   if (a === undefined) {
//     return;
//   }
//   if (b === undefined) {
//     return Math.max(a);
//   }
//   if (c === undefined) {
//     return Math.max(a, b);
//   }
//   if (d === undefined) {
//     return Math.max(a, b, c);
//   }
//   return Math.max(a, b, c, d);
// }

// console.log(max()); // undefined
// console.log(max(2)); // 2
// console.log(max(3, 1)); // 3
// console.log(max(7, 3, 'aaaaa', 2)); // 9

// function Declaration
// function sayHi() {
//   alert('Hi!');
// }
// sayHi();

// function Expression
// const sayHi = function () {
//   console.log('Hi!');
// };

// sayHi();

// const myAlert = alert;
// myAlert('Heloo Alert My');

// function sayHello(nickname) {
//   console.log(`Hello ${nickname}`);
// }

// const say = sayHello;
// console.log(say);
// say('John');

// const myAlert = function (cb) {
//   cb();
// };

// myAlert(alert);

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert('You agreed.');
// }
// function showCancel() {
//   alert('You canceled the execution.');
// }
// // functions showOk, showCancel are passed as arguments to ask
// ask('Do you agree?', showOk, showCancel);

// Error
// say()
// const say = function() {
//   console.log('Say Function')
// }

// // Error
// console.log(username)
// const username = 'Guest'

// Arrow Function =>
// Function Declaration
// function sum(a, b) {
//   return a + b;
// }
// // Function Expression
// const sum = function (a, b) {
//   return a + b;
// };
// // Arrow Function
// const sum = (a, b) => a + b;
// // ระวัง
// const checkAge = (age) => {
//   if (checkAge > 18) {
//     return true
//   }
//   return false
// };
// const sum = (a, b) => { return a + b };

// function isPrime(target) {
//   for (let i = 2; i < target; i++) {
//     if (target % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const isPrime = target => {
//   for (let i = 2; i < target; i++) {
//     if (target % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const sayHi = () => console.log('Hi');

// const username = 'john';
// const password = '123456';
// const email = 'john@gmail.com';

// const text = 'gender';

// const user = {
//   username: 'john',
//   password: '123456',
//   email: 'john@gmail.com',
//   'birth date': '1/1/91',
//   [text]: 'Male',
//   function: ''
// };

// console.log(user.email);
// console.log(user['birth date']);
// console.log(user[text]);

// user.phoneNumber = '0901985611';
// user.email = 'jjjj@gmail.com';
// delete user.function;
// console.log(user.aaaaaaa);
// console.log(user.function);

// const username = 'john';
// const password = '123456';
// const email = 'john@gmail.com';

// const user = {
//   username: username,
//   password: password,
//   email: email
// };

// shorthand
// const user = {
//   username,
//   password,
//   email
// };

// if ('phoneNumber' in user) {
//   console.log('There is');
// } else {
//   console.log('No');
// }

// for (let k in user) {
//   // console.log(k);
//   // console.log(user[k]);
//   console.log(`${k}: ${user[k]}`);
// }
// console.log(user);

// Lab 2.1
// const multiply = function (a, b) {
//   return a * b;
// };

// console.log(multiply(17, 7));

// Lab 2.2
// const checkPermission = function (role, cb1, cb2) {
//   if (role === 'ADMIN') {
//     cb1();
//   } else {
//     cb2();
//   }
// };

// checkPermission(
//   'ADMIN',
//   function () {
//     alert('ACCESS GRANTED');
//   },
//   function () {
//     alert('ACCESS DENIED');
//   }
// );

// const grant = function () {
//   alert('ACCESS GRANTED');
// };

// const deny = function () {
//   alert('ACCESS DENIED');
// };

// checkPermission('USER', grant, deny);

// Lab 3.1
// const multiply = (a, b) => a * b;
// console.log(multiply(23, 9));

// Lab 3.2
// const isPrime = num => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// Lab 3.5
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   'Do you agree?',
//   () => {
//     alert('You agreed.');
//   },
//   () => {
//     alert('You canceled the execution.');
//   }
// );

// Lab 3.6
// const convertDayToSecond = day => day * 24 * 60 * 60;

// Lab 3.7
// const isDivideBySeven = num => num % 7 === 0 ? true : false;
// const isDivideBySeven = num => num % 7 === 0;

// Lab 3.8
// const calcFootballPoint = (win, draw) => 3 * win + draw;

// Lab 3.9
// const isLeapYear = year => {
//   if (year % 100 === 0) {
//     return year % 400 === 0;
//   }
//   return year % 4 === 0;
// };

// console.log(isLeapYear(2000));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2020));

// Lab 3.10
// const calcDayOld = year => {
//   let result = 0;
//   for (let i = year; i <= 2020; i++) {
//     if (isLeapYear(i)) {
//       result += 366;
//     } else {
//       result += 365;
//     }
//   }
//   return result;
// };

// Lab 3.11
// const convertFahrentheitToCelcius = farenheit => ((farenheit - 32) * 5) / 9;

// Lab 3.12
// 5! = 5 x 4 x 3 x 2 x 1 = 120
// const factorial = num => {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(factorial(5));

// *** Object ***
// Lab 1.1
// const person = {
//   name: 'John Doe',
//   gender: 'Male',
//   age: 40,
//   address: '502 Mint Tower Banthadthong Rd. Bangkok 10310',
//   phoneNumber: '0901900900'
// };

// Lab 1.2
// const user = {};
// user.name = 'John'; // { name: 'John' }
// user.surname = 'Doe'; // { name: 'John', surname: 'Doe' }
// user.name = 'Matt'; // { name: 'Matt', surname: 'Doe' }
// delete user.name; // { surname: 'Doe' }

// Lab 1.3
// const isEmptyObject = obj => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };

// console.log(isEmptyObject(user));

// Lab 1.4
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// const getTotalSalaries = obj => {
//   let sum = 0;
//   for (let k in obj) {
//     sum += obj[k];
//   }
//   return sum;
// };

// console.log(getTotalSalaries(salaries));

// Lab 1.5
// const isNumber = num => {
//   if (num === null || num === '' || (num + '').trim() === '' || typeof num === 'boolean') {
//     return false;
//   }
//   return !isNaN(num);
// };

// const multiplyNumeric = (obj, num) => {
//   let result = {};
//   for (let k in obj) {
//     result[k] = isNumber(obj[k]) ? num * obj[k] : obj[k];
//   }
//   return result;
// };

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// };

// console.log(multiplyNumeric(menu, 5));

// Lab 1.6
// const username = prompt('Enter username');
// const email = prompt('Enter email');
// const password = prompt('Enter password');

// const user = {
//   username: username,
//   email: email,
//   password: password
// };

// shorthand
// const user = {
//   username,
//   email,
//   password
// };

// Lab 1.7
// const result = {};
// let key, value;

// do {
//   key = prompt('Enter key');
//   value = prompt('Enter value');
//   if (key !== 'stop' && value !== 'stop') {
//     result[key] = value;
//   }
// } while (key !== 'stop' && value !== 'stop');

// Lab 1.8
// const result = {};
// let key, value;

// do {
//   key = prompt('Enter fruit');
//   value = prompt('Enter amount');
//   if (key !== 'stop' && value !== 'stop') {
//     if (value > 1) {
//       result[key + 's'] = value;
//     } else {
//       result[key] = value;
//     }
//   }
// } while (key !== 'stop' && value !== 'stop');
// console.log(result);

// Lab 1.9
// const name = prompt('Enter product name');
// const amount = +prompt('Enter product amount');
// const unitPrice = +prompt('Enter unit price');
// const discount = +prompt('Enter discount');

// const product = {
//   name,
//   amount,
//   unitPrice
// };

// if (discount > 0) {
//   product.discount = discount;
// }

// const calcPrice = obj => (obj.amount * obj.unitPrice * (100 - obj.discount)) / 100;
// console.log(product);
// console.log(calcPrice(product));

// Lab 1.10
// const employees = {
//   john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
//   peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
//   mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
//   sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
// };

// const input = prompt('Enter name');
// let showText = 'Not Found';
// if (employees[input] !== undefined) {
//   showText = `Name: ${input}, salary: ${employees[input].salary},
//   address: ${employees[input].address.district},  ${employees[input].address.province}`;
// }
// console.log(showText);

// const user = {
//   name: 'John',
//   age: 30,
//   gender: 'Male'
// };

// const newUser = user;
// user.gender = 'Female';
// console.log(newUser);

// Clone Object 1# for in loop
// const newUser = {};
// for (let k in user) {
//   newUser[k] = user[k];
// }

// user.gender = 'Female';
// console.log(newUser);

// 2# Object.assign
// const newUser = { address: '111', name: 'Jessica' };
// const user2 = { phone: '0190900009', name: 'Peter' };
// Object.assign(newUser, user, user2);
// console.log(newUser);

// 3# Spread operator ( ... )
// const newUser = { ...user }; // clone object
// const user2 = { phone: '0190900009', name: 'Peter' };
// const mergeUser = { ...user, ...user2 }; // merge object
// console.log(mergeUser);

// Object method
// const user = {
//   name: 'John',
//   age: 30,
//   height: 1.8,
//   weight: 65,
//   // sayHi: function () {
//   //   alert('Hi world!!');
//   // },
//   // shorthand
//   sayHi() {
//     alert('Hi world!!');
//   },
//   sayHello: sayHello
// };

// function sayHello() {
//   alert('Hello world!!');
// }

// this keyword
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
//   // getFullName() {
//   //   return user.firstName + ' ' + user.lastName;
//   // }
// };

// const user2 = { firstName: 'Jack', lastName: 'Ma' };
// user2.getFullName = user.getFullName;

// console.log(user2.getFullName());

// function getFullName() {
//   return this.firstName + ' ' + this.lastName;
// }

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName
// };

// var firstName = 'Ellie';

// const user2 = {
//   firstName: 'Jack',
//   lastName: 'Ma',
//   getFullName,
//   // sayHi: () => console.log(this.firstName)
//   sayHi: function () {
//     console.log(this.firstName);
//   }
// };

// // console.log(user.getFullName());
// // console.log(user2.getFullName());
// user2.sayHi();

// const product = {
//   name: 'Coke',
//   price: 20,
//   image: 'https://picsum/sfglfskldslfdsfsfd',
//   description: 'Coke is yours'
// };

// const product1 = {
//   name: 'Pepsi',
//   price: 19,
//   image: 'https://picsum/sfglfskldslfdasdsadsafsfd',
//   description: 'Pepsi is da best'
// };

// const product2 = {
//   name: 'Fanta',
//   price: 15,
//   image: 'https://picsum/sfglfskldslfdaaadasassdsadsafsfd',
//   description: 'Fantasia'
// };

// function Product(name, price, image, description) {
//   this.name = name;
//   this.price = price;
//   this.image = image;
//   this.description = description;
//   this.isActive = true;
//   this.show = function () {
//     return `Name: ${this.name}, description: ${this.description}`;
//   };
// }

// const pro = new Product('Coke', 20, 'https://picsum/sfglfskldslfdsfsfd', 'Coke is yours');
// const pro2 = new Product('Pepsi', 19, 'https://picsum/sfglfskldslfdasdsadsafsfd', 'Pepsi is da best');

// console.log(pro);
// console.log(pro2);

// pro.name = 'Est';
// pro.supplier = 'Abc';

// const employees = {
//   john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
//   peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
//   mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
//   sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
// };

// console.log(employees.jame?.address.province);

// Lab 3.14
// const notebook = {
//   brand: 'ASUS',
//   model: 'Vivobook D413IA-EB303TS',
//   processor: 'AMD Ryzen 7 4700U 3.6GHz',
//   graphics: 'Integrated Graphics : AMD Radeon Graphics',
//   ram: '8GB DDR4 Onboard',
//   storage: '512GB PCIe NVMe M.2 SSD'
// };

// const cloneNotebook = {};
// for (let key in notebook) {
//   cloneNotebook[key] = notebook[key];
// }

// const cloneNotebook1 = {};
// Object.assign(cloneNotebook1, notebook);

// Lab 3.15
// const state1 = { username: 'john', point: 100, loading: true };
// const state2 = Object.assign({}, state1, { point: 75, loading: false, success: true });
// console.log(state2);

// Lab 3.16
// const permission1 = { canView: false, canDelete: false };
// const permission2 = { canUpdate: true, canCreate: true };
// const permission3 = { canCreate: false, canDelete: true };
// const permission4 = { canView: true };

// const permission = Object.assign({}, permission1, permission2, permission3, permission4);
// const dePermission = { ...permission1, ...permission2, ...permission3, ...permission4 };

// Lab 3.17
// let user = {
//   name: 'John',
//   sayHi: function () {
//     console.log(this.name);
//   }
// };

// user.sayHi(); // John

// Lab 3.18
// let name = 'Joe';
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this
//   };
// }
// console.log(window);
// let user = makeUser(); // window.makeUser()
// console.log(user.ref.name); // *

// const obj = {
//   name: 'Jack',
//   makeUser: function () {
//     return {
//       name: 'John',
//       ref: this
//     };
//   }
// };

// console.log(obj.makeUser()); // { name: 'John', ref: { name: 'Jack', makeUser: function() { return { name: 'John', ref: this } } } }
// console.log(obj.makeUser().ref.makeUser);
// console.log(obj.makeUser().name);

// Lab 3.19
// let calculator = {
//   number1: 0,
//   number2: 0,
//   read() {
//     this.number1 = +prompt('Enter number 1');
//     this.number2 = +prompt('Enter number 2');
//   },
//   sum() {
//     return this.number1 + this.number2;
//   },
//   mul() {
//     return this.number1 * this.number2;
//   }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Lab 3.20
// function Calculator() {
//   this.number1 = 0;
//   this.number2 = 0;

//   this.read = function () {
//     this.number1 = +prompt('Enter number 1');
//     this.number2 = +prompt('Enter number 2');
//   };

//   this.sum = function () {
//     return this.number1 + this.number2;
//   };

//   this.mul = function () {
//     return this.number1 * this.number2;
//   };
// }

// const calculator = new Calculator();
// const calculator1 = new Calculator();
// const calculator2 = new Calculator();
// const calculator3 = new Calculator();

// console.log(calculator);

// Lab 3.21
// function Accumulator(startingValue) {
//   // this = {}

//   this.currentValue = startingValue;

//   this.read = function () {
//     // #1
//     // const num = +prompt('Enter number');
//     // this.currentValue += num; // this.currentValue = this.currentValue + num
//     // #2
//     this.currentValue += +prompt('Enter number');
//   };

//   this.show = function () {
//     alert(this.currentValue);
//   };
//   // return this
// }

// const acc = new Accumulator(10); // { currentValue: 10 }
// console.log(acc);

// Lab 3.22
const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

const product2 = {};

console.log(product1.distributor.address.province);
console.log(product2.distributor?.address?.province);
