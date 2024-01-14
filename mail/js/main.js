const emailInput = document.getElementById("mail");
const printButton = document.getElementById("print-button");
const resultInput = document.getElementById("message");

const emailList = ["pluto@mail.com", "pippo@mail.com", "paperino@mail.com"];
let control;
printButton.addEventListener("click", function () {
  const email = emailInput.value;

  for (let i = 0; i < emailList.length; i++) {
    if (email == emailList[i]) {
      control = true;
    }
  }

  if (control) {
    console.log("Email corretta");
    resultInput.innerText = "Benvenuto " + email;
  } else {
    console.log("Email NON corretta");
    resultInput.innerText = email + " NON presente nella lista";
  }
});
