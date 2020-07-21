var name = 'Sheuly';
var code = 133;
var age = 22;

console.log(name);


if(age > 23){
    console.log("Senior crush");
}else{
    console.log("Junior crush");
};


if(code == 143 && age > 23){
    console.log("I love you but she is senior");
}else if(code == 143 || age > 23){
    console.log("I love you and she is my junior");
}
else{
    console.log("I don't love him");
}



var num = 1;
while (num <=10) {
    console.log("I love you ", num);
    num++
}




var names = ["Hasan", "Parvez", "Mamun", "Rakib", "Najmul", "Nazirul", "Sumon", "Taium"];
var i =0;
while(i<names.length){
    const element = names[i];
    console.log(element);
    i++
}

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element , " is my friend");
}


names[0] = "Sakib";
console.log(names);
names[names.length-1] = "Foysal";
console.log(names);
names.push("Kolin");
console.log(names);
names.pop();
console.log(names);
names.unshift("Sajjad");
console.log(names);
names.shift();
console.log(names);