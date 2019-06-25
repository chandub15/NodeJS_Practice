console.log("enter data");
var k = 0;
process.stdin.on('data', function (input) {
    console.log("one: " + input.toString());
    k++;
})

process.stdin.on('data', function (input) {
    console.log("two: " + input.toString());
    if (k == 3)
        process.exit();
})

process.on('exit',function(){
    console.log('3 times now for k=3');
    console.log(process.versions);
})