/**
 * Created by Ярик on 01.10.2016.
 */
function Product(name, price, amount){
    this.name = name;
    this.price = price;
    this.amount = amount || 1;
}

Product.prototype.getPrice = function(){
    console.log('name: ' + this.name + " price: " + this.price);
    console.log('amount: ' + this.amount);
};

Product.prototype.validator = function(){
    if(!this.name){
        throw new Error('Enter the name of product');
    }

    if(!this.price){
        throw new Error('Enter the price of product');
    }
};

Product.prototype.createTable = function(){
    var startElem = document.getElementById('input');
    startElem.appendChild(document.createElement("tr"));
    for(var key in this){
        if(typeof this[key] !== 'function') {
            startElem.lastElementChild.appendChild(document.createElement("td")).innerHTML = (key + '- ' + this[key]);
        }
    }
};
function Clothes(name, price, amount, size){
    Product.apply(this, arguments);
    this.size = size;
    this.validator();
}

Clothes.prototype = Object.create(Product.prototype);
Clothes.prototype.validator = function (){
    Product.prototype.validator.apply(this, arguments);
    if(!this.size){
        throw new Error('Enter the size of product');
    }
};

Clothes.prototype.getSize = function (){
    console.log('size: ' + this.size);
};

function Electronics (name, price, amount, power, voltage){
    Product.apply(this, arguments);
    this.power = power;
    this.voltage = voltage;
}

Electronics.prototype = Object.create(Product.prototype);

Electronics.prototype.validator = function (){
    Product.prototype.validator.apply(this, arguments);
    if(!this.power){
        throw new Error('Enter the power of product');
    }
    if(!this.voltage){
        throw new Error('Enter the voltage of product');
    }
};

function Electric(name, price, amount, power, voltage, weight){
    Electronics.apply(this, arguments);
    this.weight = weight;
}

Electric.prototype = Object.create(Electronics.prototype);

Electric.prototype.getWeight = function(){
    console.log(this.weight);
};