var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para Listar os commits?");
    if ((nome == "git log")) {
        alert(nome + ",Serve para listar os recursos da pasta.Parabéns você acertou!");
        window.location = "aula10.html";
    }
    else {
        alert(("Você errou! Tente novamente."));
    }

};