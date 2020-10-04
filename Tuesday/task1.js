/*
a) Using the filter method:
Declare a JavaScript array and initialize it with some names (Hassan, Jan, Peter, Boline, Frederik etc.). 
Use the filter method to create a new array with only names that contains the letter ‘a’.

b) Using the map method:
Use the names-array created above, and, using its map method, create a new array with all the characters in each name reversed.

*/

let names = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik'];

//----------------task 1.a---------------//

function findWithn (name){
    for (let i = 0; i < name.length; i++){
        if (name.charAt(i)==='n'){
            return name
        }
    }
}

console.log(names.filter(findWithn));

//----------------task 1.b---------------//
function reverseChar(name){
   let newName="";
let a;
    for (let i = 0; i < name.length; i++){  
         a = name.charAt(name.length-1-i) 
    newName+=a
    }
        return newName        
}

let reverseNames = names.map(n=>reverseChar(n))
console.log(reverseNames)  

