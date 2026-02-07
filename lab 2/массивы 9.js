let arr1 = [1,2,5,4,6], arr2 = [8,2,5,9,5];
let merged = [...arr1, ...arr2].sort((a,b) => a-b);
let mid = Math.floor(merged.length / 2);
let median = merged.length % 2 ? merged[mid] : (merged[mid-1] + merged[mid]) / 2;
console.log(median);