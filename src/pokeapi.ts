import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache = new Cache();

    constructor() { }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area?limit=20`;

        const cached = this.cache.get<ShallowLocations>(url);
        if (cached) {
            return cached;
        }
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error("failed to fetch locations");
        }
        const data: ShallowLocations = await result.json();
        this.cache.add(url, data);
        return data;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cached = this.cache.get<Location>(url);
        if (cached) {
            return cached;
        }
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error("failed to fetch location");
        }
        const data: Location = await result.json();
        this.cache.add(url, data);
        return data;
    }

    async fetchLocationArea(areaName: string): Promise<LocationArea> {
        const url = `${PokeAPI.baseURL}/location-area/${areaName}`;
        const cached = this.cache.get<LocationArea>(url);
        if(cached) {
            return cached;
        }
        const result = await fetch(url);
        if(!result.ok) {
            throw new Error("failed to fetch area");
        }
        const data: LocationArea = await result.json();
        this.cache.add(url, data);
        return data;
    }
    
}
export interface ShallowLocations {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
};


export interface Location {
    name: string;
    id: number;
};

export interface LocationArea {
    pokemon_encounters: {
        pokemon: {
            name: string;
            url: string;
        };
    }[];
};