"use strict";

// Задание 1

console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

let getNames = () => weapons.map(weapon => weapon.name);

let getCountReliableWeapons = (strength) => weapons.filter(weapon => weapon.durability > strength).length;

let hasReliableWeapons = (strength) => weapons.some(weapon => weapon.durability > strength);

let getReliableWeaponsNames = (strength) => weapons
    .filter(weapon => weapon.durability > strength)
    .map(weapon => weapon.name);

let getTotalDamage = () => weapons
    .map(weapon => weapon.getDamage())
    .reduce((sum, item) => sum + item);

function getValuestCountToSumValues(numbers, value) { 
    let array = [];
    numbers.reduce(function(sum, item) {
        array.push(sum); 
        return (sum + item);
    });

    let index = array.findIndex(item => item >= value);
    return (index + 1) || numbers.length;
}


// Задание 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

let compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);

/*//тестирование кода
console.log(compareArrays([8, 9], [6])); // false
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
console.log(compareArrays([], [])); //true
*/

function memorize(fn, limit) {
    let memory = [];
    return function(...args) {
        let findResult = memory.find(item => compareArrays(item.args, args));
        let result = findResult ? findResult.result : fn(...args);
		
        if (!findResult) {
            memory.push({args: args, result: result});
        }

        if (memory.length > limit) {
            memory.splice(0, 1);
        }

        return result;
    }
}

const arrayOfNumbers = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4], [5,7,39,40,17], [1,6,7,15,67,81], [8], [9,5,2,4], [9,47,2,3,48,105,760] ];

function testCase(testFunction, timer) {
    console.time(timer);

    for (let i = 0; i < 100; i++) {
        arrayOfNumbers.forEach(item => testFunction(...item));
    }

    console.timeEnd(timer);
}


// Тестирование функций при sleep = 0

testCase(sum, 'sum при sleep = 0');
// sum при sleep = 0: 1003.75 ms

testCase(memorize(sum, 1), 'memorize, limit = 1');
// memorize, limit = 1: 999.659912109375 ms

testCase(memorize(sum, 2), 'memorize, limit = 2');
// memorize, limit = 2: 807.764892578125 ms

testCase(memorize(sum, 3), 'memorize, limit = 3');
// memorize, limit = 3: 800.777099609375 ms

testCase(memorize(sum, 5), 'memorize, limit = 5');
// memorize, limit = 5: 701.359130859375 ms

//-------------------------------------------------

// Тестирование функций при sleep = 100

testCase(sum, 'sum при sleep = 100');
// sum при sleep = 100: 101002.21508789062 ms

testCase(memorize(sum, 1), 'memorize, limit = 1');
// memorize, limit = 1: 101003.58032226562 ms

testCase(memorize(sum, 2), 'memorize, limit = 2');
// memorize, limit = 2: 80801.705078125 ms

testCase(memorize(sum, 3), 'memorize, limit = 3');
// memorize, limit = 3: 80800.71313476562 ms

testCase(memorize(sum, 5), 'memorize, limit = 5');
// memorize, limit = 5: 70703.72119140625 ms

// По результатам тестирования можно сделать вывод о том, что скорость обработки оптимизированной функции 'memorise'
// напрямую зависит от значения, переданного в параметр 'limit' (чем больше значение, тем выше скорость выполнения функции).
// При limit = 1 скорость обработки функций 'sum' и 'memorize' приблизительно одинакова.
