let m = 4, n = 3;
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];
let sumMax = 0;
for(let row of matrix) {
    sumMax += Math.max(...row);
}
let prodMin = 1;
for(let j = 0; j < n; j++) {
    let col = matrix.map(row => row[j]);
    prodMin *= Math.min(...col);
}
console.log("Сумма макс:", sumMax, "Произведение мин:", prodMin);