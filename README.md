
# Pokédex CLI

A **command-line Pokédex built with TypeScript** that interacts with the **PokeAPI**.
Users can explore Pokémon locations, attempt to catch Pokémon, inspect their stats, and keep track of caught Pokémon in a personal Pokédex.

This project demonstrates:

* API integration
* In-memory caching
* CLI command architecture
* Strong TypeScript typing
* Asynchronous programming
* Testing with Vitest

---

# Features

## Explore Locations

List Pokémon found in a specific location area.

```
Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
- tentacool
- tentacruel
- magikarp
- gyarados
```

---

## Catch Pokémon

Attempt to catch a Pokémon.

```
Pokedex > catch pikachu
Throwing a Pokeball at pikachu...
pikachu escaped!
```

Catch probability is based on the Pokémon's **base experience**.

```
Pokedex > catch pikachu
Throwing a Pokeball at pikachu...
pikachu was caught!
You may now inspect it with the inspect command.
```

---

## Inspect Pokémon

View detailed information about a Pokémon **only if it has been caught**.

```
Pokedex > inspect pidgey

Name: pidgey
Height: 3
Weight: 18
Stats:
 - hp: 40
 - attack: 45
 - defense: 40
 - special-attack: 35
 - special-defense: 35
 - speed: 56

Types:
 - normal
 - flying
```

If the Pokémon has **not been caught**:

```
you have not caught that pokemon
```

---

## Pokédex

List all Pokémon you have successfully caught.

```
Pokedex > pokedex
Your Pokedex:
 - pidgey
 - caterpie
```

---

# Commands

| Command              | Description                       |
| -------------------- | --------------------------------  |
| `explore <location>` | List Pokémon in a location area   |
| `catch <pokemon>`    | Attempt to catch a Pokémon        |
| `inspect <pokemon>`  | Show details of a caught Pokémon  |
| `pokedex`            | List all caught Pokémon           |
| `help`               | Show available commands           |
| `exit`               | Exit the CLI                      |
| `map`                | Display 20 location areas         |
| `mapb`               | Display previous 20 location areas|

---

# Caching System

The application implements a **custom in-memory cache** to reduce unnecessary API requests.

Features:

* Key-value storage
* Automatic expiration
* Background reaping loop that removes stale entries
* Configurable expiration interval

This improves performance when repeatedly querying the same Pokémon or locations.

---

# Tech Stack

* **TypeScript**
* **Node.js**
* **PokeAPI**
* **Vitest** (testing framework)

---

# Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/pokedex-cli.git
```

Navigate into the project:

```bash
cd pokedex-cli
```

Install dependencies:

```bash
npm install
```

---

# Running the CLI

Start the application:

```bash
npm run dev
```

You should see:

```
Pokedex >
```

---

# Running Tests

Run the test suite with:

```bash
npm run test
```

Tests cover the caching system, ensuring cached entries expire correctly.


---

# Future Improvements

Potential enhancements:

* Persist Pokédex data to disk
* Display Pokémon sprites
* Improve catch probability algorithm
* Add Pokémon search functionality
* Add battle simulation

---

# API

This project uses **PokeAPI**:

[https://pokeapi.co/](https://pokeapi.co/)

---

# Acknowledgments

This project was built as part of the **TypeScript backend curriculum** on
Boot.dev.

Boot.dev provides hands-on guided projects focused on building real backend systems using modern tools and languages.

---


