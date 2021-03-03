//This functions stores the values of the inputs and then displays them as a JSON string :)
let select = document.querySelectorAll("option");
let storage = [];
const inputs = document.querySelectorAll("input");
const filmvalg = document.querySelectorAll("select");
function dataColl() {
  let obj = {};
  filmvalg.forEach((input) => {
    obj[input.name] = input.value;
    input.value = "";
  });
  storage.push(obj);
  inputs.forEach((input) => {
    obj[input.name] = input.value;
    input.value = "";
    console.log(storage);
  });

  document.getElementById("enDiv").innerHTML = JSON.stringify(storage, null, 4);
  localStorage.tickets = JSON.stringify(storage)
}

function deleteTicket() {
  //inputs.length= 0
  document.getElementById("enDiv").innerHTML = "Biletten har blit slettet";
  storage = [];
}

console.log(localStorage)





