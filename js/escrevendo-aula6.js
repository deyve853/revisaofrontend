var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para abrir o nano?");
    if ((nome == "nano")) {
        alert(nome + ".Parabéns você acertou!");
        window.location = "aula7.html";
    }
    else {
        alert(("Você errou! Tente novamente."));
    }

};