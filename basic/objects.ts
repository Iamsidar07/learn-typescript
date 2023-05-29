const user = {
    name: 'Manoj',
    email: 'ms8460149@gmail.com',
    isActive: true,
}

const createUser = ({ name: string, isActive: boolean = false, }): string => {
    return 'Success'
}

let newUser = { name: 'Manoj', isActive: true };

createUser(newUser);

const createCourse = (): { name: string, price: number } => {
    return { name: 'WebDevSimplified', price: 9621 };
}

createCourse();

export {}