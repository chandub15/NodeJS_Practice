var async = require('async');
var workToBeDone = [];
var printNumberLater = function (i) {
    return function (callback) {
        setTimeout(function () {
            console.log(i);
            callback();
        }, 100);
    };
};

for (var i = 0; i < 100; i++) {
    workToBeDone.push(printNumberLater(i));
}

async.parallel(workToBeDone, function () {
    console.log('this still gets printed last');
});
