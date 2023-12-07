document.addEventListener("DOMContentLoaded", function () {
    var numeroSorteado;
    var tentativas = 0;
    var ultimaTeclaClicada;

    function gerarNumeroSorteado() {
        return Math.floor(Math.random() * 18) + 1;
    }

    function iniciarJogo() {
        numeroSorteado = gerarNumeroSorteado();
        tentativas = 0;
        resetTeclado();
        document.querySelector(".advinhe").textContent = "Advinhe o número de 0 a 18";
        ultimaTeclaClicada = null;
    }

    function verificarTentativa(numero, tecla) {
        if (tecla.classList.contains("tentativa-incorreta")) {
            // O botão já foi clicado, ignore o clique
            return;
        }

        tentativas++;
        

        if (numero === numeroSorteado) {
            document.querySelector(".advinhe").textContent = "Parabéns! Você acertou em " + tentativas + " tentativas.";

            tecla.style.background = "green";


        } else if (numero > numeroSorteado) {
            document.querySelector(".advinhe").textContent = "O número é menor!";
            tecla.style.background = "red";
        } else {
            document.querySelector(".advinhe").textContent = "O número é maior!";
            tecla.classList.add("tentativa-incorreta");
            tecla.style.background = "red";
            tecla.removeEventListener("click", clickHandler);
        }

        ultimaTeclaClicada = tecla;
    }

    function resetTeclado() {
        var teclas = document.querySelectorAll(".teclado");
        teclas.forEach(function (tecla) {
            tecla.classList.remove("tentativa-incorreta");
            tecla.style.background = "";
            tecla.addEventListener("click", clickHandler);
        });
    }

    function clickHandler() {
        var numero = parseInt(this.textContent);
        verificarTentativa(numero, this);
    }

    window.reset = function () {
        iniciarJogo();
    };

    document.querySelector(".reiniciar").addEventListener("click", function () {
        iniciarJogo();
    });

    iniciarJogo();
});
