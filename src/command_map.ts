import { State } from "./state.js";
import { PokeAPI } from "./pokeapi.js";

const api = new PokeAPI();

export async function commandMap(state : State): Promise<void> {
    if(!state.nextLocationURL){
        console.log("No more locations to display");
        return;
    }
    const data = await api.fetchLocations(state.nextLocationURL);
    for(const location of data.results){
        console.log(location.name);
    }
    state.nextLocationURL = data.next;
    state.previousLocationURL = data.previous;
}