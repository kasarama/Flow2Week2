/*
4. reduce
reduce() is used to reduce an array into a single item (a number, string, object, etc). This is a very common problem in all languages, for specific problems, so common, that the Array actually has a specific “reduce” method called join,  which can reduce an array into a string separated by whatever we choose.
var all= ["Hassan", "Peter", "Carla", "Boline"];
a) Use join to create a single string from all, like this:  Hassan#Peter#Carla#Boline
b) Given this array: var numbers = [2, 3, 67, 33]; 
Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers
c)  Given this array:
var members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22}]

Create a reducer callback that, using the Array’s  reduce() method,  will return the average age of all members 
(25 for the provided array).
Hint: The reduce callback takes two additional arguments as sketched below:
var reducer = function(accumulator, member,index,arr ){
Index is the current index for which the value (member) are passed in, and arr is the array.
Use this to return different values from your reduce-function,  according to whether you have reached the last element or not.
d) Extra Imagine you were to create a system that could count votes for the presidential election in the USA.
Given this array of votes: 
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];
Create a reduce function that will return a single object like {Clinton: 3, Trump: 4, None: 1 }
Hints: You can check whether a property exists in a Javascript object, and add new properties as sketched below:
const a = {}
if (a["clinton"])
 console.log("I Will Not Print")
a["clinton"] = 1;
console.log("You will see me")
console.log("Value of clinton "+ a["clinton"]);


*/
console.log("")
let names = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik'];

console.log(names.join("#"))

let numbers = [2, 3, 67, 33]
console.log(numbers.reduce(function(x,y){return x+y}))

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]

    var reducer = function(accumulator, member,index,arr ){
        let sum=0;
for (let i = 0; i<arr.length;i++){
sum+=arr[i].age
}
return sum/arr.length
    }

console.log(members.reduce(reducer))