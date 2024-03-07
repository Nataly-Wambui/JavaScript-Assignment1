// Question 1
let word= "extravaganza"
console.log(word.substring(8,12))

// Question 2
const food= "The quick fox jumped over the lazy dog";
let stringToAdd= "eat";
let indexPosition= 4;
let newString= food.substring(0, indexPosition)+stringToAdd+food.substring(indexPosition);
console.log({newString});

// Question 3
const story= "The quick brown fox jumps over the lazy dog";
console.log((story.match(/the/)).length);
console.log((story.match(/brown/)).length);

//Question 4
let nameOne= "wonderful";
console.log(nameOne.toUpperCase());
let nameTwo= "amaizing";
let nameThree= "UndERneath";
console.log(nameTwo.toLowerCase(), nameThree.toLowerCase())
let nameFour= "A wonderful world"

//Question 5
const string1= "The pupils are reading in the library";
console.log(string1.search("are"));
const string2= "The child was sitting on the table before it fell";
console.log(string2.search("sitting"));