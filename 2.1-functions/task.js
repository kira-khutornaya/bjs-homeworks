"use strict";

//Задание 1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D < 0) {
        return {
            D, 
            roots: [] 
        };
    } else if (D === 0) {
        let x1 = -b / 2 * a;
        return { 
            D, 
            roots: [x1]
        };
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a),
            x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { 
            D, 
            roots: [x1, x2]
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    let rootsOfEquation;

    if (result.roots.length === 0) {
        rootsOfEquation = `Уравнение не имеет вещественных корней`;
    } else if (result.roots.length === 1) {
        rootsOfEquation = `Уравнение имеет один корень: X1 = ${result.roots[0]}`;
    } else {
        rootsOfEquation = `Уравнение имеет два корня: X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`
    }

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    console.log(rootsOfEquation);
}

showSolutionsMessage(2, 4, 2);


//Задание 2

function getAverageScore(data) {
    let gradeBook = {};

// расчет средней оценки по каждому предмету
    for (let prop in data) {
        gradeBook[prop] = getAverageMark(data[prop]);
    };

// расчет средней оценки по всем предметам
    let averageSum = 0;
    let markAverageNumber = 0;

    for (let mark in gradeBook) {
        averageSum += gradeBook[mark];
        markAverageNumber++;
    }

    if (markAverageNumber === 0) {
        gradeBook.average = 0;
    } else {
        gradeBook.average = averageSum / markAverageNumber;
    }

    return gradeBook;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i]; 
        }

        return sum / marks.length;
    }
}

console.log(getAverageScore({}));
console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));


//Задание 3

function getPersonData(secretData) {
    let person = {};
    let secretDataNumber = 0;

    for (let prop in secretData) {
        if (secretDataNumber === 0) {
            person.firstName = getDecodedValue(secretData[prop]);
        } else if (secretDataNumber === 1) {
            person.lastName = getDecodedValue(secretData[prop]);
        }

        secretDataNumber++;
    }

    return person; 
}

function getDecodedValue(secret) {
    let name;
    if (secret === 1) {
        name = "Эмильо";
    } else if (secret === 0) {
        name = "Родриго";
    }

    return name;
}

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));