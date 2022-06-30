var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para Navegar nas pastas?");
  if ((nome == "cd ou cd ..")) {
    alert(nome + ", serve para navegar entre as pastas.Parabéns você acertou!");
    window.location = "aula3.html";
  }
  else {
    alert(("Você errou! Tente novamente."));
  }
 
};