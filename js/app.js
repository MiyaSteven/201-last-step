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
    }
    this.render = function(domReference) {
        domReference.src = this.picture;
    }
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
    var banana = new Product('Banana', './images/banana.jpg');
    var bathroom = new Product('Bathroom', './images/bathroom.jpg');
    var boots = new Product('Boots', './images/boots.jpg');
    var breakfast = new Product('Breakfast', './images/breakfast.jpg');
    var bubblegum = new Product('Bubblegum', './images/bubblegum.jpg');
    var chair = new Product('Chair', './images/chair.jpg');
    var cthulhu = new Product('Cthulhu', './images/cthulhu.jpg');
    var dogDuck = new Product('Dog-duck', './images/dog-duck.jpg');
    var dragon = new Product('Dragon', './images/dragon.jpg');
    var pen = new Product('Pen', './images/pen.jpg');
    var petSweep = new Product('Pet-sweep', './images/pet-sweep.jpg');
    var scissors = new Product('Scissors', './images/scissors.jpg');
    var shark = new Product('Shark', './images/shark.jpg');
    var sweep = new Product('Sweep', './images/sweep.png');
    var tauntaum = new Product('Tauntaun', './images/tauntaun.jpg');
    var unicorn = new Product('Unicorn', './images/unicorn.jpg');
    var usb = new Product('USB', './images/usb.gif');
    var waterCan = new Product('Water-can', './images/water-can.jpg');
    var wineGlass = new Product('Wine-glass', './images/wine-glass.jpg');
} else {
    var jsonData = localStorage.getItem(PRODUCT_DATA);
    var data = JSON.parse(jsonData);
    
    for (var i = 0; i < data.length; i++) {
        var newProduct = new Product('', '');
        newProduct.loadData(data[i]);
    }
};

function getRandomProductIndex() {
    return Math.floor(Math.random() * (productStorage.length));
};

function selectTwoProdAndRndr() {
    randomProducts = [];
    while(randomProducts.length < 2) {
        var nextRandomValue = getRandomProductIndex();
        if(!randomProducts.includes(nextRandomValue)) {
            randomProducts.push(nextRandomValue);
        }
    }
    var placeholder1 = document.getElementById('placeholder-1');
    var placeholder2 = document.getElementById('placeholder-2');
    productStorage[randomProducts[0]].render(placeholder1);
    productStorage[randomProducts[1]].render(placeholder2);
};

function createProductChart() {
    var nameArray = [];
    var clickArray = [];

    for(var i = 0; i < productStorage.length; i++) {
        nameArray.push(productStorage[i].name);
        clickArray.push(productStorage[i].timesClicked);
    }
    var context = document.getElementById('chart').getContext('2d');
    var productChart = new Chart (context, {
        type:'bar',
        data: {
            labels:nameArray,
            datasets: [
                {
                    label:'product votes',
                    data: clickArray,
                    backgroundColor: 'rgb(255,99,132)',
                    borderColor: 'rgb(255, 99, 132)',
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        }
                    },
                ],
            }
        },
    })
};

function clickManager(event) {
    clickCounter++;
    if(clickCounter < MAX_CLICK_COUNTER) {
        var productIndex;
        if (event.target.id === 'placeholder-1') {
            productIndex = 0;
        } else if (event.target.id === 'placeholder-2') {
            productIndex = 1;
        } else {
            alert('Please click on an image');
        }
        var clickedProduct = productStorage[randomProducts[productIndex]];
        clickedProduct.markClick();
        selectTwoProdAndRndr();
    } else {
        saveProdDataToLocalStorage();
        createProductChart();
    }
}

function saveProdDataToLocalStorage() {
    var jsonData = JSON.stringify(productStorage);
    localStorage.setItem(PRODUCT_DATA, jsonData);
}

selectTwoProdAndRndr();

var placeholder1 = document.getElementById('placeholder-1');
var placeholder2 = document.getElementById('placeholder-2');
placeholder1.addEventListener('click', clickManager);
placeholder2.addEventListener('click', clickManager);

