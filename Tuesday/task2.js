/*
Implement a function: myFilter(array, callback)that takes an array as the first argument, 
and a callback as the second and returns a new (filtered) array according to the code 
provided in the callback (this method should provide the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.
*/

//console.log(names.filter(findWithn));


let names = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik'];


function myFilter(arr, callback){
    console.log("This function will return an array with names that contain 'n':")
let newArr=[];
    for (let i =0; i<arr.length; i++) {
        if (callback(arr[i]) !== undefined){
            newArr.push(callback(arr[i]))}
        }

        return newArr
}
function findWithn (name){
    for (let i = 0; i < name.length; i++){
        if (name.charAt(i)==='n'){
            return name
        }
    }
}
let result = myFilter(names,findWithn)
console.log(result)
console.log(names.filter(findWithn))

/*
 Implement a function: myMap(array, callback)that, provided an array and a callback, 
 provides the same functionality as calling the existing map method on an array.
*/
function reverseChar(name){
    let newName="";
 let a;
     for (let i = 0; i < name.length; i++){  
          a = name.charAt(name.length-1-i) 
     newName+=a
     }
         return newName        
 }

 function myMap(arr,callback){
     let newArr=[]
     for (let i =0; i<arr.length; i++) {        
            newArr.push(callback(arr[i]))
        }
        return newArr
 }

 let mapped= myMap(names,reverseChar)
 console.log(mapped)
 console.log(names.map(n=>reverseChar(n)))

