'use strict';

var Fruit = require('./fruit');

function Banana() {}
Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.constructor = Banana;


Banana.prototype.peel = function() {
  console.log('The yellow banana is being peeled');
};

module.exports = Banana;