var a="chandu"
var obj = {
    doSomething: function () {
        this.a = "bob";
        //func belongs to window
        function doAnotherThing() {
            console.log("Name2: " + this.a);//will take global value --> window.a="chandu"
        };
        console.log("Name1: " + this.a);
        doAnotherThing();
    }
};
//What does this print?
obj.doSomething();


// a="chandu" assigns to window
//var a ="kdk" is part of window but not global