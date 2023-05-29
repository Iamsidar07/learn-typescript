/* Write a TypeScript function called `divide` that takes two numbers as input and returns the result of dividing the first number by the second number.Handle any potential division by zero errors and throw a custom error named`DivideByZeroError` in such cases. */

function divide (num1: number, num2: number): number {
    //check if the num2 is 0
    if (num2 === 0) {
        throw DivideByZeroError("Can not divide by zero");
    }
    return num1 / num2;
}

function DivideByZeroError(message:string){
    const error = new Error(message);
    error.name = "DivideByZeroError";
    return error;
}

try {
    const result  = divide(10,0);
    console.log(`result: ${result}`);
} catch (error) {
    console.log("An error occured:",error.message);
}