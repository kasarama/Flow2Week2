import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import personFacade from "./personFacade"

function loadAll(){
personFacade.getAll()
  .then(data => {

    const tableRows = data.map(person => `
  <tr>
    <td>${person.id}</td>
    <td>${person.fName}</td>
    <td>${person.lName}</td>
    <td>${person.phone}</td>
    <td>${person.street}</td>
    <td>${person.city}</td>
  </tr>
  `)
    const tableRowsAsString = tableRows.join("")
    document.getElementById("tbody").innerHTML = tableRowsAsString
  })
  .catch(err => {
    if (err.status) {
      err.fullError.then(e => {
        console.log("Error: " + e.message)
        document.getElementById("error").innerHTML = e.message
      })
    }
    else {
      console.log("Network error")
    }
  })
}
 
loadAll();


document.getElementById("reload").addEventListener("click", function(event){
  event.preventDefault
  loadAll()
})

let buttAddPerson = document.getElementById("savebtn")

buttAddPerson.addEventListener("click", function (event) {
  event.preventDefault
  const newPerson = {
    firstName: document.getElementById("fname").value,
    lastName: document.getElementById("lname").value,
    phone: document.getElementById("phone").value,
    address: {
      city: document.getElementById("city").value,
      zip: document.getElementById("zip").value,
      street: document.getElementById("street").value
    }

  }


  personFacade.addPerson(newPerson)
  .then(loadAll)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("error").innerHTML = e.message)//send to innerHTML
      }
      else {
        console.log("Networ error")
      }
    })
    
})



// deleteID

let buttDeletePerson = document.getElementById("deletebtn")
buttDeletePerson.addEventListener("click", function (event) {
  event.preventDefault
  
  const id = document.getElementById("deleteID").value
  
  personFacade.deletePerson(id)
  .then(loadAll)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("error").innerHTML = e.message)//send to innerHTML
      }
      else {
        console.log("Networ error")
      }
    })
})

let buttEdit = document.getElementById("editbtn")

buttEdit.addEventListener("click", function(event){
  event.preventDefault

  const editedPerson = {
    id: document.getElementById("editID").value,
    fName: document.getElementById("editFN").value,
    lName: document.getElementById("editLN").value,
    phone: document.getElementById("editPh").value
  }

  personFacade.editPerson(editedPerson)
  .then(loadAll)
  .catch(err => {
    if (err.status) {
      err.fullError.then(e => document.getElementById("error").innerHTML = e.message)//send to innerHTML
    }
    else {
      console.log("Networ error")
    }
  })
})
