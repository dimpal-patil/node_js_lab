export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

 export const logger = (message) => {
    console.log(`[${new Date().toISOString()}] = ${message}`);
 }