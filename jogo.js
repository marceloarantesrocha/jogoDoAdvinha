
let tamanho = prompt("Qual o tamanho do tabuleiro?", 18);
let advinhe = document.getElementsByClassName("advinhe").value;

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let num = "";
let secNum = Math.random("numeros");


numClick.addEventListener("click", () => {
    let numClick = document.querySelectorAll('.teclado').value;

});

for (let i = 0; i < teclado.length; i++) {
    document.addEventListener(click, getNumber(){
        num = document.querySelectorAll("teclado").value;
        alert("num");
    });

};
function checkNumero(numClick) { 
if (numClick === secNum) {
    advinhe = ("Você Ganhou!");
} if (numClick < secNum) {
    advinhe = ("O numero secreto é Maior");
} else {
    advinhe = ("O numero secreto é Menor");
}
}

checkNumero(numClick);

function resset(){
    let tabuleiro = prompt("Qual o tamanho do tabuleiro", "18");
}
