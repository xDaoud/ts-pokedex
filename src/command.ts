import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./commad_catch.js"
import { inspect } from "node:util";
import { inspectCommand } from "./command_inspect.js";
import { pokedexCommand } from "./command_pokedex.js";


export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Display 20 location areas",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Display previous 20 location areas",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Explore a location area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspect a caught pokemon",
            callback: inspectCommand,
        },
        pokedex: {
            name: "pokedex",
            description: "List caught pokemons",
            callback: pokedexCommand,
        }
    };
}