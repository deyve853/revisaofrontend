var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Como adicionar um repositório?");
    if ((nome == "git remote add origin url")) {
        alert(nome + ",.Parabéns você acertou!");
        window.location = "F.html";
    }
    else {
        alert(("Você errou! Tente novamente."));
    }

};