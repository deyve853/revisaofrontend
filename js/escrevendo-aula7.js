var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Quais teclas serve para fechar o nano?");
    if ((nome == "ctrl+x")) {
        alert(nome + ".Parabéns você acertou!");
        window.location = "aula8.html";
    }
    else {
        alert(("Você errou! Tente novamente."));
    }

};