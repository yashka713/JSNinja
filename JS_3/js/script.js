/**
 * Created by Ярик on 03.09.2016.
 */
"use strict";
/* создайте объект и напишите цикл вывода всех его свойств в виде "ключ: значение"  */
var obj = {
    name: "Jon",
    age: 26,
    hobby: false
};
for (var param in obj) {
    console.log(param + " : " + obj[param]);
}

/* напишите функцию конкатенации 2х строк с обязательным приведением к строке
 (concat(2,3) должно выводить "23", concat(false, 9) -> "false9" итд.) */

function concatWithoutTyping(a, b) {
    return '' + a + b;
}
function concatWithTyping(a, b) {
    return a.toString() + b.toString();
}
console.log(concatWithTyping(2, 3));
console.log(concatWithoutTyping(false, 9));

/* напишите функцию вычисления площади прямоугольника по длине 2х сторон так, чтобы если
 передан 1 аргумент возвращалась площадь квадрата */

function square(a, b) {
    b = b || a;
    return a * b;
}
console.log(square(2, 3));
console.log(square(3));

/* напишите функцию, получающую произвольное количество аргументов и проверяющую есть ли среди них отрицательные числа.
 Если есть, то возвращать false, иначе true. Если было передано не число, то возвращать undefined  */
function notNegative() {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            return false;
        }
        if (typeof(arguments[i]) != "number") {
            return undefined;
        }
    }
    return true;
}
console.log(notNegative(1, 2, 3, 5, 4, 7));
console.log(notNegative(1, -2, 3, 5, 4, 7));
console.log(notNegative(1, 2, 3, 5, '4', 7));

/* напишите функцию, получающую произвольное количество аргументов - массивов и объединяющую их в один массив.
 В функции должна быть проверка на тип аргумента и если это не массив, то переходить с следующему аргументу */

function sumArray() {
    var res = [];
    for (var i in arguments) {
        if (Array.isArray(arguments[i])) {
            res = res.concat(arguments[i]);
        }
    }
    return res;
}

var arr1 = [1, 2, 3, 8, 'p'], arr2 = ['d', 'f', 'e', 1], a = 'string';

console.log(sumArray(arr1, arr2, a));

/* напишите функцию возведения в степень, не используя рекурсию */

function pow(a, b) {
    var res = 1;
    if (b < 0) return false;
    if (b == 0) return 1;
    for (var i = 0; i < b; i++) {
        res = res * a;
    }
    return res;
}
console.log(pow(3, -1));

/* напишите рекурсивную функцию суммирующую все элементы переданного массива */
var arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = 0;
function recSumArray(arr) {
    if (arr[arr.length] == arr[0]) {
        return res;
    } else {
        res += arr[arr.length - 1];
        arr.pop();
        return recSumArray(arr);
    }
}
console.log(recSumArray(arrNum));

/* напишите функцию вывода всех свойств объекта в виде "ключ: значение" с учетом вложенных объектов */

var user = {
    name: 'andrey',
    login: '111',
    password: '222',
    address: {
        city: 'Krasnodar',
        house: {
            flat: 99,
            floor: 4
        }
    }
};

function reviewProperty(obj) {
    for (var key in obj) {
        if (obj[key] instanceof Object) {
            return reviewProperty(obj[key])
        }
        console.log(key + ' : ' + obj[key]);
    }
}

reviewProperty(user);

/*  напишите рекурсивную функцию вывода чисел фибоначчи в консоль.
 Aругментом функции должно быть значение сколько чисел выводить */

function FibbonachiNum(n) {
    n = +n;
    if (n < 0) return false;
    if (n == 0) return 0;
    if (n == 1) return 1;
    return FibbonachiNum(n - 1) + FibbonachiNum(n - 2);
}
console.log(FibbonachiNum(2));