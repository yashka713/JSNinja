"use strict";
/*
 напишите функцию клонирования объектов, которая первым аргументом принимает объект - образец с которого будут
 делаться клоны, а вторым параметром необходимое кол-во клонов. второй параметр необязательный. если второй
 аргумент не передан или равен 1, функция должна возвращать объект-клон, если больше чем 1 то массив
 объектов-клонов
 */

 function createClone(obj, n) {
 n = n || 1;
 var arr = [];
 if (n > 1){
 for(var i = 0; i < n; i++){
 arr.push(clonObj(obj));
 }
 return arr
 }else{
 return clonObj(obj);
 }
 function clonObj (obj){
 var clon = {};
 for(var prop in obj){
 clon[prop] = obj[prop];
 }
 return clon;
 }
 }
 var user = {
 userName: 'Yarik',
 mail: "xx@xx.ru",
 password: "password"
 };
 console.log(createClone(user, 3));
 console.log(createClone(user));

/*
 напишите функцию которая принимает дату от пользователя (prompt) в формате 01.01.2001 и вычисляет сколько дней
 прошло/осталось до введенной даты. реализуйте проверку на валидность даты и в случае некорректной даты, функция
 должна повторно ее запрашивать. вывод функции - текст наподобии "до 01.01.2017 осталось 150 дней" или "с 01.01.2001
 прошло 2753 дней" во всплывающем окне (alert).
 */

var promptUserDate;
var start = false;
while (start == false) {
    if ((new Date(promptUserDate) == 'Invalid Date') || (promptUserDate == "undefined")) {
        start = false;
        promptUserDate = "" + prompt('Введите дату в формате dd.mm.yyyy');
    } else {
        start = true;
    }
}
dayCounter(promptUserDate);
function dayCounter (customDate){
    var userDate = new Date(dayShift(customDate));
    var currDate = new Date();

    var timeDifferenceInMilliseconds = currDate - userDate;
    var timeDifference = (timeDifferenceInMilliseconds / 1000) >> 0;
    timeDifference = (timeDifference / 60) >> 0;
    timeDifference = (timeDifference / 60) >> 0;
    timeDifference = (timeDifference / 24) >> 0;

    if (timeDifference > 0) {
        alert("С " + customDate + " прошло: " + timeDifference + " " + declension(timeDifference));
    } else if ((userDate.getMonth() == currDate.getMonth()) &&
        (userDate.getDate() == currDate.getDate()) &&
        (userDate.getFullYear() == currDate.getFullYear())) {
        alert("Введена сегодняшняя дата");
    } else {
        alert("до " + customDate + " осталось " + Math.abs(timeDifference - 1) + " " + declension(timeDifference - 1));
    }
    /* В нашем краю принято вводить в таком формате: dd.mm.yyyy, а в системе все считывется как mm.dd.yyyy */
    function dayShift(date) {
        var day = date.substring(0, 2);
        var month = date.substring(3, 5);
        var year = date.substring(6, 10);
        //console.log(date.length + " " + date[date.length - 1]);
        return month + "." + day + "." + year;
    }
    /* Cклонение слова "день" */
    function declension (day){
        var lastChar = 0;
        day = "" + day;
        lastChar = day.substring((day.length - 1));
        if (+lastChar == 1)return "день";
        if ((+lastChar > 1) && (+lastChar <=4)) return "дня";
        if ((+lastChar > 4) && (+lastChar <=9) || (+lastChar == 0)) return "дней";
    }
}

/*
 напишите модуль - математическую библиотеку, которая будет выполнять простейшие математические операции. доступ к
 функциям из глобального скрипта после подключения библиотеки - myMath.add(2, 3) myMath.multiply(5, 6)
 */

 (function(){
 var myMath = {
 add: function(a, b){
 a = a || 0;
 b = b || 0;
 return a + b;
 },
 multiply: function(a, b){
 a = a || 0;
 b = b || 0;
 return a * b;
 },
 subtraction: function(a, b){
 a = a || 0;
 b = b || 0;
 return a - b;
 },
 division: function(a, b){
 a = a || 0;
 b = b || 1;
 if (b == 0) return 0;
 return a / b;
 }
 };
 window.myMath = myMath;
 })();

 console.log(myMath.add(2, 3));
 console.log(myMath.division(9, 3));
 console.log(myMath.multiply(3));
 console.log(myMath.subtraction(5));
