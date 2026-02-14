import { State } from "./state.js";

export async function commandExit(state: State): Promise<void> {
    console.log("Closing the Pokedex... Goodbye!");
    state.rl.close();
    process.exit(0); // this returns never, so it won't give an error if you removed async
    //but we put it anyway, for consistency with the other commands
}