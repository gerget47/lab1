let num = 47;

switch(num) {
    case 1:
        console.log("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        console.log(`На ветке сидит ${num} вороны`);
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(`На ветке сидит ${num} ворон`);
        break;
    default:
        console.log("Неверное число");
}