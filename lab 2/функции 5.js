function calculateU(x, y, z) {
    let max1 = Math.max(x, y);
    let max2 = Math.max(x + y, z);
    let max3 = Math.max(0.5, x + z);
    let numerator = max1 + max2;
    let denominator = Math.pow(max3, 2);
    return numerator / denominator;
}

console.log(calculateU(1,2,3));