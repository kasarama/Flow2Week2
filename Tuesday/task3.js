/*
3) Getting really comfortable with filter and map
a) Given this array: var numbers = [1, 3, 5, 10, 11];
Use map + a sufficient callback to map numbers into this array:
var result = [4,8,15,21,11];
Hints: The map() callback can take me additional arguments, see here
b) Use map() to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
<nav>
  <a href=””>Hassan</a>
  <a href=””>Peter</a>
  <a href=””>Jan</a>
  <a href=””>Boline</a>
</nav>
c) Use map()+(join + ..) to create a string, representing a two column table, for the data given below:
var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

*/

//-----------------------task 3.a-------------------------------//
var numbers = [1, 3, 5, 10, 11]
 

let filteredNumbers = numbers.map(function(num, index,numbers) {
  if(index<numbers.length-1){
      return numbers[index]+numbers[index+1]
  }else {
      return numbers[index]+numbers[0]
  }
})
console.log(filteredNumbers)
console.log("\n\n")

//-------------------------task 3.b -----------------------------//
let names = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik'];

let navItems = names.map(name => `<a href ="">${name}</a>`).join("\n")
let navset="<nav>\n"+navItems+"\n</nav>";
console.log(navset)
console.log("\n\n")

//-------------------------task 3.c ----------------------------------//
var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

let table="<table>\n"+persons.map(person => `<tr>\n<td>${person.name}</td>\n<td>${person.phone}</td>\n</tr>`).join("\n")+"\n</table>"
console.log(table)
