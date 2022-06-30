var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para Listar recurso da pasta?");
    if ((nome == "ls")) {
        alert(nome + ",Serve para listar os recursos da pasta.Parabéns você acertou!");
        window.location = "aula6.html";
    }
    else {
        alert(("Você errou! Tente novamente."));
    }

};