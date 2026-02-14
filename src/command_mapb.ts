import { PokeAPI } from "./pokeapi.js";
import { State } from "./state.js";

const api = new PokeAPI();

export async function commandMapb(state : State): Promise<void> {
    if(!state.previousLocationURL){
        console.log("you're on the first location!");
        return;
    }
    const data = await api.fetchLocations(state.previousLocationURL);
    for(const location of data.results){
        console.log(location.name);
    }
    state.nextLocationURL = data.next;
    state.previousLocationURL = data.previous;
}