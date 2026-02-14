import { State } from "./state.js";


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

export function startREPL(state: State) {
    const rl = state.rl;
    const commands = state.commands;
	rl.prompt();
	rl.on("line", async (line: string) => {
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
			await command.callback(state);
		} catch (error) {
			console.error(error);
		}
		rl.prompt();
	});
}