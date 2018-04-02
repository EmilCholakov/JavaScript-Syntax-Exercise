function multiplyOrDevide(numbers) {
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
if (num2 >= num1) {
    let multiply = num1 * num2;
    console.log(multiply);
}
else {
    let devide = num1 / num2;
    console.log(devide);
}
}

//Change ur input here.
let numbers = [20, 21];

multiplyOrDevide(numbers);