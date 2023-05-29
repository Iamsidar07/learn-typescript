function addTwo(num: number): number {
    return num + 2;
}

addTwo(2);

function getUpperCase(value: string): string {
    return value.toUpperCase();
}
getUpperCase('Manoj Singh');

function signUpUser(name: string, email: string, password: string, isSubscribed: boolean): boolean {
    return true;
}

signUpUser('Manoj', 'ms8460149@gmail.com', 'bj12325;w5', true);

let loginUser = (name: string, email: string, isSubscribed: boolean = false): string => {
    return 'Success'
}

loginUser('Manoj', 'ms923482@gmail.com');


const getHello = (name: string): string => {
    return 'Hello ' + name;
}

getHello('Manoj');

const fruits = ['🎃', '🪲', '🐼'];
fruits.map((fruit): string => `Fruit is ${fruit}`);

const consoleError = (errorMessage: string): void => {
    console.log(errorMessage);
    // return nothing
}

consoleError('Error');

const handleError = (errorMessage: string): never => {
    // return never 
    throw new Error(errorMessage);
}

handleError('Error');

export { }