console.log("Welcome to Holberton School, what is your name?");

process.stdin.setEncoding("utf-8");

let nombre;

process.stdin.on("data", (data) => {
  nombre = data.trim();
  console.log(`Your name is: ${nombre}`);
});

process.stdin.on("end", () => {
  console.log("This important software is now closing");
});
