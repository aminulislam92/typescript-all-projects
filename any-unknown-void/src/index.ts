// any, unknown, void, null, undefined

// any type
let randomValue: any = "Hello";

randomValue = true;

randomValue = 10;

// unknown type
let value: unknown = "World";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// void type
function logMessage(): void {
  console.log("Logged successfully!");
}

logMessage();

function greeting(name: string): string {
  return `Hello ${name}`;
}

console.log(greeting("Md. Aminul Islam Sohag"));

// undefined type
let name;
console.log(name);

let age: undefined = undefined;
console.log(age);

let runScore: number | undefined = undefined;
if (typeof runScore === "number") {
  console.log(runScore);
} else {
  console.log("Not found");
}

// null type
let score = null;
console.log(score);

let nullValue: null = null;
console.log(nullValue);
