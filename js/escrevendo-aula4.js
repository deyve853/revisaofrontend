var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para visualizar informações?");
    if ((nome == "git status")) {
        alert(nome + ",Serve para visualiar as infotmações.Parabéns você acertou!");
        window.location = "aula5.html";
    }
    else {
        alert(("Você errou! Tente novamente."));
    }

};