import { State } from "./state.js";

export async function commandExplore(state:State, ...args: string[]): Promise<void> {
    const area = args[0];
    if(!area){
        console.log("no area specified");
        return;
    }
    console.log(`Exploring ${area}...`);
    const location = await state.api.fetchLocationArea(area);
    console.log("Found Pokemon:");
    for(const encounter of location.pokemon_encounters){
        console.log(`- ${encounter.pokemon.name}`);
    }
}