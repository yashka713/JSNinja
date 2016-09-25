"use strict";
var arrProducts = [];
/* ✅ создать классы для групп товаров (одежда, электроника, продукты) унаследованные от класса Product со
 свойствами по своему усмотрению */
var Clothes = function (size, color, sex, name, price) {
    this.size = size || 'without size';
    this.color = color || 'stock';
    this.sex = sex || 'unisex';
    Product.call(this, name, price);
    arrProducts.push(this);
};

var Electronics = function (type, model, name, price) {
    this.type = type || 'used everywhere';
    this.model = model || 'basic';
    Product.call(this, name, price);
    arrProducts.push(this);
};

var Food = function (expirationDate, type, name, price) {
    this.expirationDate = expirationDate || "week";
    this.type = type || 'type is indefined';
    Product.call(this, name, price);
    if (validateProduct(this)) {arrProducts.push(this)}
};
/* ✅ решить какие свойства товаров можно вынести в родительский класс и реализовать это. */

var Product = function (name, price) {
    this.name = name;
    this.price = price;
};

// Унаследовать
Food.prototype = Object.create(Product.prototype);
Electronics.prototype = Object.create(Product.prototype);
Clothes.prototype = Object.create(Product.prototype);
// Желательно и constructor сохранить
Food.prototype.constructor = Food;
Electronics.prototype.constructor = Electronics;
Clothes.prototype.constructor = Clothes;

/* ✅ написать методы для вывода наименования товара в формате "Товар: [наименование], цена: [цена]"*/

var getData = function (name) {
    for (var i = 0; i , arrProducts.length; i++) {
        if (arrProducts[i].name == name) {
            return console.log("Товар: " + arrProducts[i].name + ', цена: ' + arrProducts[i].price);
        }
    }
    return console.log('Такого товара нет в списке!');
};

/* ✅ написать методы для валидации всех свойств товаров */

var validateProduct = function (product){
  for(var key in product){
      if (key==undefined || product[key]==undefined){
          console.error('not valid!');
          return false;
      }
  }
    return true;
};

/* ✅ написать методы для вывода всех свойств товара в виде html таблицы (представьте что пишете для вывода
 на страницу товара) */



/* ✅ напишите еще 2 класса наследника от электроники и проверьте как работают унаследованные методы в новых классах.
 если работают некорректно то переписать методы так, чтобы работали правильно при создании новых классов наследников.*/

var milk = new Food('3 day', 'mlik', 20);
//var milk = new Food('3 day', 'mlik', 'smile', 20);
//var shirt = new Clothes('L', 'black', 'men', 'sport', 120);
//var tv = new Electronics('big', "32'", 'LG', 20);
console.log(arrProducts);
//getData('LG');