/*
  This file is just added to show you how you can use ES6 exports
  Observe, in index.js, how you can import
*/

//Setup some dummy test data
const jokes = [
  "A day without sunshine is like, night.",
  "At what age is it appropriate to tell my dog that he's adopted?",
  "I intend to live forever, or die trying",
  "My own joke is not so funny, so I won't tell it"
]

function addJoke(joke) {
  jokes.push(joke);
}

function getJokeById(i) {
  return jokes[i];
}

function getJokes() {
  return jokes;
}

/* Make sure you understand what we create here, it involves VITAL JavaScript knowledge */
const jokeFacade = {
  addJoke,
  getJokeById,
  getJokes
}


window.jokes = jokes; //Only for debugging

export default jokeFacade;