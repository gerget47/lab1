let countries = ["Россия", "Китай", "США"];
let population = [146, 1400, 331];

function printCountries() {
    console.log("for")
    for(let i = 0; i < countries.length; i++) {
        console.log(countries[i] + ": " + population[i] + " млн");
    }
    
    console.log("for in")  
    for(let i in countries) {
        console.log(countries[i] + ": " + population[i] + " млн");
    }
}

printCountries();