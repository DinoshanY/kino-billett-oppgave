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
  });

  document.getElementById("enDiv").innerHTML = JSON.stringify(storage, null, 4);
  localStorage.tickets = JSON.stringify(storage)
}

//function that just deletes the tickets. 
function deleteTicket() {
  document.getElementById("enDiv").innerHTML = "Biletten har blit slettet";
  storage.pop()
}

//This function will show the tickets that are stored in the local browser

//function showPreviousTicket(){
  //document.getElementById("toDiv").innerHtml = JSON.stringify(localStorage.tickets, null, 2)
//}


console.log(localStorage)