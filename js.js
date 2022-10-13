document.write("<h1>Практична робота №1</h1>");
// ---------------------------------Завдання 1----------------------------------------
let one = ["a", "b", "c"];
let two = [1, 2, 3];
document.write("<h1>Завдання 1:</h1>");
document.write(`Результат об'єднання: ${one.concat(two).toString()}`);

// ---------------------------------Завдання 2----------------------------------------
document.write("<h1>Завдання 2:</h1>");
let arr2 = ["a", "b", "c"];
arr2.push(1, 2, 3);
document.write(`Результат додавання 1,2,3: ${arr2.toString()}`);

// ---------------------------------Завдання 3----------------------------------------
document.write("<h1>Завдання 3:</h1>");
let arr3 = [1, 2, 3];
document.write(`Результат нового масиву: ${arr3.reverse().toString()}`);
// ---------------------------------Завдання 4----------------------------------------
document.write("<h1>Завдання 4:</h1>");
let arr4 = ["js", "css", "jq"];
document.write(`Останній елемент: ${arr4[arr4.length - 1]}`);

// ---------------------------------Завдання 5----------------------------------------
document.write("<h1>Завдання 5:</h1>");
let arr5 = [1, 2, 3, 4, 5];
let newarr5 = arr5.splice(3, 2);
document.write(`Результат нового масиву: ${newarr5.toString()}`);

// ---------------------------------Завдання 6----------------------------------------
document.write("<h1>Завдання 6:</h1>");
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 2);
document.write(`Результат нового масиву: ${arr6.toString()}`);

// ---------------------------------Завдання 7----------------------------------------
document.write("<h1>Завдання 7:</h1>");

let arr7 = [1, 2, 3, 4, 5];
let newarr7 = arr7.splice(1, 3);

document.write(`Результат нового масиву: ${newarr7.toString()}`);

// ---------------------------------Завдання 8----------------------------------------
document.write("<h1>Завдання 8:</h1>");
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(3, 0, "a", "b", "c");

document.write(`Результат нового масиву: ${arr8.toString()}`);

// ---------------------------------Завдання 9----------------------------------------
document.write("<h1>Завдання 9:</h1>");

let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 0, "a", "b");
arr9.splice(6, 0, "c");
arr9.splice(8, 0, "e");

document.write(`Результат нового масиву: ${arr9.toString()}`);

// ---------------------------------Завдання 10----------------------------------------
document.write("<h1>Завдання 10:</h1>");
let arr10 = [3, 4, 1, 2, 7];
arr10.sort((a, b) => {
  if (a >= b) return 1;
  else if (a <= b) return -1;
  else return 0;
});
document.write(`Результат сортування масиву: ${arr10.toString()}`);

// ---------------------------------Завдання 11----------------------------------------
document.write("<h1>Завдання 11:</h1>");
const object11 = {
  js: "test",
  jq: "hello",
  css: "world",
};
document.write("Масив його ключів: " + Object.keys(object11).toString());

// ---------------------------------Завдання 12----------------------------------------
document.write("<h1>Завдання 12:</h1>");
let str12 = "aaa@bbb@ccc";
document.write("Результат заміни: " + str12.replace(/@/g, "!"));

// ---------------------------------Завдання 13----------------------------------------
document.write("<h1>Завдання 13:</h1>");
let date = "2025-12-31";
date = date.split("-").reverse().join("/");
document.write("Результат перетворення дати: " + date);

// ---------------------------------Завдання 14----------------------------------------
document.write("<h1>Завдання 14:</h1>");
let str14 = "я вчу javascript!";
const arrsp = str14.split("");
document.write(`Результат записання кожного символу: ${arrsp.toString()}`);

// ---------------------------------Завдання 15----------------------------------------
document.write("<h1>Завдання 15:</h1>");
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr15.length; i++) {
  let x = "";
  for (let j = 0; j < i + 1; j++) {
    x += "x";
  }
  arr15[i] = x;
}
document.write("Результат заповнення масиву: " + arr15.toString());

