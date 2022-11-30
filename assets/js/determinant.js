/* const initialMatriz = [
    [3, 1, 5],
    [2, 0, -2],
    [-1, 4, -3],
]; */

/* const x = 13;

const initialMatriz = [
    [1, 2, 1],
    [4, 9, 4],
    [6, x, x - 7],
]; */

const initialMatriz = [
    [1, 7, 1],
    [2, 9, -1],
    [1, 2, 2],
];

function addColumns(matriz) {
    const rowSize = matriz.length;
    const columnSize = matriz[0].length;

    for (let x = 0; x < rowSize; x++) {
        for (let y = columnSize; y < columnSize + 2; y++) {
            matriz[x][y] = matriz[x][y - columnSize];
        }
    }

    return matriz;
}

function returnDiagonals(matriz, parameter) {
    const rowSize = matriz.length;
    const columnSize = matriz[0].length;

    let diagonals = [];

    if (parameter === "mainDiagonals") {
        for (let y = 0; y < columnSize - 2; y++) {
            let diagonal = [];
            for (let x = 0; x < rowSize; x++) {
                diagonal.push(matriz[x][x + y]);
            }
            diagonals.push(diagonal);
        }
    } else if (parameter === "secondaryDiagonals") {
        for (let y = columnSize - 1; y > 1; y--) {
            let diagonal = [];
            for (let x = 0; x < rowSize; x++) {
                diagonal.push(matriz[x][y - x]);
            }
            diagonals.push(diagonal);
        }
    }

    return diagonals;
}

function returnArrayElementsProduct(array) {
    let calc = 1;
    for (let i = 0; i < array.length; i++) {
        calc = calc * array[i];
    }
    return calc;
}

function calcDeterminant(mainDiagonals, secondaryDiagonals) {
    let mainResult = 0;
    mainDiagonals.forEach((row) => {
        mainResult = mainResult + returnArrayElementsProduct(row);
    });
    console.log("Main:", mainResult);

    let secondaryResult = 0;
    secondaryDiagonals.forEach((row) => {
        secondaryResult = secondaryResult + returnArrayElementsProduct(row);
    });
    console.log("Secondary:", secondaryResult);

    console.log("Determinant:", mainResult - secondaryResult);
}

let matrizToCalcDeterminant = addColumns(initialMatriz);

let mainDiagonals = returnDiagonals(matrizToCalcDeterminant, "mainDiagonals");

let secondaryDiagonals = returnDiagonals(matrizToCalcDeterminant, "secondaryDiagonals");

calcDeterminant(mainDiagonals, secondaryDiagonals);
