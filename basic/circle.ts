// Modules in Typescript
// Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

/* Create a TypeScript module that exports a function called `calculateCircleArea` which takes the radius of a circle as a parameter and returns its area. In a separate file, import the `calculateCircleArea` function and use it to calculate the area of a circle with a radius of 5. Log the result to the console. */

//named import
export function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
   }
// default import
export default function calculateCircleAreaTwo(radius: number): number {
   return Math.PI * radius * radius;
}