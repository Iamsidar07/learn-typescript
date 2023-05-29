// Interface

// 💡 Key points

// Used to describe the shape of
// objects, and can be extended by
// others. 

// Almost everything in JavaScript is 
// an object and interface is built 
// to match their runtime behavior

// 💡 Built-in type Primitives

// boolean, string, number, undefined, null, any, unknown, never, void, bigint, symbol

// 💡 Common Built-in JS Object
// Data, Error, Array, Map, Set, Regexp, Promise

// 💡 Type Literals:
// Object
// { field: string }

// 💡 Function:
// (arg: number) => string

// 💡 Arrays:
// string[] or Array<string>

// 💡 Tuple:
// [string, number]

// 💡 Avoid
// Object, String, Number, Boolean

// 💡 COMMON SYNATX

interface JSONResponse  {
    version : number;
    /* In bytes  */
    payloadSize: number;

    outOfStock?:boolean; /* This property might not be on the object */
    update: (retryTimes:number) => void; /* These are two ways to describe a property which is a function */

    // update(retryTimes: number): void; 

    (): JSONResponse /* You can call this obhect via () - ( functions in JS are objects which can be called ) */

    new(s: string): JSONResponse; /* You can use new on the object this interface describes */ 
    [key: string]: number; /* Any property not describe already is assumed to exist, and all properties must be numbers */
      /* Tells TypeScript that a property can not be changed */

}


interface NewUser {
    readonly bdId:number,
    email:string,
    googleId?:number,
    _id:number,
}

const nibba:NewUser = {_id:90274,email:"kaj@g.com",bdId:963520}