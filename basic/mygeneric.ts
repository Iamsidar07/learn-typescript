// generic
// declare <T> , T->type
function reverseArray <T> (arr: T[]): T[]{
    //reverse the array
    return arr.reverse();
}

// usage example

let numbers = [1,2,3,4,5];
let newReverseArrayOne = reverseArray<number>(numbers);
console.log(newReverseArrayOne);
let strings = ["🚀","🤭","✅"];
let newReverseArrayTwo = reverseArray<string>(strings);
console.log(newReverseArrayTwo);
