var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para commitar?");
    if ((nome == "git commit -m '' ''")) {
        alert(nome + ".Parabéns você acertou!");
        window.location = "aula9.html";
    }
    else {
        alert(("Você errou! Tente novamente."));
    }

};