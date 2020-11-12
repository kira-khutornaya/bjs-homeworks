"use strict";

String.prototype.isPalindrome = function() {
    let prepped = this.toLowerCase().split(' ').join('');
    if (prepped === prepped.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

//console.log("А роза упала на лапу Азора".isPalindrome());

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;
    for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    const average = sum / marks.length;
    const roundedAverage = Math.round(average);

    return roundedAverage;
}

function checkBirthday(dateOfBirthday) {
    const now = Date.now();
    const birthday = +new Date(dateOfBirthday);
    const diff = now - birthday;
    const age = diff / 3.15576e10; // среднее количество миллисекунд в году

    if (age >= 18) {
        return true;
    } else {
        return false;    	
    }
}
