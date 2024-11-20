// Part 1: String Methods

//-----------------------
// 1.Convert to Uppercase:

let pet = "golden retriever";
let result=pet.toUpperCase();//Bu üsul vasitesile biz verilmis deyisene menimsetdiyimiz stringin elementini boyuk herflere ceviririk.
console.log(result);
// -----------------------

// 2. Find the Length of a String

let question = "Can you solve this problem?";
let result =question.length//Bu usul vasitesile biz verilmis stringin uzunlugunu tapa bilerik
console.log(result);
//----------------------


// 3. Replace a Word in a String

let activity = "This game is boring";
let result = activity.replace("boring","exciting")//bu usul vasitesile biz verilmis stringin daxilindeki istenilen elementi ve ya butun elementleri basqa elementleevez ede bilerik.
console.log(result);
//----------------------


// 4. Extract a Substring
// Extract the word "Adventure" from the string headline .

let headline = "Choose Your Adventure!";
let result1 =headline.split(" ")[2];//bu usul; vasitesile biz verilmis stringi arraya ceviririk ve arrayin 2 ci indeksini extract edirik
result2 =result1.replace("!"," ");//bu bendde ise biz sozun sonunda olan ! isaresini bosluq ile evez etdik.
console.log(result2);
//----------------------




// Part 2: Array Methods
// ----------------------

// 1. Add an Item to an Array
// Add the dessert "Cake" to the desserts array.

let desserts = ["Ice Cream", "Pie", "Pudding"];
desserts.push("Cake");//bu usul vasitesile biz verilmis arrayin daxilinde sonuna "Cake" sozunu elave edirik.
console.log(desserts);
//----------------------


// 2. Check if an Array Includes an Item
// a. Check if the cities array includes "Paris".
// b. Given: let cities = ["London", "New York", "Tokyo"];
// Bonus Task
// c. Expected Result: false


let cities = ["London", "New York", "Tokyo"];
if(cities.includes("Paris")){//biz burda sert operatorundan istifade ederek yoxluyuruqki eyer "Paris" verilmis arrayin daxilinde varsa bize true versin eks halda bize false versin.
    console.log(true);
    
}else{
    console.log(false);
    
}
//----------------------

// 3. Combine Two Arrays
// a. Combine the cars array with the trucks array.
// b. Given:
// c. let cars = ["Sedan", "Coupe"];
// d. let trucks = ["Pickup", "SUV"];
// e. Expected Result: ["Sedan", "Coupe", "Pickup", "SUV"]

let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];
let result = cars.concat(trucks);//bu usul vasitesile biz verilmis iki arrayi birlesdirib bir array daxilinde yaza bilirik.
console.log(result);

//----------------------
// 4. Find the Index of an Item in an Array
// a. Find the index of "Pie" in the desserts array.
// b. Given: let desserts = ["Ice Cream", "Pie", "Pudding", "Cake"];
// c. Expected Result: 1


let desserts = ["Ice Cream", "Pie", "Pudding", "Cake"];
let result = desserts.indexOf("Pie");//Bu usulda biz verilmis elementin  arraydaki indeks nomresini tapa bilirik,eyer elemet daxil deyilse arraya o zaman bize -1 verecek.
console.log(result);

//----------------------
// Bonus Task
// Reverse a String
// •
// Reverse the string "Technology" using a combination of string and array methods. •
// Given: let word = "Technology"; •
// Expected Result: "ygolonhceT" 

let word = "Technology";

let word2 = word.split("")//bu usulda biz birinci verilmis stringi arraya ceviririk
let result = word2.reverse();//bu usulda ise biz aldigimiz arrayin daxilindeki elementi reverse edib ters ceviririk
let result2 = result.join("")//bu usulda ise biz yeniden  arrayimizi stringe ceviririk
console.log(result2);
















