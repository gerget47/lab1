let age = 17;

console.log("1 ");
if (age >= 18 && age <= 30) {
    console.log("Для молодежи");
} else {
    console.log("Для всех возрастов");
}
 
console.log("\n2");
if (age >= 18 && age <= 30) {
    console.log("Для молодежи");
} else if (age >= 1 && age <= 17) {
    console.log("Для детей");
} else {
    console.log("Для всех возрастов");
}

// Можно проверить с разными значениями age
console.log("\nПроверка с разными значениями:");
let testAges = [15, 22, 35, 0, 18, 30];

for (let i = 0; i < testAges.length; i++) {
    let currentAge = testAges[i];
    console.log("\nВозраст: " + currentAge);
    
    if (currentAge >= 18 && currentAge <= 30) {
        console.log("Для молодежи");
    } else if (currentAge >= 1 && currentAge <= 17) {
        console.log("Для детей");
    } else {
        console.log("Для всех возрастов");
    }
}