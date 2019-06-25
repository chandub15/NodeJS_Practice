var fs = require('fs');
var http = require('http');
var templateEngine = function (template, data) {
    var vars = template.match(/\{\w+\}/g);
    if (!vars) {
        return template;
    }
    var nonVars = template.split(/\{\w+\}/g);
    var output = '';
    for (var i = 0; i < nonVars.length; i++) {
        output += nonVars[i];
        if (i < vars.length) {
            var key = vars[i].replace(/[\{\}]/g, '');
            output += data[key]
        }
    }
    return output;
};
var server = http.createServer(function (req, res) {
    console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile('index.html', function (err, data) {
        if (!err) {
            res.write(templateEngine(data.toString(), {name:'chandu',node:'10.x.0',v8:'v8',url:'localhost:3000',time:'16:36'})); // use our template engine here
            res.end();
        }
    });
});
server.listen(3000);