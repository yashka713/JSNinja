"use strict";

/* перепишите функцию добавления товаров в корзину так, чтобы после добавления товара происходило сохранение всего
 массива товаров в Local Storage в переменную cart. */

var Cart = function () {
    var products = [];

    this.addProducts = function (product) {
        if (!validateProduct(product)) {
            console.error('wrong product!');
        }
        var item = getProductByName(product.name);
        if (item) {
            item.count++;
            saveToLS (products);
        } else {
            products.push({obj: product, count: 1});
            saveToLS (products);
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
        } else {
            var fullSum = 0;
            for (var i = 0; i < products.length; i++) {
                fullSum += this.getProductPrice(products[i].obj.name) * products[i].count;
            }
            return fullSum
        }
    };
    function saveToLS (data){
        var productsJSON;
        productsJSON = JSON.stringify(data);
        localStorage.setItem('cart', productsJSON);
    }

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
function Product() {
}
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

alert(cart.getProductDiscount());
//alert(cart.getProductPrice('phone'));
//cart.getAllProducts();

//console.log(JSON.parse(localStorage.getItem('cart')));
