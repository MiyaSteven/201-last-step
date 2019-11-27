'use strict'

var productStorage = [];
var randomProducts = [];
var MAX_CLICK_COUNTER = 20;
var clickCounter = 0;
var PRODUCT_DATA = 'product_data';

function Product(name, picture) {
    this.name = name;
    this.picture = picture;
    this.timesClicked = 0;
    this.timesShown = 0;
    this.markClick = function () {
        this.timesClicked++;
    };
    this.render = function(domReference) {
        domReference.src = this.picture;
    };
    this.loadData = function (data) {
        this.timesClicked = data.timesClicked;
        this.timesShown = data.timesShown;
        this.name = data.name;
        this.picture = data.picture;
    }
    productStorage.push(this);
};

if (localStorage.getItem(PRODUCT_DATA) === null) {
    var bag = new Product('Bag', './images/bag.jpg');
    var banana = new Producct('Banana', './images/banana.jpg');
    var bathroom = new Product('Bathroom', './images/bathroom.jpg');
    var boots = new Product('Boots', './imgages/boots.jpg');
    var breakfast = new Product('Breakfast', './imgages/breakfast.jpg');
    var bubblegum = new Product('Bubblegum', './imgages/bubblegum.jpg');
    var chair = new Product('Chair', './imgages/chair.jpg');
    var cthulhu = new Product('Cthulhu', './imgages/cthulhu.jpg');
    var dogDuck = new Product('Dog-duck', './imgages/dog-duck.jpg');
    var dragon = new Product('Dragon', './imgages/dragon.jpg');
    var pen = new Product('Pen', './imgages/pen.jpg');
    var petSweep = new Product('Pet-sweep', './imgages/pet-sweep.jpg');
    var scissors = new Product('Scissors', './imgages/scissors.jpg');
    var shark = new Product('Shark', './imgages/shark.jpg');
    var sweep = new Product('Sweep', './imgages/sweep.png');
    var tauntaum = new Product('Tauntaun', './imgages/tauntaun.jpg');
    var unicorn = new Product('Unicorn', './imgages/unicorn.jpg');
    var usb = new Product('USB', './imgages/usb.gif');
    var waterCan = new Product('Water-can', './imgages/water-can.jpg');
    var wineGlass = new Product('Wine-glass', './imgages/wine-glass.jpg');
}