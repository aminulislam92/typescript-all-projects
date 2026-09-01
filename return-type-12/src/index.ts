// return type
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(4, 6));

// void ruturn type

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hi, I am a typescript developer.");

// never return type
function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong.");
