console.log('hello typescript');
// compile tsc ts_file_ka_naam
// then run node js_file_ka_naam
// const num1: number = 10;
// function calculate(num1: number, num2: number): number{
//     return num1 + num2;
// }

// function getTotal(numbers: number[]):number{
//     const total = numbers.reduce((acc,item)=>{
//         return acc + item;
//     },0);
//     return total;
// }

// const numbers = [1,2,3,4,5,6,7];
// const result = getTotal(numbers);
// console.log({result});

// const user = {
//     firstName: 'Monika',
//     lastName: 'Sidar',
//     role: 'student'
// };

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.role);

// Type alias
// used to creat custom type

// type User = {
//     name: string;
//     age: number;
//     address?: string; // makes it optional
// }

// const user: User = { name: "Monu", age: 19 };
// console.log(user);

// function userLogin(userData: User): User {
//     return userData;
// }

// console.log(userLogin({ name: "Monu", age: 20 }));

// type ID = number | string; // | like or

// const userId: ID = "790";

// Interface
// =  sign nahi hota

// interface Transaction { 
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// };

// interface BankAccount {
//     accountNumber: number;
//     accountHolderName: string;
//     balance: number;
//     isActive: boolean;
//     transactions: Transaction[];
// };

// const transaction1: Transaction = {
//     payeeAccountNumber:70194751,
//     payerAccountNumber:70526046,
// };

// const transaction2: Transaction  = {
//     payeeAccountNumber: 70194751,
//     payerAccountNumber: 7052976546046,
// };

// const bankAccount: BankAccount = {
//     accountHolderName: "Manoj Kumar",
//     accountNumber:7093632696429080,
//     balance:70945,
//     isActive:true,
//     transactions: [transaction1]
// };

// Extends Interface
// interface Book {
//     name: string;
//     price: number;
// };

// interface EBook {
//     name: string;
//     price: number;
//     fileSize: number;
//     formate: string;
// };

// interface EBook extends Book {
//     fileSize: number;
//     formate: string;
// };
// interface AudioBook extends EBook {
//     duration: number;
// };

// const book: Book = {
//     name: "Physics Galaxy",
//     price:701,
// };
// const eBook: EBook = {
//    name: "Santusti",
//    price:79,
//    fileSize:7923709,
//    formate:"pdf"
// };

// const audioBook: AudioBook = {
//     duration:12,
//     fileSize:907,
//     formate:"mp3",
//     name:"Hawas",
//     price:55
// }

// merging interface , make interface with the same naame typescript merges their property

// interface Book {
//     name: string;
//     price: number;
// }

// interface Book {
//     size: number;
// }

// const book: Book = {
//     name:"Sexation",
//     price:120,
//     size:128
// }

//Can not merge type
// type Book = {
//     name: string;
//     price: number;
// };

// type Book = {
//     size: number;
// }

// type SanitizedString = string;
// type EvenNumber = number;

// Unions

// type ID =  number | string;

// function printID(id: ID) {
//    if (typeof id === "string") {
//     return id.toUpperCase();
//    }else{
//     return id;
//    }
// }
// console.log(printID(1));
// console.log(printID('1'));

// function getFirstThree(x: string | string[]) : string | string[]{
//     return x.slice(0,3);
// }
// console.log(getFirstThree('Manoj'));
// console.log(getFirstThree(["K","g","ka","Bachcha"]));

// Generics

// T can be -> anything
// function logAnything<anything>(arg: anything): anything{
//     console.log(arg);
//     return arg;
// };

// logAnything(932);
// logAnything([230,24,4]);
// logAnything(["hksd"]);

// interface HasAge {
//     age: number;
// };

// function getOldest<T extends HasAge>(people: T[]): T{
//     return people.sort((a,b)=>b.age - a.age) [0]; //sorted in descending order
// };

// const people: HasAge[] = [  {age:10},{age:92},{age:109}];

// console.log(getOldest(people));

// interface Player {
//     name: string;
//     age: number;
// };

// const players: Player[] = [
//     { name: "Monu khiladi",age:20},
//     { name: "SuperMan",age:30},
//     { name: "X-Man",age:10},
// ];

// console.log(getOldest(players));
// Assertion not good thing 
// const person = getOldest(players) as Player;

// const person = getOldest(players);
// console.log(person.age,person.name);

interface IPost {
    name: string;
    id: string;
    description: string;
}

// const fetchPostData = async(path: string): Promise<IPost[]>=>{
//   const response = await fetch(`https://www.exmaple.com${path}`);
//   return response.json();
// }

interface IUser {
    name: string;
    age: number;
    description: string;
}

// const fetchUesrData = async(path: string): Promise<IUser[]>=>{
//   const response = await fetch(`https://www.exmaple.com${path}`);
//   return response.json();
// }

// const fetchData = async <ResultType>(path: string): Promise<ResultType>=>{
//     const response = await fetch(`https://www.exmaple.com${path}`);
//     return response.json();
// }

// (async ()=>{
// //   const posts = await fetchPostData('/posts'); 
// // const users = await fetchUesrData('/users');
// const users = await fetchData<IUser[]>('/users');
// // users[0].age
// })();

// Structural typing or duck typing
// do object same having same property and method typescript treat them as same object
// interface ICredential {
//     username: string;
//     password: string;
//     isAdmin?:boolean;
// }

// function login(credential: ICredential) : boolean{
//     console.log(credential);
//     return true;
// }

// const user = {
//     username: 'iamsidar07',
//     password:'seceretePassword',
//     isAdmin:true,
// }

// login(user);

// functions sin interface
// interface IAuth {
//     username: string;
//     password: string;
//     login(username: string, password: string): boolean; // function in interface
// };
// const auth: IAuth = {
//     username: 'iamsidar07',
//     password: 'strongPassword',
//     login(username: string, password: string) {
//         return true;
//     }
// };

let num = 1; // infererance
let str = 'Manoj Singham';


export { }