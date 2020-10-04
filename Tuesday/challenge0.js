const obj = { a: 1, b: true, c: "hello", d: "abcde" }
/*
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
*/

function printKeyValuePairs(obj){
    for (const [key, value]of Object.entries(obj)){
        console.log(`${key}: ${value}`)

    }    
}
obj.e=[1,2,3]
printKeyValuePairs(obj)
delete obj.e
printKeyValuePairs(obj)


function setValueDynamically(obj, key, val) {
    obj[key] = val;
  }
  setValueDynamically(obj, "c", "HELLO");

  setValueDynamically(obj,"a","01010")
  printKeyValuePairs(obj)