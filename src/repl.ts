import readline from "node:readline";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

export interface REPLConfig {
  input: NodeJS.ReadableStream;
  output: NodeJS.WritableStream;
  prompt: string;
}

export function startREPL(){
  const config: REPLConfig = {
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > " , 
  }

  const rl = readline.createInterface(config);
  rl.prompt();

  rl.on("line", (line: string) => {
    const words = cleanInput(line);
    if(words.length === 0){
      rl.prompt();
      return;
    }
    console.log(`Your command was: ${words[0]}`);
    rl.prompt();
  });
}