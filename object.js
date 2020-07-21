var mobile = {brand:"Samsung", model:"A41", year: "2020"};
var mobile2 = {brand:"Realme", model:"Realme 5i", year:"2020"};

console.log(mobile);
console.log(mobile2);

//There are 3 way to access object property


var step1 = mobile.brand;
var step2 = mobile["brand"];
var mobileBrand = mobile["brand"]
var step3 = mobileBrand;

console.log(step1);
console.log(step2);
console.log(step3);



//There are tree ways to set property

mobile.brand = "Xaiomi";
console.log(mobile);

mobile["brand"] = "Appo";
console.log(mobile);


var updateBrand = "brand";
mobile[updateBrand] = "Lava"
console.log(mobile);