// functions in typescript
// function paramiter type, return type, function signature type

// function functionName(){
//     // logic
// }

// function with typescript

// function functionName(parameterName: type, para2: type): returnType {
//   // logic
// }

function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("Snigdha"));

// function type signature
let greetFunction: (name: string) => string;

greetFunction = function (name: string): string {
  return `Hi ${name}`;
};

console.log(greetFunction("Lovely"));
