//This functions stores the values of the inputs and then displays them as a JSON string :)
let select = document.querySelectorAll("option")
let storage = [];
const inputs = document.querySelectorAll("input");
function dataColl() {
    let obj = {};
  inputs.forEach((input) => {
    obj[input.name] = input.value;
    input.value = "";
  });
  storage.push(obj);
  document.getElementById("enDiv").innerHTML = JSON.stringify(storage, null, 4);
}



select.forEach((element)=>{
    console.log(element.value);
})
