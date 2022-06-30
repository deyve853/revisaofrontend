var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando Inicializa o repositório?");
    if (nome == "git init") {
        alert(nome + ",Serve para inicializar repositório.Parabéns você acertou!");
        window.location = "aula4.html";
    }
    else {
        alert(("Você errou! Tente novamente."));

    }

};