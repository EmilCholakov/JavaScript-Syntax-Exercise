function productOfNums(numbers) {
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    let num3 = Number(numbers[2]);

    let multiply = num1 * num2 * num3;
    if (multiply >= 0) {
        console.log("Positive");
    }
    else {
        console.log("Negative");
    }
}
let numbers = [-5, 5, 5];
productOfNums(numbers);