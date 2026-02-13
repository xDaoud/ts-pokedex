import { CLICommand } from "./command.js";
export function commandExit(_command: Record<string, CLICommand>): void {

    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}
