let mat = [
    [1,-6,3,8,-9],
    [4,7,-2,5,10],
    [-3,0,6,-7,2],
    [9,-4,1,3,-8],
    [5,2,-5,4,6]
];
for(let row of mat) {
    for(let val of row) {
        if(val >= -5 && val <= 7) console.log(val);
    }
}