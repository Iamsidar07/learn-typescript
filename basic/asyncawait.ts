/*Asynchronous programming is a way of writing code that can handle events that happen at a later time.This is useful for things like making network requests, reading from files, or performing other operations that take some time to complete.

In TypeScript, there are two main ways to write asynchronous code: promises and async /await.

** Promises **

    Promises are objects that represent the outcome of an asynchronous operation.They can be in one of three states: fulfilled, rejected, or pending.

A fulfilled promise represents an operation that has completed successfully.A rejected promise represents an operation that has failed.A pending promise represents an operation that is still in progress.

You can create promises using the `Promise` constructor.For example, the following code creates a promise that will be fulfilled with the value `10` after 1 second: */

import * as Promise from "@types/node";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

/*

You can also use the `async/await` syntax to create promises.For example, the following code is equivalent to the previous example:
*/

async function get10() {
  const value = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
  return value;
}
/*
    ** Async /await **

    Async / await is a syntax that makes it easier to write asynchronous code.It allows you to write code that looks synchronous, even though it is actually asynchronous.

To use async / await, you need to mark your function with the`async` keyword.For example:



Inside an `async` function, you can use the `await` keyword to wait for a promise to resolve.For example:

*/
// const value = await get10();
/*

The `await` keyword will pause the execution of the function until the promise has resolved.Once the promise has resolved, the execution of the function will resume and the value of the promise will be returned.

** Example **

    The following code is an example of how you can use promises and async / await to make a network request:

*/
async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk");
  const data = await response.json();
  return data;
}
/*

This function first creates a `fetch` request to the OpenWeatherMap API.The `fetch` request returns a promise, so we use the `await` keyword to wait for it to resolve.Once the request has resolved, we use the `json` method to parse the response data into an object.Finally, we return the object.

** Conclusion **

    Promises and async / await are powerful tools that can help you write asynchronous code in TypeScript.By using these tools, you can make your code more readable, maintainable, and efficient.
*/

async function delayedGreetingAsync(name: string): Promise<string> {
    const promise = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            const data = `Hello ${ name }`;
            resolve(data);
        }, 3000);
    });
    const value = await promise;
    console.log(value);
    return value;
}
delayedGreetingAsync("Manoj Sidar");
