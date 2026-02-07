let arr = Array.from({length:10}, () => Math.floor(Math.random()*100));
console.log("До:", arr);
let maxIdx = arr.indexOf(Math.max(...arr));
let minIdx = arr.indexOf(Math.min(...arr));
[arr[maxIdx], arr[minIdx]] = [arr[minIdx], arr[maxIdx]];
console.log("После:", arr);