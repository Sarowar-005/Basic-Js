var friendsList = ["Parvez", "Hasan", "Sumon", "Mamun", "Taium", "Nazirul"];
console.log(friendsList); //To show whole array

//To find array
console.log(friendsList[0]); //First one
console.log(friendsList[5]); // Last one
console.log(friendsList[friendsList.length -1]); // Smart way to find last element of array


friendsList[0] = "Kolin" // To replace array
console.log(friendsList);
friendsList[friendsList.length -1] = "Najmul"; // replace last element of array
console.log(friendsList);

//To find array position
var position = friendsList.indexOf("Kolin");
console.log(position);

// If element is not in array
var position = friendsList.indexOf("Lhapru");
console.log(position);

//To add last element of array
friendsList.push("Khairul", "Usai", "Lhapru")
console.log(friendsList);


// To delete last element of array
friendsList.pop();
console.log(friendsList);


//To add first element of array
friendsList.unshift("Anwar","Shah-Alam");
console.log(friendsList);


// To delete first element of array
friendsList.shift();
console.log(friendsList);



//This is all about of Basic array in Javascript......