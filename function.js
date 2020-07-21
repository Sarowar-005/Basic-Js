// simple function........
function name(){
    console.log("Sarowar");
}
name();


//function with parameters............
function add(num1, num2){
    var total = num1 + num2;
    console.log(total);
}
add(10,20);

// There are two way to call function..........
// Console log inside function

function doubleIt(num){
    var result = num *2
    console.log(result);
}
doubleIt(50);

// Return result
function add(code1, code2){
    var result = code1 + code2;
    return result;
}
var a = add(50,100);
var b = add(100,200);
var c = add(300,400);
var sum = a+b+c;
console.log("A =", a, "B = ", b, "C = ", c);
console.log(sum);


//So this is all about of basic function