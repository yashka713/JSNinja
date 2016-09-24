/**
 * Created by Ярик on 03.09.2016.
 */
"use strict";
var obj = {
    name: 'Object',
    age: 1
};
var arrAuto = ['BMW', 'Mercedes', 'Volvo', 'ZAZ', 'Ford', 'Ferrari', 'Opel', 'VW'],
    arrType = ['string', true, 1, undefined, obj],
    arrUnSort = [1, 3, 5, 6, 8, 4, 2, 9, 7],
    arrSort = [];

/* Создайте цикл который будет выводить в консоль все значения массива (for и while).*/
// for
for (var i = 0; i < arrAuto.length; i++) {
    console.log(arrAuto[i]);
}
//while
var j = 0;
while (j < arrAuto.length) {
    console.log(arrAuto[j]);
    j++;
}

/* Создайте массив со значениями разных типов.
 Создайте цикл который будет выводить в консоль тип элемента массива (реализуйте проверку типов через if и
 через switch). */
// if
for (var p = 0; p < arrType.length; p++) {
    if (typeof(arrType[p]) == 'string') {
        console.log(typeof(arrType[p]));
    }
    if (typeof(arrType[p]) == 'boolean') {
        console.log(typeof(arrType[p]));
    }
    if (typeof(arrType[p]) == 'number') {
        console.log(typeof(arrType[p]));
    }
    if (typeof(arrType[p]) == 'undefined') {
        console.log(typeof(arrType[p]));
    }
    if (typeof(arrType[p]) == 'object') {
        console.log(typeof(arrType[p]));
    }
}
//case
for (var l = 0; l < arrType.length; l++) {
    switch(typeof(arrType[l])){
        case 'string': console.log(typeof(arrType[l])); break;
        case 'boolean': console.log(typeof(arrType[l])); break;
        case 'number': console.log(typeof(arrType[l])); break;
        case 'undefined': console.log(typeof(arrType[l])); break;
        case 'object': console.log(typeof(arrType[l])); break;
    }
}

/* Опираясь на пройденный материал создайте скрипт в котором будет объявлен массив чисел не по порядку и пустой массив.
 Реализуйте сортировку первого массива по возрастанию с записью значений в пустой массив по порядку. */

function sort(arrToSort) {

    for (var min = 0; min < arrToSort.length-1; min++) {
        var least = min;
        for(var j = min + 1; j <arrToSort.length; j++ ){
            if(arrToSort[j]<arrToSort[least]){
                least = j;
            }
        }
        var tmp = arrToSort[min];
        arrToSort[min] = arrToSort[least];
        arrToSort[least] = tmp;
    }
    return arrToSort;
}

console.log(arrUnSort);
arrSort = sort(arrUnSort);
console.log(arrSort);