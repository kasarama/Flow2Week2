import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"


/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function makeListItems(){
const jokes = jokeFacade.getJokes();
let jokeList = jokes.map(joke => `<li>${joke}</li>`)
let jokeListAsString= jokeList.join("\n")
document.getElementById("jokes").innerHTML = jokeListAsString
}
makeListItems();




/* JS For Exercise-2 below */

function findJokeByID(id){
  const joke = jokeFacade.getJokeById(id)
  let resultString=`Sorry mate, there is no joke with id ${id}`
  console.log("value"+document.getElementById("jokeId").value)
  if (joke!==undefined){
    resultString=joke
  }
  document.getElementById("chosenJoke").innerHTML=resultString
  document.getElementById("value").innerHTML=`Chosen id: ${id}`
}

   
let butById=document.getElementById("findJokeById")
butById.addEventListener("click", function (event) {
    event.preventDefault();
   findJokeByID(document.getElementById("jokeId").value)
})

/* JS For Exercise-3 below */

function addNewJoke (joke){
  let jokes = jokeFacade.getJokes()
  jokes.push(joke)
  document.getElementById("ex3div").innerHTML=jokeFacade.getJokeById(jokes.length-1)
  document.getElementById("ex3p").innerHTML="joke added "
}

let butNewJoke=document.getElementById("addJoke")
butNewJoke.addEventListener("click",  function (event) {
  event.preventDefault();
  addNewJoke(document.getElementById("newJoke").value)
})

let butQuote=document.getElementById("findQuote")
butQuote.addEventListener("click", function(event){
event.preventDefault()

fetch("https://studypoints.info/jokes/api/jokes/period/hour")
.then(res => res.json()) //in flow1, just do it
.then(data => {
   
    console.log(data);
    let quote = data.joke


    document.getElementById("quote").innerHTML = quote;
})

})

/* JS For Exercise-4 below */

userFacade.getUsers()
.then(users => {
  const userRows = users.map(user => 
    `<tr>
      <td>${user.id}</td>
      <td>${user.age}</td>
      <td>${user.name}</td>       
      <td>${user.gender}</td>
      <td>${user.email}</td>
    </tr>`)
    const userRowsAsString= userRows.join("\n")
    document.getElementById("allUserRows").innerHTML=userRowsAsString

})





let butAddUser = document.getElementById("addUser")

butAddUser.addEventListener("click", function (event){
  event.preventDefault()
  const newUser = {
    age: document.getElementById("age").value,
    name: document.getElementById("name").value,
    gender : document.getElementById("gender").value,
    email: document.getElementById("email").value 
  }
  
  userFacade.addUser(newUser)
  .then(user  =>alert("New user added with id"+user.id))
  .catch( err => {
    if (err.status){
      err.fullError.then(e => console.log(e.msg))//send to innerHTML
    }
    else {
      console.log("Networ error")
    }
  } )

})

let buttFindUser= document.getElementById("findUserById")

buttFindUser.addEventListener("click", function(event) {
  event.preventDefault()
  const id = document.getElementById("idToFind").value
  userFacade.getUserById(id)
  .then(user => {  
     const found=
    `<tr>
    <td>${user.id}</td>
    <td>${user.age}</td>
    <td>${user.name}</td>       
    <td>${user.gender}</td>
    <td>${user.email}</td>
  </tr>`
 
console.log(user) 
  console.log(found)
  document.getElementById("foundUser").innerHTML=
  "<thead><tr><th>Id</th><th>Age</th><th>Name</th><th>Gender</th><th>Email </th>"+
            "</tr></thead><tbody>"+found+"<tbody>"

})
})

let buttEditUser=document.getElementById("editUser")

buttEditUser.addEventListener("click", function(event){
  event.preventDefault
  userFacade.editUser(document.getElementById("editId").value)
  .then(user => {
  user.age = document.getElementById("editAge").value
  user.gender = document.getElementById("editGender").value
  user.email = document.getElementById("editEmail").value
  user.name = document.getElementById("editName").value
    
  })
})

let butDeleteUser=document.getElementById("deleteUserById")
butDeleteUser.addEventListener("click", function(event){
  event.preventDefault
  userFacade.deleteUser(document.getElementById("idToDelete").value)
  .then(alert("USER DELETED"))
  
})









/*
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById("ex4_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    case "ex4": hideAllShowOne("ex4_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");


