var fs = require('fs');
console.log('Hello to NodeJs');

var commands = {
    'pwd': function () {
        console.log(process.cwd());
    },
    'exit': function () {
        process.exit();
    }, // <----------------------- Don't forget this comma!
    'ls': function (args) { // New property added here.
        fs.readdir(args[0] || process.cwd(), function (err, entries) {
            entries.forEach(function (e) {
                console.log(e);
            });
        });
    },
    'sum': function(args){
        var sum=0;
        if(args.length>2){
            // console.log(sum);
            for(i=0;i<args.length;i++){

                // console.log(typeof Number(args[0]));
                if(Number(args[i])){
                    // console.log(sum);
                    sum=sum+Number(args[i]);
                    
                }
            }
            console.log(sum);
        }
        // console.log("sum is "+(Number(args[0])+Number(args[1])));
    }


};
process.stdin.on('data', function (input) {
    var matches = input.toString().match(/(\w+)(.*)/);
    var command = matches[1].toLowerCase();
    var args = matches[2].trim().split(/\s+/);
    commands[command](args);
});

process.on('exit', function () {
    console.log("exited");
});