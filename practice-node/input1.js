var fs = require('fs');

var commands = {
    'pwd': function () {
        console.log(process.cwd());
    },
    'exit': function () {
        process.exit();
    },
    'ls': function (args) {
        fs.readdir(args[0] || process.cwd(), function (err, entries) {
            entries.forEach(function (e) {
                console.log(e);
            });
        });
    },
    'sum': function(args){
        console.log("sum is "+(Number(args[0])+Number(args[1])));
    }
};
process.stdin.on('data', function (input) {
    var matches = input.toString().match(/(\w+)(.*)/);
    var command = matches[1].toLowerCase();
    var args = matches[2].trim().split(/\s+/);

    // commands[command](args); 
});

process.on('exit', function () {
    console.log('3 times now for k=3');
    // console.log(process.versions);
})