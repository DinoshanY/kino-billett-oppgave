//This functions stores the values of the inputs and then displays them as a JSON string :)
let select = document.querySelectorAll("option");
let storage = JSON.parse(localStorage.storage || null) || [];
const inputs = document.querySelectorAll("input");
const filmChoice = document.querySelectorAll("select");

function dataColl() {
  let obj = {};
  filmChoice.forEach((input) => {
    obj[input.name] = input.value;
    input.value = "";
  });
  inputs.forEach((input) => {
    obj[input.name] = input.value;
    input.value = "";
  });
  storage.push(obj);

  document.getElementById("enDiv").innerHTML = JSON.stringify(storage, null, 2);
  populateList();
}

function deleteTicket() {
  storage.pop();
  document.getElementById("enDiv").innerHTML = JSON.stringify(storage);
}

const STORAGEKEY = "Tickets";

let moviesJSON = JSON.stringify(storage);

localStorage.setItem(STORAGEKEY, moviesJSON);

moviesJSON = localStorage.getItem(STORAGEKEY);
if (moviesJSON !== null) {
  storage = JSON.parse(moviesJSON);
} else {
  storage = [];
}

function populateList() {
  const ul = document.getElementById("liste");

  ul.innerHTML = "";
  storage.forEach((element) => {
    ul.innerHTML += `<li> Kjøpte ${element.tickets} billeter for ${element.film} </li>`;
  });
}
