function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}


const URL = "https://selself.com/person/api/person/"




function getAll() {
    return fetch(URL+"all")
        .then(handleHttpErrors)

}

function getPersonById(id){
    const options = makeOptions("GET", id)
    return fatch(URL, options)
    .then(handleHttpErrors)
}

function addPerson(person){
    console.log("add person:")
    const options = makeOptions("POST", person)
    
    return fetch(URL,options)
    .then(handleHttpErrors)
 
}
function editPerson(person){
    const options = makeOptions("PUT", person)
    .then(console.log("In deletePerson"))
    return fatch(URL, options)
    .then(handleHttpErrors)
}

function deletePerson(id){
    const options = makeOptions("DELETE", id)
    return fatch(URL, options)
    .then(handleHttpErrors)
}

const personFacade = {
    getAll,
    getPersonById,
    addPerson,
    editPerson,
    deletePerson
}

export default personFacade





function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}