// ---------------------------------Завдання 16----------------------------------------
document.write("<h1>Завдання 16:</h1>");
function arrayFill(value, lengthArray) {
  return new Array(lengthArray).fill(value);
};
document.write("Результат заповнення масиву заданими значеннями(x,5): " + arrayFill("x", 5).toString()
);

// ---------------------------------Завдання 17----------------------------------------
document.write("<h1>Завдання 17:</h1>");
let arrsum = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
arrsum.forEach((i1) => {
  i1.forEach((i2) => {
    i2.forEach((i3) => {
      sum += i3;
    });
  });
});
document.write("Сума елементів цього масиву: " + sum);

// ---------------------------------Завдання 18----------------------------------------
document.write("<h1>Завдання 18:</h1>");
let styles = ["Jazz", "Blues"];
document.write("   Додано 'Rock-n-Roll' в кінець масиву");
styles.push("Rock-n-Roll");
styles[Math.ceil(styles.length / 2)] = "Classics";
document.write("   Видалено перший елемент масиву: " + styles.shift());
styles.unshift("Rap", "Reggae");
document.write("   Результат масиву:" + styles.toString());

// ---------------------------------Завдання 19----------------------------------------
document.write("<h1>Завдання 19:</h1>");
let strbackground = "background-color";
let strlist = "list-style-image";
let strwebkit = "-webkit-transition";
function camelize(str) {
  str = str.split("-");
  for (let i = 1; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join("");
};
document.write(`Результат перетворення рядка background-color:  ${camelize(strbackground)}`);
document.write(`<br>Результат перетворення рядка list-style-image:  ${camelize(strlist)}`);
document.write(`<br>Результат перетворення рядка -webkit-transition:  ${camelize(strwebkit)}`);

// ---------------------------------Завдання 20----------------------------------------
document.write("<h1>Завдання 20:</h1>");
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
};
document.write("Елементи більше рівні 1 та менше-рівні 4: ");
document.write(filterRange([5, 3, 8, 1, 3, 7, 9, 14], 1, 4));

// ---------------------------------Завдання 21----------------------------------------
document.write("<h1>Завдання 21:</h1>");
function copySorted(arr) {
  return arr.slice().sort();
};
let arrcopySorted = ["HTML", "JavaScript", "CSS"];
document.write(`Відсортована копія масиву: ${copySorted(arrcopySorted)}`);

// ---------------------------------Завдання 22----------------------------------------
document.write("<h1>Завдання 22:</h1>");

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };
document.write(`Результат сортування масиву об'єктів з властивістю age: ${sortByAge([petro, ivan, mariya])}`);

// ---------------------------------Завдання 23----------------------------------------
document.write("<h1>Завдання 23:</h1>");
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
};
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mart", age: 29 };
document.write(`Результат функції, яка обчислює середній вік: ${getAverageAge([john, pete, mary])}`);

// ---------------------------------Завдання 24----------------------------------------
document.write("<h1>Завдання 24:</h1>");
let users = [
  { id: "іван", name: "Іван Іванко", age: 20 },
  { id: "ганна", name: "Ганна Іванко", age: 24 },
  { id: "петро", name: "Петро Петренко", age: 31 },
];
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
};
document.write(`Результат створення з масиву об'єкт із ключом id та елементами масиву як значеннями: ${JSON.stringify(groupById(users))}`);

// ---------------------------------Завдання 25----------------------------------------
document.write("<h1>Завдання 25:</h1>");
let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};
function sumSalaries(salaries) {
  let arr25 = Object.values(salaries);
  if (arr25.length == 0) return 0;
  sum = 0;
  for (fr of arr25) {
    sum += fr;
  }
  return sum;
};
document.write(`Результат суми всіх зарплат: ${sumSalaries(salaries)}`);