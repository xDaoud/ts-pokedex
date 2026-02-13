import readline from "node:readline";
import { CLICommand, getCommands } from "./command.js";



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

export function startREPL() {
	const commands = getCommands();
	const config: REPLConfig = {
		input: process.stdin,
		output: process.stdout,
		prompt: "Pokedex > ",
	}



	const rl = readline.createInterface(config);
	rl.prompt();
	rl.on("line", (line: string) => {
		const words = cleanInput(line);
		if (words.length === 0) {
			rl.prompt();
			return;
		}

		const command = commands[words[0]];
		if (!command) {
			console.log("Unknown command");
			rl.prompt();
			return;
		}
		try {
			command.callback(commands);
		} catch (error) {
			console.error(error);
		}
		rl.prompt();
	});
}