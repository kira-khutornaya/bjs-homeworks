"use strict";

//Задание 1

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(parseInt(percent))) {
        return `Параметр 'процентная ставка' содержит неправильное значение '${percent}'`;
    } else if (isNaN(parseInt(contribution))) {
        return `Параметр 'начальный взнос' содержит неправильное значение '${contribution}'`;
    } else if (isNaN(parseInt(amount))) {
        return `Параметр 'общая стоимость' содержит неправильное значение '${amount}'`;
    }

    if (typeof percent === "string") {
       percent = parseInt(percent);
    } 
    if (typeof contribution === "string") {
       contribution = parseInt(contribution);
    } 
    if (typeof amount === "string") {
       amount = parseInt(amount);
    }

    let loanBody = amount - contribution;
    let interest = percent / 100 / 12;
    let loanTerm;
    
    if (date.getMonth() < new Date().getMonth()) {
        loanTerm = (12 + (date.getMonth() - new Date().getMonth()) + (date.getFullYear() - new Date().getFullYear() - 1) * 12);
    } else {
        loanTerm = ((date.getMonth() - new Date().getMonth()) + (date.getFullYear() - new Date().getFullYear()) * 12);
    }

    let payment = loanBody * (interest + interest / ((Math.pow(1 + interest, loanTerm)) - 1));
    let totalAmount = parseFloat((payment * loanTerm).toFixed(2));
    console.log(totalAmount);

    return totalAmount;
}


//Задание 2

function getGreeting(name) {
    if (!name) {
    	name = "Аноним";
    }

    let greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(greeting);

    return greeting;
}
