"use strict";

function getResult(a, b, c) {
    let x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        x.length = 0;
    } else if (discriminant > 0) {
        x.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
    } else {
        x.push(-b / (2 * a));
    }
     
    return x;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Внимание! Средняя оценка рассчитана на основе первых 5 введенных чисел.");
        marks.splice(5);
    }

    let markQuantity = marks.length;
    let sum = 0;

    for (let i = 0; i < markQuantity; i++) {
        sum += marks[i]; 
    }

    let averageMark = sum / markQuantity;

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let now = new Date();
    let age = now.getFullYear() - dateOfBirthday.getFullYear();
    let result;

    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}
