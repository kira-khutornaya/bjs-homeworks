"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error("Невозможно идентифицировать будильник. Параметр ID не передан.");
        }

        if (this.alarmCollection.some(item => id === item.id)) {
            return console.error("Будильник с указанным ID уже существует!");
        }

        this.alarmCollection.push({
            id,
            time,
            callback
        });
    }

    removeClock(id) {
        let lengthOfAlarmCollection = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id != id);
        return lengthOfAlarmCollection != this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().substring(0, 5);
    }


    start() { 
        const now = this.getCurrentFormattedTime;
        let checkClock = function(alarm) {
            if (alarm.time === now()) {
                return alarm.callback();
            }
        }

        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(item => console.log(`Будильник ${item.id} установлен на ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log("Пора вставать!"), 1);
	
    phoneAlarm.addClock(new Date(Date.now() + 60000).toTimeString().substring(0, 5), () => {
        console.log("Вставай уже!");
        phoneAlarm.removeClock(2);
    }, 2);

    try {
        phoneAlarm.addClock(new Date(Date.now() + 60000).toTimeString().substring(0, 5), () => console.log("Иди умываться!"));
    } catch(error) {
        console.log(error);
    }

    phoneAlarm.addClock(new Date(Date.now() + 120000).toTimeString().substring(0, 5), () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.stop();
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.addClock(new Date(Date.now() + 180000).toTimeString().substring(0, 5), () => {
        console.log("Уже проспал!");
    }, 3);

    phoneAlarm.printAlarms();
    phoneAlarm.start();
}

testCase();

// Результаты тестирования кода

/* Error: Невозможно идентифицировать будильник. Параметр ID не передан.
    at AlarmClock.addClock (task.js:11)
    at testCase (task.js:78)
    at task.js:98

task.js:15 Будильник с указанным ID уже существует!
addClock @ task.js:15

task.js:57 Печать будильников в количестве: 3
task.js:58 Будильник 1 установлен на 09:25
task.js:58 Будильник 2 установлен на 09:26
task.js:58 Будильник 3 установлен на 09:27
task.js:70 Пора вставать!
task.js:73 Вставай уже!
task.js:84 Вставай, а то проспишь!
task.js:57 Печать будильников в количестве: 0
*/
