// powered by https://www.aicodebuddy.com/

// Refactored code 
const emojis: string[] = [];  // declare an array of strings
const nums: number[] = [];  // declare an array of numbers
const anotherNums: Array<number> = [];  // declare another array of numbers

type Size = {     // declare an object type called Size, with width and height properties
    width: number,
    height: number,
}

type Photo = {     // declare an object type called Photo, with alt, url, and size properties
    alt: string,
    url: string,
    size: Size
}

const posters: Array<Photo> = [];  // declare an array of type Photo

// add an item to posters
posters.push({ alt: "Super Man", url: "euotpe", size: { height: 7023, width: 97135 } });

// add an item to anotherNums
anotherNums.push(0);

// add an item to nums
nums.push(32);

// add an item to emojis
emojis.push("🐼");

// log the results of the refactored code
console.log({ anotherNums, nums, emojis, posters });

// Export the refactored code
export { };