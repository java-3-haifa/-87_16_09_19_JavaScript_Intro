var a = 123;
var b = 32.5;
var str = 'str';
var bool = true;
var tmp = null;
var obj = {};
var arr = [];

/*
console.log(typeof a);
console.log(typeof b);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof tmp);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof x);*/

var myDiv = document.querySelector('#myId');
console.dir(myDiv);
myDiv.onclick = function(){
    myDiv.innerHTML = "Hello world";
    myDiv.style.color = 'red';
};

// myDiv.innerHTML = "Hello world";
// myDiv.style.color = 'red';

f1();

function f1() {
    console.log("Function f1");
}

var print = function (str) {
    console.log(str);
}

print("Hello world");

printObject(myDiv.style);
function printObject(obj) {
    var res = '<ul>';
    for(var i in obj){
        res += '<li><b>' + i + '</b>: ' + obj[i] + '</li>';
    }

    res += '</ul>';
    document.write(res);
}
