// optional and default parameters
function greet(firstName: string, lastName: string, title?: string): string {
  return `Hello ${firstName} ${lastName} ${title ?? ""} is a great name!`;
}

console.log(greet("Mr.", "Alice"));
console.log(greet("Mr.", "Alice", "Doctor"));

// default parameters
function welcomeMessage(name: string = "Guest"): string {
  return `Welcome ${name}`;
}

console.log(welcomeMessage());
console.log(welcomeMessage("Md. Aminul Islam Sohag"));
