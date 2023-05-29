// | -> union 

let score: number | string = 6048; //Score can be number or string
score = '75936';

type User = {
    name: string,
    id: string,
}
type Admin = {
    username: string,
    id: string
}

let manoj: User | Admin = { name: "Manoj Kumar", id: "09735" }

manoj = { username: "iamsidar07", id: "93750mbfs65" }

//If we want to allow only some specific value not other than that

//let say an example in which we want to book seat in a train so it can have only some specific value

let railwayBirthSection:"middle"|"lower"|"upper";//and more possible value but not anything

railwayBirthSection="lower";

// | or 

console.log(manoj);