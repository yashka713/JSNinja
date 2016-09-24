"use strict";
/* создайте объект - корзину товаров, позволяющую хранить массив товаров. доступ к массиву должен быть только через
 методы getProduct([индекс массива]) и addProduct([товар]). */

/* напишите конструктор (класс) товара с фабричными методами создания пустого товара и из данных */

/* напишите внутренний метод корзины валидирующий товары. у них обязаны быть непустые свойства наименование, цена.
 и сделайте валидацию товаров при добавлении */

/* напишите метод getProductCount([наименование товара]), возвращающий кол-во товара в корзине */

/* создайте метод получения скидки по товару getProductDiscount([наименование товара]). условия скидки - если кол-во
 этого товара в корзине больше чем 3 то скидка 5%, а если больше 5 то 10%. если в функцию не было передано наименование
 товара, то она должна возвращать общую скидку товаров в корзине. */

/* напишите метод получения цены товаров с учетом скидки getProductPrice([наименование товара])*/

/*✅ напишите метод получения суммы по выбранному товару (цена * кол-во) с учетом скидки товара
 getProductSum([наименование товара]), если наименование товара не было передано, то возвращать общую сумму корзины */

var Cart = function () {
    var products = [];

    this.addProducts = function (product) {
        if (!validateProduct(product)) {
            console.error('wrong product!');
        }
        var item = getProductByName(product.name);
        if (item) {
            item.count++;
        } else {
            products.push({obj: product, count: 1});
        }
    };

    this.getProduct = function (index) {
        return products[index].obj;
    };

    this.getProductDiscount = function (productName) {
        if (productName) {
            var item = getProductByName(productName);
            return getDiscount(item);
        } else {
            var fullSum = 0;
            for (var i = 0; i < products.length; i++) {
                fullSum += getDiscount(products[i]);
            }
            return fullSum
        }
    };

    this.getProductPrice = function (productName) {
        var item = getProductByName(productName),
            discount = getDiscount(item) / item.count;
        return item.obj.price - discount;
    };

    this.getProductSum = function (productName) {
        if (productName) {
            var item = getProductByName(productName);
            return this.getProductPrice(productName) * item.count;
        }else{
            var fullSum = 0;
            for (var i = 0; i < products.length; i++) {
                fullSum += this.getProductPrice(products[i].obj.name) * products[i].count;
            }
            return fullSum
        }
    };

    function getDiscount(item) {
        var count = item.count;
        if (count > 5) {
            return item.obj.price * 10 / 100 * count;
        } else if (count > 3) {
            return item.obj.price * 5 / 100 * count;
        } else {
            return 0;
        }
    }

    function validateProduct(product) {
        return product.name != undefined && product.price != undefined;
    }

    function getProductByName(productName) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].obj.name == productName) {
                return products[i];
            }
        }
    }
};
function Product() {}
Product.createEmpty = function () {
    var product = new Product;
    product.price = 100;
    product.name = 'Empty';
    return product;
};
Product.createFromData = function (data) {
    var product = new Product;
    product.price = data.price;
    product.name = data.name;
    return product;
};
var cart = new Cart;
cart.addProducts(Product.createEmpty());
cart.addProducts(Product.createEmpty());
cart.addProducts(Product.createEmpty());
cart.addProducts(Product.createEmpty());
cart.addProducts(Product.createFromData({name: "TV", price: 800}));
cart.addProducts(Product.createFromData({name: "TV", price: 800}));
cart.addProducts(Product.createFromData({name: "phone", price: 300}));
cart.addProducts(Product.createFromData({name: "phone", price: 300}));
cart.addProducts(Product.createFromData({name: "phone", price: 300}));
cart.addProducts(Product.createFromData({name: "phone", price: 300}));
cart.addProducts(Product.createFromData({name: "phone", price: 300}));
cart.addProducts(Product.createFromData({name: "phone", price: 300}));

//alert(cart.getProuctDiscount());
alert(cart.getProductPrice('phone'));