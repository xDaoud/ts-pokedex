import { type Interface } from "readline";
import readline from "node:readline";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
    rl: Interface,
    commands: Record<string, CLICommand>,
    api: PokeAPI,
    nextLocationURL: string | null,
    previousLocationURL: string | null,
};
export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};
export function initState(): State{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
  });
	const commands = getCommands();
    const api = new PokeAPI()
    return {
        rl,
        commands,
        api,
        nextLocationURL: "https://pokeapi.co/api/v2/location-area?limit=20",
        previousLocationURL: null,
    }
}