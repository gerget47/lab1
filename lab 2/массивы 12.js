let arr = [1,-2,3,-4,5,-6,7,-8];
for(let i = 0; i < arr.length; i++) {
    if(i % 2 && arr[i] > 0) arr[i] *= 3;
    if(i % 2 === 0 && arr[i] < 0) arr[i] /= 5;
}
console.log(arr);