const inputButton = document.getElementById("input-button");
const resultPlayer = document.getElementById("result-player");
const resultPc = document.getElementById("result-pc");
const resultGame = document.getElementById("result-game");

inputButton.addEventListener("click", function () {
  const playerNum = Math.floor(Math.random() * 6) + 1;
  console.log(playerNum);
  resultPlayer.innerText = "il numero del Giocatore è " + playerNum;

  const pcNum = Math.floor(Math.random() * 6) + 1;
  console.log(pcNum);
  resultPc.innerText = "il numero del Pc è " + pcNum;

  if (playerNum > pcNum) {
    console.log("Il giocatore ha vinto");
    resultGame.innerText = "Il Giocatore ha vinto";
  } else if (playerNum < pcNum) {
    console.log("Il Pc ha vinto");
    resultGame.innerText = "Il Pc ha vinto";
  } else {
    console.log("Il Giocatore e il Pc hanno pareggiato");
    resultGame.innerText = "Il Giocatore e il Pc hanno pareggiato";
  }
});
