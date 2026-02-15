import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]):Promise<void> {
    const name = args[0];
    if(!name){
        console.log("Please provide a pokemone name");
        return;
    }
    console.log(`Throwing a Pokeball at ${name}...`);
    const pokemon = await state.api.fetchPokemon(name);
    const chance = 5 / pokemon.base_experience;
    if(Math.random() < chance) {
        console.log(`${name} was caught`);
        state.pokedex[name] = pokemon;
    } else {
        console.log(`${name} escaped!`);
    }
}