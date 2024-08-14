let number = 5;
let number2 = 5;
let div = 1;

let maxDiv = number2 > number ? number : number2;

for (let i = 1; i < maxDiv + 1; i++) {
    if (number2 % i === 0 && number % i === 0) {
        div = i;
    }
}

console.log(maxDiv);
