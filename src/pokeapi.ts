export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area?limit=20`;
    const result = await fetch(url);
    if(!result.ok){
        throw new Error("failed to fetch locations");
    }
    const data: ShallowLocations = await result.json();
    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const result = await fetch(url);
    if(!result.ok) {
        throw new Error("failed to fetch location");
    }
    const data: Location = await result.json();
    return data;
  }
}
export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};


export type Location = {
  name: string;
  id: number;
};

