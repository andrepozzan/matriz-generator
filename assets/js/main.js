console.clear();
console.log("%cGerador de Matriz com JS, feito por github.com/andre-possan :D", "color:royalblue; font-weight:bold; font-size:1.2rem; text-decoration:underline");

const title = document.querySelector(".modal__subtitle");
const button = document.querySelector("#button");
const table = document.querySelector("#matriz");

let matriz = [];
let matrizColumnSize;
let matrizRowSize;
let matrizLaw;

function generateMatrizRow(law, numberOfRow, columnSize) {
    let tr = document.createElement("tr");
    let row = [];
    for (let j = 1; j <= columnSize; j++) {
        let th = document.createElement("th");

        let i = numberOfRow;
        let number = eval(law);

        th.innerHTML = number;

        tr.appendChild(th);
        row[j - 1] = number;
    }
    table.appendChild(tr);

    return row;
}

function generateMatriz(law, rowSize, columnSize) {
    matriz = [];
    for (let i = 1; i <= rowSize; i++) {
        let row = generateMatrizRow(law, i, columnSize);
        matriz[i - 1] = row;
    }

    console.log("%c==> Finalizado! :D <==", "color:lightgreen; font-weight:bold; font-size:1.2rem");
    console.log(matriz);
}

button.addEventListener("click", () => {
    title.classList.remove("display-none");
    table.classList.remove("display-none");
    table.parentNode.classList.remove("display-none");

    table.innerHTML = "";

    matrizRowSize = document.querySelector("#Rows").value;
    matrizColumnSize = document.querySelector("#Columns").value;
    matrizLaw = document.querySelector("#Law").value;

    generateMatriz(matrizLaw, matrizRowSize, matrizColumnSize);
});
