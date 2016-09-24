/**
 * Created by Ярик on 03.09.2016.
 */
'use strict';
var arrUnSort = [1, 3, 5, 6, 8, 4, 2, 9, 7];
function sortBubble(data) {
    var tmp;
    for (var i = 0; i < data.length - 1; i++) {
        for (var j = 0; j < data.length - 1; j++) {
            if (data[j] > data[j + 1]) {
                tmp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = tmp;
            }
        }
    }
    return data;
}
sortBubble(arrUnSort);
console.log(arrUnSort);
