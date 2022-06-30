//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para iniciar o git?");
  if ((nome = "git init")) {
    alert("O" + nome + ", serve para iniciar o git.Parabéns você acertou!");
  }
  else {
    alert(("Você errou! Tente novamente."));
  }
  window.location="aula2.html";
};