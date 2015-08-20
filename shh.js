var hush = require('./hush');
var animation = require('ascii-animation');
var clear = '\033[2J';

var shh = function(condition, callback){
    animation.animate(hush, condition, callback).bold();
    animation.secondsPerFrame(0.1);
};

module.exports = shh;
