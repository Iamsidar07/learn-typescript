//type alias

type User = {
    name: string;
    age: number;
}

type Video = {
    title: string;
    description: string;
    length: number;
    isPublic: boolean;
}

let manoj: User = { name: "Manoj kumar", age: 20 };

const createUser = (user: User): string => {
    return "Success";
}

createUser({ name: "Monu", age: 19 });

const postVideo = (video: Video): string => {
    return 'Posted';
}

postVideo({ title: "Is chatgpt is dangerous for developers", description: "description", length: 8023, isPublic: true })

console.log(manoj);
console.log(typeof manoj);

//Creating Point type first letter capital

type Point = {
    x: number,
    y: number,
}

const getModulus = (point: Point): number => {
    return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}
let point: Point = {
    x: 3,
    y: 4,
}
let modulus = getModulus(point);

console.log(modulus);

//readonly
type readonlyUser = {
    readonly _id: string, //You won't be able to change _id
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number, // ? makes Optional property
}

let readonlyUserVariable: readonlyUser = {
    _id: "8305",
    name: "Manoj",
    email: "mndf@gmail.com",
    isActive: false,
    creditCardDetails: 805368640232 // Not neccessary
}
// readonlyUserVariable._id="-8042" Not allowed to change

readonlyUserVariable.name = "Manoj Singh";
readonlyUserVariable.isActive = !readonlyUserVariable.isActive;

console.log(readonlyUserVariable);

type CardNumber = {
    cardnumber: string,
}
type CardDate = {
    cardDate: string,
}
type CVV = {
    cvv: number
}
type CardDetails = CardNumber & CardDate & CVV;

let card: CardDetails = { cardDate: "702477709", cardnumber: "09321792", cvv: 79230 }

console.log(card)

function postCommentOnYoutubeVideo (videoId:string) : { statusCode:number,message:string }{
    try {
        // if all goes well
        return {statusCode:200,message:"Ok"};
    } catch (error) {
        return {statusCode:400,message:"🤭 Oops! Something went wrong..."};
    }
}

const videoId = "bms6782";

postCommentOnYoutubeVideo(videoId);

export { }