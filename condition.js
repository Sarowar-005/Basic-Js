//there are two kind of condition


var name = "Sarowar";
var age = 17;
var job = false;


//simple single condition 
if (age > 18) {
    console.log("She is eighteen plus");
}
else{
    console.log("She is under eighteen");
}


//Multiple condition

if(age > 18 && job == true){
    console.log("best boy for Jarin");
}else if(age > 18 || job == true){
    console.log("Good boy for Jarin");
}else{
    console.log("He is not perfect for Jarin");
};