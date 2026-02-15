import { State } from "./state.js";

export async function pokedexCommand(state:State): Promise<void> {
    console.log("Your Pokedex:");

    const names = Object.keys(state.pokedex);
    if(names.length === 0){
        console.log("Your pokedex is empty, catch some pokemons!");
        return;
    }
    for(const name of names){
        console.log(` - ${name}`);
    }
}